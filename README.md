# BIOCESS — Spring Subun Ampoule Website

K-Beauty brand website for BIOCESS, Seoul. A fully static multi-page site for the Spring Subun Ampoule (Hyaluron MAX 80+), now live on Amazon US.

---

## 🛍️ Amazon Product Page
**https://www.amazon.com/dp/B0H327LYWT**

---

## ✅ Completed Features

### Phase 1 — Full Website Build
- Multi-page static site (5 pages)
- Design system: Mint Green `#7FD4AF`, Deep Green `#2D5F4E`, Coral `#FFB6A3`
- Typography: Cormorant Garamond (serif) + Montserrat (sans)
- Mobile-first responsive design (1024px / 768px / 480px breakpoints)
- Sticky header with scroll-based frosted glass transition
- Mobile hamburger navigation
- Scroll-triggered fade-up / fade-in animations (Intersection Observer)
- Custom lightbox for gallery images
- Ingredient search/filter (real-time DOM filter)
- FAQ accordion
- Counter animations
- Genspark Table API integration (newsletter + contact forms)
- All images: 9 original product + 6 AI-generated + 12 new studio photos

### Phase 2 — Email + Analytics
- All contact emails unified to: `jihoon@shewha.co.kr`
- Google Analytics 4 (`G-M8Z8BWN2E7`) in all 5 HTML `<head>` sections

### Phase 3 — Amazon Launch Update (COMPLETE)
- All "Coming Soon" / pre-launch language replaced with "Now Available on Amazon"
- All newsletter/notification forms replaced with Amazon purchase CTAs
- All "Notify Me" / "Early Access" buttons → Amazon buy links
- Nav CTA buttons across all pages → "Buy on Amazon"
- Footer Amazon icons → linked to product page
- 12 new studio photos integrated across all pages
- `index.html`: Full rewrite — new hero, #amazon-cta strip, #why-choose section, lifestyle photo strip, #buy-cta section
- `product.html`: New gallery with studio photos, Amazon buy CTA section replacing newsletter
- `science.html`: Amazon buy CTA replacing pre-launch notification CTA
- `about.html`: "Shop on Amazon" CTA replacing "Be First to Know" section; brand photo updated
- `contact.html`: "Early Access Signup" section replaced with Amazon buy section; "Early Access Request" category → "Order Support"

---

## 📄 Pages & URIs

| Page | Path | Description |
|------|------|-------------|
| Home | `index.html` | Hero, problem/solution, showcase, ingredients, FAQ, buy CTA |
| Product | `product.html` | Gallery, product info, how-it-works, how-to-use, ingredients table |
| Science | `science.html` | HA guide, 5-type MW tech, science article, K-Beauty timeline |
| About | `about.html` | Brand story, philosophy, logo showcase, sustainability |
| Contact | `contact.html` | Contact form, info cards, Amazon buy section, FAQ teaser |

---

## 🗂️ File Structure

```
index.html
product.html
science.html
about.html
contact.html
css/
  style.css         — Global design system
  home.css          — Homepage section styles
  product.css       — Product page styles
  science.css       — Science page styles
js/
  main.js           — All JavaScript (nav, animations, forms, lightbox, gallery, search)
images/
  logo-biocess.jpg
  product-hero.jpg
  product-drip.jpg
  product-bubbles.jpg
  product-lineup.jpg
  product-usage.jpg
  serum-droplets.jpg
  dropper-texture.jpg
  product-box.jpg
  lifestyle-model.jpg     (AI-generated)
  nature-dewdrops.jpg     (AI-generated)
  science-waves.jpg       (AI-generated)
  model-portrait.jpg      (AI-generated)
  spring-nature.jpg       (AI-generated)
  model-smile.jpg         (AI-generated)
  product-water1.jpg      (studio)
  product-water2.jpg      (studio — hero image)
  product-dropper-open.jpg (studio)
  product-tray.jpg        (studio)
  product-sink.jpg        (studio)
  product-boxes-row.jpg   (studio)
  product-stone.jpg       (studio)
  product-dropper-drop.jpg (studio)
  product-basket.jpg      (studio)
  product-shelf-box.jpg   (studio)
  product-basket-set.jpg  (studio)
  product-wood-shelf.jpg  (studio)
README.md
```

---

## 🗄️ Data Models (Genspark Table API)

### `newsletter_subscribers`
| Field | Type | Description |
|-------|------|-------------|
| id | text | UUID (auto) |
| email | text | Subscriber email |
| name | text | Optional name |
| created_at | datetime | Signup timestamp |

### `contact_messages`
| Field | Type | Description |
|-------|------|-------------|
| id | text | UUID (auto) |
| name | text | Sender name |
| email | text | Sender email |
| subject | text | Inquiry type |
| message | rich_text | Message body |
| created_at | datetime | Submission timestamp |

---

## 🎨 Design System

| Token | Value |
|-------|-------|
| Primary Light | `#7FD4AF` (Mint Green) |
| Primary Dark | `#2D5F4E` (Deep Green) |
| Accent | `#FFB6A3` (Coral) |
| Font Serif | Cormorant Garamond |
| Font Sans | Montserrat |

---

## 🔗 External Integrations

- **Amazon**: https://www.amazon.com/dp/B0H327LYWT
- **Instagram**: https://www.instagram.com/biocess
- **Google Analytics**: G-M8Z8BWN2E7
- **Google Fonts**: Cormorant Garamond + Montserrat
- **Font Awesome**: 6.5.0 via jsDelivr

---

## 📋 Recommended Next Steps

1. **Amazon reviews widget** — Embed Amazon customer reviews on product page (when reviews accumulate)
2. **Customer photos section** — Add a UGC (user-generated content) gallery from Amazon buyers
3. **Refill program page** — Sustainability refill program planned for 2026
4. **Multi-language** — Korean language version of the site
5. **SEO optimization** — Add structured data (JSON-LD) for product schema
6. **Email newsletter** — Now that launch phase is over, a post-purchase newsletter list with skincare tips could be added back

---

*Last updated: Phase 3 complete — Amazon launch messaging live across all 5 pages.*
