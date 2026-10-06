# Keyphrase Research Dossier

**Active keyphrase:** Build a fully functional mcdonalds website  
**Normalized interpretation:** Build a polished, responsive McDonald's-style restaurant website prototype using the U.S. McDonald's digital experience as the primary reference model. The implementation must be self-contained, zero-paid-dependency oriented, and must not present demo data as live business facts.  
**Research date:** 2026-10-06  
**Research state:** COMPLETE  
**Freshness:** CURRENT for time-sensitive digital-experience observations captured on 2026-10-06

## Scope and ambiguity

The keyphrase does not name a country/market. McDonald's operates market-specific experiences; the official country selector exposes multiple regional sites. The candidate therefore uses the U.S. official experience as the reference market and clearly labels the implementation as a demo rather than claiming to be an official production property.

## Authoritative findings

### Digital experience
- The current U.S. homepage emphasizes ordering convenience and routes users toward pickup, delivery, deals, rewards and restaurant discovery.
- The official restaurant directory provides a dedicated location-finding journey.
- The official Mobile Order & Pay FAQ describes pickup methods including curbside, front counter, table service and Drive Thru, with availability varying by restaurant/time.
- The official Deals FAQ states that deals are surfaced through the McDonald's app and that deal availability can change over time.
- The official Rewards pages describe MyMcDonald's Rewards, including points earning and reward redemption workflows.
- The official menu is a broad catalog covering burgers, chicken, breakfast, sides, desserts and beverages.
- The official accessibility page says digital usability/accessibility work is guided by W3C/WCAG recommendations and periodically tested with assistive technology.

## Product/design implications

FACT: Ordering, menu discovery, rewards/deals and restaurant location are central journeys in the current U.S. digital experience.

INFERENCE: A convincing prototype should make those journeys first-class navigation destinations and keep ordering reachable from the primary navigation.

FACT: Menu availability and prices may vary by location/market.

INFERENCE: This demo must label its pricing and location data as illustrative rather than live.

## Technical implications

- A static, dependency-free front end is sufficient for a functional prototype with local cart/rewards state.
- Real accounts, payments, live inventory, live geolocation and restaurant APIs are intentionally outside the certified demo scope.
- All client-side transaction state is local-only and must not imply a real order was submitted.

## Accessibility implications

- Target WCAG 2.2 AA as the engineering baseline.
- Provide skip navigation, semantic headings, keyboard-reachable controls, visible focus, accessible labels and reduced-motion support.
- Do not equate implementation with completed automated/manual accessibility certification.

## Security implications

- No real credentials or payment data are collected.
- No external order side effect is performed.
- Demonstration state is stored locally only.
- The production/demo notice prevents users from confusing the prototype with a live ordering system.

## SEO implications

- Provide a meaningful title and description.
- Include robots.txt and sitemap.xml.
- Avoid unsupported claims and avoid representing the prototype as the official McDonald's site.

## Research limitations

- Live restaurant pricing and availability are location-specific and were not used as authoritative production data.
- The candidate does not claim real-time ordering, payment, account login, geolocation or live restaurant data.
- Visual/UX research is based on the current public U.S. site structure and accessible official content; it is not an exhaustive scrape.

## Source registry

1. McDonald's USA homepage — https://www.mcdonalds.com/us/en-us.html — McDonald's USA — retrieved 2026-10-06.
2. McDonald's full menu — https://www.mcdonalds.com/us/en-us/full-menu.html — McDonald's USA — retrieved 2026-10-06.
3. MyMcDonald's Rewards — https://www.mcdonalds.com/us/en-us/mymcdonalds.html — McDonald's USA — retrieved 2026-10-06.
4. Mobile Order & Pay FAQ — https://www.mcdonalds.com/us/en-us/mcdonalds-app/faqen.html — McDonald's USA — retrieved 2026-10-06.
5. Deals FAQ — https://www.mcdonalds.com/us/en-us/faq/deals.html — McDonald's USA — retrieved 2026-10-06.
6. Restaurant directory — https://www.mcdonalds.com/us/en-us/restaurant-directory.html — McDonald's USA — retrieved 2026-10-06.
7. Accessibility — https://www.mcdonalds.com/us/en-us/accessibility.html — McDonald's USA — retrieved 2026-10-06.
8. Country selector — https://www.mcdonalds.com/us/en-us/country-selector.html — McDonald's USA — retrieved 2026-10-06.

## Gate

**KEYPHRASE_RESEARCH: COMPLETE**

Broad research performed; multiple query families used; authoritative current sources checked; market ambiguity investigated; risks, content constraints and research limitations recorded; additional searches were yielding primarily overlapping first-party information.
