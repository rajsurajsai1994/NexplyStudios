"""Generate a unique 1200x630 share image per blog post.

Reads titles/categories below (kept in sync with src/lib/blogPosts.ts) and
writes public/og/blog-<slug>.png - a branded dark card with the post title,
so each article looks distinct in social and search previews instead of
sharing one default image.
"""
import os
from PIL import Image, ImageDraw, ImageFont

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT = os.path.join(ROOT, "public", "og")
os.makedirs(OUT, exist_ok=True)

W, H = 1200, 630
FONT_DIR = "C:/Windows/Fonts"
BOLD = os.path.join(FONT_DIR, "arialbd.ttf")
REG = os.path.join(FONT_DIR, "arial.ttf")

CATEGORY_LABEL = {
    "designers": "FOR DESIGNERS",
    "brands": "FOR BRANDS",
    "developers": "FOR DEVELOPERS",
}

POSTS = [
    ("why-your-logo-isnt-the-problem", "Why your logo isn't the problem", "designers"),
    ("website-that-looks-good-vs-one-that-works", "The difference between a website that looks good and one that works", "designers"),
    ("nobody-cares-about-google-business-until-they-do", "Nobody cares about your Google Business listing (until they do)", "brands"),
    ("why-most-rebrands-fail-before-launch", "Why most rebrands fail before they even launch", "brands"),
    ("what-fast-website-actually-means", "What \u201cfast website\u201d actually means", "developers"),
    ("app-nobody-asked-for-vs-one-people-need", "Building an app nobody asked for vs one people actually need", "developers"),
    ("handing-design-to-developers-without-it-falling-apart", "Handing design over to developers without it falling apart", "designers"),
    ("brand-colours-that-hold-up-in-the-real-world", "Choosing brand colours that hold up in the real world", "designers"),
    ("instagram-looks-fine-not-bringing-customers", "Your Instagram looks fine. So why isn't it bringing customers?", "brands"),
    ("hyderabad-one-shop-get-found-online", "How a Hyderabad business with one shop actually gets found online", "brands"),
    ("why-we-still-pick-wordpress-2026", "Why we still pick WordPress for some projects in 2026", "developers"),
    ("what-seo-geo-aeo-change-in-code", "What SEO, GEO and AEO actually change in the code we ship", "developers"),
]

# Brand gradient stops (approx of gradientA: blue -> violet -> orange)
GRAD = [(28, 78, 255), (172, 36, 255), (254, 136, 27)]


def lerp(a, b, t):
    return tuple(round(a[i] + (b[i] - a[i]) * t) for i in range(3))


def grad_color(t):
    if t <= 0.5:
        return lerp(GRAD[0], GRAD[1], t / 0.5)
    return lerp(GRAD[1], GRAD[2], (t - 0.5) / 0.5)


def wrap(draw, text, font, max_w):
    words = text.split()
    lines, cur = [], ""
    for w in words:
        trial = (cur + " " + w).strip()
        if draw.textlength(trial, font=font) <= max_w:
            cur = trial
        else:
            if cur:
                lines.append(cur)
            cur = w
    if cur:
        lines.append(cur)
    return lines


def make(slug, title, category):
    img = Image.new("RGB", (W, H), (13, 14, 31))
    d = ImageDraw.Draw(img)

    # vertical background gradient
    top, bot = (10, 11, 26), (24, 20, 52)
    for y in range(H):
        t = y / H
        d.line([(0, y), (W, y)], fill=lerp(top, bot, t))

    # soft radial-ish glow top-left
    glow = Image.new("RGB", (W, H), (0, 0, 0))
    gd = ImageDraw.Draw(glow)
    gd.ellipse([-260, -320, 560, 360], fill=(60, 40, 120))
    img = Image.blend(img, Image.composite(glow, img, glow.convert("L").point(lambda p: min(p, 90))), 0.5)
    d = ImageDraw.Draw(img)

    # top accent bar
    for x in range(W):
        d.line([(x, 0), (x, 8)], fill=grad_color(x / W))

    PAD = 84
    # category chip
    chip_font = ImageFont.truetype(BOLD, 24)
    label = CATEGORY_LABEL.get(category, "THE NEXPLY BLOG")
    tw = d.textlength(label, font=chip_font)
    d.rounded_rectangle([PAD, 78, PAD + tw + 44, 78 + 44], radius=22, outline=(120, 110, 200), width=2)
    d.text((PAD + 22, 78 + 9), label, font=chip_font, fill=(200, 190, 255))

    # title
    size = 66
    while size > 40:
        tf = ImageFont.truetype(BOLD, size)
        lines = wrap(d, title, tf, W - 2 * PAD)
        if len(lines) <= 4:
            break
        size -= 4
    tf = ImageFont.truetype(BOLD, size)
    lines = wrap(d, title, tf, W - 2 * PAD)
    lh = size + 16
    block_h = lh * len(lines)
    y = (H - block_h) // 2 + 10
    for ln in lines:
        d.text((PAD, y), ln, font=tf, fill=(255, 255, 255))
        y += lh

    # footer
    ff = ImageFont.truetype(BOLD, 26)
    rf = ImageFont.truetype(REG, 22)
    d.text((PAD, H - 92), "The Nexply Blog", font=ff, fill=(255, 255, 255))
    d.text((PAD, H - 58), "nexplystudio.com", font=rf, fill=(150, 140, 190))

    # gradient dots bottom-right
    for i in range(3):
        cx = W - PAD - i * 46
        d.ellipse([cx - 14, H - 74, cx + 14, H - 46], fill=grad_color(0.15 + i * 0.35))

    path = os.path.join(OUT, f"blog-{slug}.png")
    img.save(path, optimize=True)
    print("wrote", os.path.relpath(path, ROOT), os.path.getsize(path) // 1024, "KB")


for slug, title, category in POSTS:
    make(slug, title, category)
