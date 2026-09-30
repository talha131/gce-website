"""Render a book PDF (single pages, no spreads) into page images for the flipbook.

    python3 scripts/render-book.py BOOK.pdf OUT_DIR [--front COVER.jpg] [--back COVER.jpg] [--pdf MERGED.pdf]

Writes OUT_DIR/pages/NNN.webp (1600px tall) and OUT_DIR/thumbs/NNN.webp,
numbered from 001, in reading order. --front / --back put photographed covers
before the first and after the last page; a cover photo whose shape differs
from the book's pages is fitted whole onto a page-sized sheet of its own edge
colour, never cropped. --pdf also writes one merged PDF: cover pages made from
the photos, then the book's own pages copied losslessly (pdfunite), so the
text stays selectable.

For a magazine delivered as cover spreads plus a body PDF, use
render-magazine.py instead. Needs poppler (pdftoppm, pdfunite, pdfinfo) and Pillow.
"""
import argparse, glob, os, re, subprocess, tempfile
from PIL import Image, ImageStat

HEIGHT = 1600
THUMB = 180

ap = argparse.ArgumentParser()
ap.add_argument('pdf')
ap.add_argument('out')
ap.add_argument('--front')
ap.add_argument('--back')
ap.add_argument('--pdf', dest='merged')
args = ap.parse_args()

info = subprocess.run(['pdfinfo', args.pdf], capture_output=True, text=True, check=True).stdout
pw, ph = map(float, re.search(r'Page size:\s+([\d.]+) x ([\d.]+)', info).groups())
width = round(pw * HEIGHT / ph)


def edge_colour(im):
    """Average colour of a photo's outer border — the fill around a fitted cover."""
    w, h = im.size
    strips = [im.crop((0, 0, w, 8)), im.crop((0, h - 8, w, h)), im.crop((0, 0, 8, h)), im.crop((w - 8, 0, w, h))]
    means = [ImageStat.Stat(s).mean for s in strips]
    return tuple(round(sum(m[c] for m in means) / 4) for c in range(3))


def cover_page(path):
    photo = Image.open(path).convert('RGB')
    scale = min(width / photo.width, HEIGHT / photo.height)
    fitted = photo.resize((round(photo.width * scale), round(photo.height * scale)), Image.LANCZOS)
    sheet = Image.new('RGB', (width, HEIGHT), edge_colour(photo))
    sheet.paste(fitted, ((width - fitted.width) // 2, (HEIGHT - fitted.height) // 2))
    return sheet


os.makedirs(f'{args.out}/pages', exist_ok=True)
os.makedirs(f'{args.out}/thumbs', exist_ok=True)
with tempfile.TemporaryDirectory() as tmp:
    subprocess.run(['pdftoppm', '-scale-to-y', str(HEIGHT), '-scale-to-x', str(width), '-png', args.pdf, f'{tmp}/p'], check=True)
    body = [Image.open(p).convert('RGB') for p in sorted(glob.glob(f'{tmp}/p-*.png'))]
    front = [cover_page(args.front)] if args.front else []
    back = [cover_page(args.back)] if args.back else []
    pages = front + body + back
    for i, page in enumerate(pages, 1):
        page.save(f'{args.out}/pages/{i:03d}.webp', quality=80, method=6)
        page.resize((round(width * THUMB / HEIGHT), THUMB), Image.LANCZOS).save(f'{args.out}/thumbs/{i:03d}.webp', quality=70, method=6)

    if args.merged:
        parts = []
        for name, cover in (('front', front), ('back', back)):
            if cover:
                # A cover page at the book's own page size in points.
                cover[0].save(f'{tmp}/{name}.pdf', resolution=HEIGHT / (ph / 72), quality=85)
        if front:
            parts.append(f'{tmp}/front.pdf')
        parts.append(args.pdf)
        if back:
            parts.append(f'{tmp}/back.pdf')
        subprocess.run(['pdfunite', *parts, args.merged], check=True)
        print('merged pdf', args.merged, f'{os.path.getsize(args.merged) / 1e6:.1f} MB')

print(f'{len(pages)} pages ({len(front)} front cover, {len(body)} book, {len(back)} back cover), {width}x{HEIGHT} -> {args.out}')
