"""Make near-black pixels transparent in metrics-ornament-alpha.png."""
from __future__ import annotations

from pathlib import Path

from PIL import Image


def main() -> None:
    path = Path(__file__).resolve().parents[1] / "public" / "images" / "metrics-ornament-alpha.png"
    img = Image.open(path).convert("RGBA")
    w, h = img.size
    px = img.load()
    thresh = 55
    for y in range(h):
        for x in range(w):
            r, g, b, a = px[x, y]
            if a == 0:
                continue
            lum = 0.299 * r + 0.587 * g + 0.114 * b
            chroma = max(r, g, b) - min(r, g, b)
            if lum < thresh and chroma < 35:
                px[x, y] = (r, g, b, 0)
            elif r < 30 and g < 30 and b < 30:
                px[x, y] = (r, g, b, 0)
    out = path
    img.save(out, format="PNG", optimize=True)
    print("saved", out, w, h)


if __name__ == "__main__":
    main()
