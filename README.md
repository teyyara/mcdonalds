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

## Current validation state

The active release candidate is validated by the repository's GitHub Actions workflow on PR synchronization. The exact candidate commit `17baa3fdd0736f6802493a041bc68da7f9edb3f0` passed the full Playwright/axe browser certification and Lighthouse quality gate.

The candidate is being promoted through Pull Request #1 after resolving the README-only branch divergence with `main`. `main` remains the stable handoff branch until the post-merge validation run is green.

## Progress / review

The active release candidate is developed on [`aeos/mcdonalds-release-candidate`](https://github.com/teyyara/mcdonalds/tree/aeos/mcdonalds-release-candidate).

Review it in [Pull Request #1](https://github.com/teyyara/mcdonalds/pull/1).

**Important:** This is a demonstration website, not an official McDonald's site or live ordering system.
