# McDonald's Website — Autonomous Candidate

A zero-paid-dependency, static front-end recreation of the McDonald's digital experience.

## What is included

- Responsive homepage with a promotional carousel.
- Menu browsing with categories, search and sorting.
- Product detail dialogs and cart.
- Local-only demo checkout with validation and confirmation state.
- Local-only demo rewards points.
- Restaurant locator with sample data and map-style visualization.
- Deals, app, about, FAQ, contact, accessibility, privacy and terms pages.
- Keyboard focus styles, skip link and reduced-motion support.
- No payment provider, account system, geolocation permission or external API is required.

## Run locally

The site is intentionally dependency-free. Serve this directory with any static server, for example:

```bash
python3 -m http.server 4173
```

Then open `http://localhost:4173/`.

## Demo data policy

Real McDonald's prices, restaurant locations, order availability and account state are not universal and can vary by market. This project therefore marks sample prices and locations as demo data rather than presenting invented values as real production information.

Product/menu naming and digital-experience patterns are grounded in current official McDonald's pages listed in `evidence/research/keyphrase-dossier.md`.
