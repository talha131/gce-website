"""Shrink a scanned (image-only) PDF by re-encoding each page as JPEG.

Scanned past papers were saved with lossless page images (~3-6 MB a page).
Each page is rendered at its native scan resolution (203 ppi) and re-saved as
JPEG, so nothing is resized. PDFs that contain real text (fonts) are copied
unchanged, as is any PDF the re-encode would not make meaningfully smaller.

Needs poppler (pdftoppm, pdffonts) and Pillow. Usage:

    python3 scripts/shrink-scanned-pdf.py SRC DST [dpi] [quality]

Used for the Student Resources past papers (public/student-resources/past-papers/);
run it on any new scanned paper before adding it.
"""
import os, shutil, subprocess, sys, tempfile, glob
from PIL import Image

src, dst = sys.argv[1], sys.argv[2]
dpi = int(sys.argv[3]) if len(sys.argv) > 3 else 203
quality = int(sys.argv[4]) if len(sys.argv) > 4 else 72
os.makedirs(os.path.dirname(dst), exist_ok=True)

fonts = subprocess.run(['pdffonts', src], capture_output=True, text=True).stdout.strip().splitlines()
if len(fonts) > 2:  # header + rule, then one line per font
    shutil.copyfile(src, dst)
    print(f'copied (has text)  {os.path.getsize(dst) / 1e6:6.1f} MB  {dst}')
    sys.exit()

with tempfile.TemporaryDirectory() as tmp:
    subprocess.run(['pdftoppm', '-r', str(dpi), '-jpeg', '-jpegopt', f'quality={quality}', src, f'{tmp}/p'], check=True)
    pages = [Image.open(p).convert('RGB') for p in sorted(glob.glob(f'{tmp}/p-*.jpg'))]
    out = f'{tmp}/out.pdf'
    pages[0].save(out, save_all=True, append_images=pages[1:], resolution=dpi, quality=quality)
    before, after = os.path.getsize(src), os.path.getsize(out)
    if after < before * 0.8:
        shutil.copyfile(out, dst)
        print(f'shrunk {before / 1e6:6.1f} -> {after / 1e6:5.1f} MB  {len(pages):2d} pages  {dst}')
    else:
        shutil.copyfile(src, dst)
        print(f'copied (no gain)   {before / 1e6:6.1f} MB  {dst}')
