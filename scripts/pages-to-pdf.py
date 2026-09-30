"""Bind a flipbook's rendered pages into one PDF, in the same book order.

    python3 scripts/pages-to-pdf.py BOOK_DIR OUT.pdf [--dpi 137] [--quality 80]

Reads BOOK_DIR/pages/NNN.webp (as written by render-magazine.py) and saves them
as a single JPEG-compressed PDF — for a magazine whose print files are far too
large to publish (the 2024 Mashal-e-Ilm print PDFs are 130 MB). The PDF's page
size comes from --dpi: 1600px pages at 137 dpi are A4 height (842 pt).
"""
import argparse, glob
from PIL import Image

Image.init()  # register every codec — the PDF writer encodes pages as JPEG

ap = argparse.ArgumentParser()
ap.add_argument('book')
ap.add_argument('out')
ap.add_argument('--dpi', type=float, default=137)
ap.add_argument('--quality', type=int, default=80)
args = ap.parse_args()

files = sorted(glob.glob(f'{args.book}/pages/*.webp'))
pages = [Image.open(f).convert('RGB') for f in files]
pages[0].save(args.out, save_all=True, append_images=pages[1:], resolution=args.dpi, quality=args.quality)
print(f'{len(pages)} pages -> {args.out}')
