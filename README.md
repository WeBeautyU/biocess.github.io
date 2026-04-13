# BIOCESS — Spring Subun Ampoule Website

## 🌿 Project Overview

**Brand**: BIOCESS Seoul  
**Product**: Spring Subun Ampoule — HYALURON MAX 80+  
**Purpose**: Brand & product launch website (pre-launch, Amazon US coming June 2025)  
**Language**: English  
**Built with**: Static HTML/CSS/JavaScript (Genspark Static Website)

---

## ✅ Completed Features

### Pages
| Page | File | Status |
|------|------|--------|
| Home | `index.html` | ✅ Complete |
| The Product | `product.html` | ✅ Complete |
| Science | `science.html` | ✅ Complete |
| About Brand | `about.html` | ✅ Complete |
| Contact | `contact.html` | ✅ Complete |

### Homepage Sections
- ✅ Hero Section with animated product image + trust badges
- ✅ Problem Statement with statistics
- ✅ 5-Layer Hydration Solution (animated layer breakdown)
- ✅ Product Showcase Gallery (lightbox-enabled)
- ✅ Ingredient Story (5 key actives)
- ✅ Coming Soon Timeline (with Amazon launch milestone)
- ✅ Instagram Feed Grid (@biocess)
- ✅ FAQ Accordion (6 questions)
- ✅ Newsletter / Email Signup (connected to Genspark Table API)

### Product Page
- ✅ Interactive 8-thumbnail gallery with main image switcher
- ✅ Product description (storytelling format)
- ✅ 5 Key Benefits list
- ✅ How It Works (5-layer skin cross-section diagram)
- ✅ How To Use (5-step visual guide)
- ✅ Full Ingredient List (25 ingredients with search filter)
- ✅ Size & Value statistics section

### Science Page
- ✅ What is Hyaluronic Acid (full 700+ word guide)
- ✅ 5 Molecular Weight Cards (with animated depth bars)
- ✅ Single vs. Multi-weight comparison
- ✅ Deep-dive science article (full text)
- ✅ K-Beauty Innovation timeline
- ✅ Sticky sidebar with navigation + key facts

### About Page
- ✅ Our Story
- ✅ Brand Philosophy (3 core values)
- ✅ Brand Logo Showcase
- ✅ Sustainability Commitment (6 pillars)

### Contact Page
- ✅ Contact form with inquiry type selector
- ✅ Contact info cards
- ✅ Early Access signup section
- ✅ Social links

### Technical Features
- ✅ Sticky header with scroll detection (transparent → frosted glass)
- ✅ Mobile hamburger menu with full-screen overlay
- ✅ Scroll animations (Intersection Observer API)
- ✅ Counter animations for statistics
- ✅ Ingredient search/filter functionality
- ✅ Lightbox image viewer
- ✅ Toast notifications for form submissions
- ✅ FAQ accordion
- ✅ Fully responsive (mobile-first, tested down to 320px)
- ✅ Google Fonts (Cormorant Garamond + Montserrat)
- ✅ Font Awesome 6 icons

---

## 📁 File Structure

```
/
├── index.html           # Homepage
├── product.html         # Product detail page
├── science.html         # Science / HA education page
├── about.html           # Brand story + sustainability
├── contact.html         # Contact form + early access
├── css/
│   ├── style.css        # Global styles, layout, components
│   ├── home.css         # Homepage-specific styles
│   ├── product.css      # Product page styles
│   └── science.css      # Science page styles
├── js/
│   └── main.js          # All JavaScript (navigation, animations, API calls)
└── images/
    ├── product-hero.jpg       # Product main hero shot
    ├── product-box.jpg        # Product + box packaging
    ├── product-drip.jpg       # Serum dripping visual
    ├── product-bubbles.jpg    # Product in bubbles concept
    ├── product-lineup.jpg     # 5 bottles lineup
    ├── product-usage.jpg      # Hand application shot
    ├── serum-droplets.jpg     # Texture closeup
    ├── dropper-texture.jpg    # Dropper macro closeup
    ├── logo-biocess.jpg       # BIOCESS Seoul brand logo
    ├── lifestyle-model.jpg    # AI: Korean woman applying serum
    ├── nature-dewdrops.jpg    # AI: Morning dew on green leaves
    ├── science-waves.jpg      # AI: HA molecule water waves
    ├── model-portrait.jpg     # AI: Close-up radiant skin portrait
    ├── spring-nature.jpg      # AI: Spring cherry blossom nature
    └── model-smile.jpg        # AI: Model with luminous skin
```

---

## 🔗 Page URLs & Navigation

| URL | Description |
|-----|-------------|
| `/index.html` | Homepage with hero, problem/solution, ingredients, FAQ |
| `/product.html` | Full product detail page |
| `/product.html#how-it-works` | 5-layer skin diagram |
| `/product.html#how-to-use` | Application guide |
| `/product.html#ingredients-full` | Full ingredient list |
| `/science.html` | HA science education hub |
| `/science.html#ha-guide` | Hyaluronic acid basics |
| `/science.html#molecular-weights` | 5-type HA technology |
| `/science.html#kbeauty` | K-Beauty innovation timeline |
| `/about.html` | Brand story & philosophy |
| `/about.html#philosophy` | Brand values |
| `/about.html#sustainability` | Sustainability commitment |
| `/contact.html` | Contact form |
| `/contact.html#early-access` | Amazon early access signup |

---

## 🗄️ Data Models (Genspark Table API)

### `newsletter_subscribers`
| Field | Type | Description |
|-------|------|-------------|
| id | text | Auto UUID |
| email | text | Subscriber email |
| name | text | Name (optional) |
| source | text | Page where signed up |
| subscribed_at | datetime | Signup timestamp |

### `contact_messages`
| Field | Type | Description |
|-------|------|-------------|
| id | text | Auto UUID |
| name | text | Sender name |
| email | text | Sender email |
| subject | text | Inquiry type |
| message | rich_text | Message content |
| sent_at | datetime | Send timestamp |

---

## 🎨 Design System

**Colors**
- Primary: `#7FD4AF` (Mint Green)
- Primary Dark: `#2D5F4E` (Deep Green)
- Accent: `#FFB6A3` (Soft Coral)
- Background: `#F8F9F8` (Off-White)
- Text: `#2C2C2C` (Charcoal)

**Typography**
- Headings: Cormorant Garamond (serif)
- Body: Montserrat (sans-serif)

---

## ❌ Features Not Yet Implemented

- [ ] Google Analytics 4 (insert GA4 tag in `<head>` of all pages)
- [ ] Real Instagram API feed (currently uses product images as placeholders)
- [ ] Before & After skin simulation slider
- [ ] Clinical Results page (planned, awaiting data)
- [ ] Amazon product page link (when live)
- [ ] 360° product viewer
- [ ] Multi-language support (Korean / English)

---

## 🚀 Recommended Next Steps

1. **Add GA4**: Insert `gtag.js` script in all page `<head>` sections
2. **Update Amazon Link**: Replace `#` href with live Amazon URL when launched
3. **Instagram**: Replace placeholder images with actual @biocess posts using Instagram Basic Display API (requires authentication)
4. **Clinical Results**: Add to science page when efficacy data is available
5. **SEO**: Add structured data (JSON-LD for Product schema)
6. **Performance**: Optimize large PNG images (convert to WebP format)
7. **Analytics**: Set up conversion tracking for newsletter signups

---

*Built with ❤️ for BIOCESS Seoul — K-Beauty innovation from the heart of Korea.*
