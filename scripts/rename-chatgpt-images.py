"""One-off: rename ChatGPT default filenames under public/images to descriptive names."""
from __future__ import annotations

import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
IMG = ROOT / "public" / "images"

# old basename -> new basename (content-based, kebab-case)
RENAMES: dict[str, str] = {
    "ChatGPT Image 2026年5月9日 18_23_39 (1).png": "stock-luxury-flatlay-bag-watch-jewelry.png",
    "ChatGPT Image 2026年5月9日 18_23_39 (2).png": "stock-luxury-bag-watch-jewelry-floral.png",
    "ChatGPT Image 2026年5月9日 18_23_39 (3).png": "stock-appraisal-staff-customer-watch-bag.png",
    "ChatGPT Image 2026年5月9日 18_23_40 (4).png": "stock-smartphone-photo-appraisal-bag-watch.png",
    "ChatGPT Image 2026年5月9日 18_23_40 (5).png": "stock-gloves-packing-bag-watch-box.png",
    "ChatGPT Image 2026年5月9日 18_23_40 (6).png": "stock-watch-diamond-gold-jewelry-dark.png",
    "ChatGPT Image 2026年5月9日 18_23_42 (7).png": "stock-luxury-marble-slab-bag-watch-jewelry.png",
    "ChatGPT Image 2026年5月9日 18_23_42 (8).png": "stock-boutique-staff-handoff-handbag.png",
    "ChatGPT Image 2026年5月9日 18_23_45 (9).png": "stock-abstract-luxury-podium-marble.png",
    "ChatGPT Image 2026年5月9日 18_23_45 (10).png": "stock-appraisal-desk-gloves-watch-bag-tray.png",
    "ChatGPT Image 2026年5月9日 18_23_59 (1).png": "stock-consultation-tablet-marble-boutique.png",
    "ChatGPT Image 2026年5月9日 18_24_00 (2).png": "stock-handbags-boutique-display-marble.png",
    "ChatGPT Image 2026年5月9日 18_24_00 (3).png": "stock-leather-wallets-cardholders-flatlay.png",
    "ChatGPT Image 2026年5月9日 18_24_00 (4).png": "stock-watches-display-stand-loupe.png",
    "ChatGPT Image 2026年5月9日 18_24_00 (5).png": "stock-gold-jewelry-gems-bullion-flatlay.png",
    "ChatGPT Image 2026年5月9日 18_24_00 (6).png": "stock-boutique-closet-apparel-handbags.png",
    "ChatGPT Image 2026年5月9日 18_24_01 (7).png": "stock-shoes-hero-marketing-english-text.png",
    "ChatGPT Image 2026年5月9日 18_24_01 (8).png": "stock-accessories-belts-sunglasses-hat-scarf.png",
    "ChatGPT Image 2026年5月9日 18_24_01 (9).png": "stock-colored-gems-diamonds-on-rock.png",
    "ChatGPT Image 2026年5月9日 18_24_02 (10).png": "stock-mixed-luxury-goods-flatlay-wide.png",
    "ChatGPT Image 2026年5月9日 18_24_54 (1).png": "stock-marble-consultation-watch-ring.png",
    "ChatGPT Image 2026年5月9日 18_24_54 (2).png": "stock-handbag-hobo-marble.png",
    "ChatGPT Image 2026年5月9日 18_24_54 (3).png": "stock-leather-wallet-cardholder-pouch.png",
    "ChatGPT Image 2026年5月9日 18_24_54 (4).png": "stock-watch-blue-dial-cushion-stand.png",
    "ChatGPT Image 2026年5月9日 18_24_55 (5).png": "stock-ring-sapphire-trillion-diamonds-slate.png",
    "ChatGPT Image 2026年5月9日 18_24_55 (6).png": "stock-gold-bar-curb-chain-dark.png",
    "ChatGPT Image 2026年5月9日 18_24_55 (7).png": "stock-folded-knitwear-scarf-stilllife.png",
    "ChatGPT Image 2026年5月9日 18_24_55 (8).png": "stock-beige-pumps-heels-stone.png",
    "ChatGPT Image 2026年5月9日 18_24_55 (9).png": "stock-belt-scarf-sunglasses-flatlay.png",
    "ChatGPT Image 2026年5月9日 18_24_56 (10).png": "stock-handbag-watch-scarf-marble.png",
    "ChatGPT Image 2026年5月9日 18_27_25 (1).png": "stock-brown-leather-tote-marble.png",
    "ChatGPT Image 2026年5月9日 18_27_27 (2).png": "stock-wallet-cardholder-coincase-tan.png",
    "ChatGPT Image 2026年5月9日 18_27_27 (3).png": "stock-watch-blue-dial-leather-presentation-box.png",
    "ChatGPT Image 2026年5月9日 18_27_28 (4).png": "stock-ring-sapphire-cluster-prongs-slate.png",
    "ChatGPT Image 2026年5月9日 18_27_28 (5).png": "stock-gold-bar-chain-coin-black.png",
    "ChatGPT Image 2026年5月9日 18_27_28 (6).png": "stock-kimono-gold-obi-cream-floral.png",
    "ChatGPT Image 2026年5月9日 18_27_28 (7).png": "stock-kimono-pink-obi-kanzashi.png",
    "ChatGPT Image 2026年5月9日 18_27_29 (8).png": "stock-koban-gold-coins-slate.png",
    "ChatGPT Image 2026年5月9日 18_27_29 (9).png": "stock-brown-leather-loafers-stone.png",
    "ChatGPT Image 2026年5月9日 18_27_29 (10).png": "stock-appraisal-staff-gloves-watch-ring.png",
    "ChatGPT Image 2026年5月9日 18_33_08.png": "stock-smartphone-photo-monogram-bag.png",
}


def main() -> int:
    if not IMG.is_dir():
        print(f"Missing directory: {IMG}", file=sys.stderr)
        return 1

    done = 0
    for old_name, new_name in sorted(RENAMES.items()):
        src = IMG / old_name
        dst = IMG / new_name
        if not src.is_file():
            print(f"skip (missing): {old_name}")
            continue
        if dst.exists() and dst.resolve() != src.resolve():
            print(f"abort: target exists: {new_name}", file=sys.stderr)
            return 2
        src.rename(dst)
        print(f"{old_name} -> {new_name}")
        done += 1

    print(f"Renamed {done} file(s).")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
