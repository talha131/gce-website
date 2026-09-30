"""Render a magazine issue's print PDFs into page images for the flipbook.

The college supplies each issue as two print files: a "title layout" of cover
spreads (each sheet is two pages side by side, with crop marks and a spine
strip) and the "magazine layout" of single A4 pages. The flipbook on the
magazine page reads them as one book, so this script:

  1. renders every page at 1600px tall and saves it as WebP (a few hundred KB,
     against 130 MB of print PDF — readers never download the PDFs);
  2. splits each cover spread at its crop marks into two pages, dropping the
     bleed and the spine;
  3. orders them like the physical book: front cover, the inside cover and
     title spreads, every magazine page, then the back cover last;
  4. writes a small thumbnail of every page for the viewer's page strip.

Needs poppler (pdftoppm) and Pillow. Usage:

    python3 scripts/render-magazine.py TITLE.pdf MAGAZINE.pdf OUT_DIR

OUT_DIR gets pages/NNN.webp and thumbs/NNN.webp, numbered from 001.
"""
import glob, os, subprocess, sys, tempfile
from PIL import Image

HEIGHT = 1600  # rendered page height in px — enough to read small print zoomed in
THUMB = 180
# Crop marks on the title-layout spreads, in PDF points (1296 x 900 sheet):
# trim box y 29–870, left page x 25–637, right page x 658–1270 (spine between).
TRIM_Y = (29, 870)
LEFT_X = (25, 637)
RIGHT_X = (658, 1270)

title_pdf, mag_pdf, out = sys.argv[1], sys.argv[2], sys.argv[3]
os.makedirs(f'{out}/pages', exist_ok=True)
os.makedirs(f'{out}/thumbs', exist_ok=True)


def render(pdf, dpi, tmp, prefix):
    subprocess.run(['pdftoppm', '-r', str(dpi), '-png', pdf, f'{tmp}/{prefix}'], check=True)
    return sorted(glob.glob(f'{tmp}/{prefix}-*.png'))


with tempfile.TemporaryDirectory() as tmp:
    # Title spreads: pick a dpi that makes the trimmed page HEIGHT px tall.
    dpi = HEIGHT / (TRIM_Y[1] - TRIM_Y[0]) * 72
    spreads = []
    for path in render(title_pdf, round(dpi), tmp, 't'):
        sheet = Image.open(path).convert('RGB')
        k = sheet.height / 900  # px per point
        box = lambda x: (round(x[0] * k), round(TRIM_Y[0] * k), round(x[1] * k), round(TRIM_Y[1] * k))
        spreads.append((sheet.crop(box(LEFT_X)), sheet.crop(box(RIGHT_X))))

    subprocess.run(['pdftoppm', '-scale-to-y', str(HEIGHT), '-scale-to-x', '-1', '-png', mag_pdf, f'{tmp}/m'], check=True)
    body = [Image.open(p).convert('RGB') for p in sorted(glob.glob(f'{tmp}/m-*.png'))]

    # Sheet 1 is the outside cover: [back | front]. The remaining sheets are
    # inside spreads that open the book.
    (back, front), rest = spreads[0], spreads[1:]
    pages = [front] + [half for spread in rest for half in spread] + body + [back]

    for i, page in enumerate(pages, 1):
        page = page.resize((round(page.width * HEIGHT / page.height), HEIGHT), Image.LANCZOS)
        page.save(f'{out}/pages/{i:03d}.webp', quality=80, method=6)
        thumb = page.resize((round(page.width * THUMB / page.height), THUMB), Image.LANCZOS)
        thumb.save(f'{out}/thumbs/{i:03d}.webp', quality=70, method=6)
    print(f'{len(pages)} pages -> {out} (front cover, {2 * len(rest)} inside-cover pages, {len(body)} magazine pages, back cover)')
