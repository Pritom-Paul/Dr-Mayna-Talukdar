# Implementation and QA Checklist

## Before coding

- [x] `docs/CONTENT_INTAKE.md` completed
- [x] Authoritative CV/publication source received
- [ ] GitHub username and repository name confirmed
- [x] Public contact and profile links approved (institutional details only)
- [ ] Portrait/logo permissions confirmed
- [x] English/multilingual and publication download policy confirmed
- [x] Detailed CV conflicts documented transparently; source counts remain visible
- [x] Privacy decision made: sensitive personal details excluded by default
- [x] Exact official web profile URLs supplied or verified
- [x] Inclusion rule applied: verified content included, unsupported content omitted
- [x] Publication titles copied exactly from the detailed CV
- [x] Links added only for reliable title-matched sources
- [x] Unmatched publication links left empty
- [x] `docs/CONTENT_MATRIX.md` reviewed section by section
- [x] Every displayed category has source/provenance metadata in `profile.json`
- [x] Final content preflight gate completed; deployment gate remains open for GitHub identity/browser QA

## Foundation

- [x] Tailwind installed using the current Astro-compatible setup
- [x] `astro.config.mjs` has confirmed `base`; `site` placeholder is intentionally tracked
- [x] Global fonts, colors, spacing, focus, and reduced-motion styles added
- [x] Layout metadata, favicon, skip link, header, footer added
- [x] Static 404 page added with base-aware return link
- [x] Base-aware links used throughout

## Content and components

- [x] Verified `src/data/profile.json` created
- [x] Hero renders identity and research focus
- [x] Projects render status, dates, funder, and links
- [x] Books category renders complete verified inventory
- [x] Articles category renders complete verified inventory
- [x] Search/filter controls deferred as requested
- [x] Supervision stats and lecture history render accurately
- [x] Teaching subjects and academic service render accurately
- [x] Appointment/teaching timeline renders chronologically
- [x] English/Bengali toggle is keyboard accessible and preserves layout
- [x] Contact section exposes only approved public details

## Verification

- [x] `npm run astro -- check` passes
- [x] `npm run build` passes
- [ ] Local preview tested at `/dr-mayna-portfolio/` (Astro dev/preview exits early in this container)
- [x] Generated HTML, assets, and favicon inspected
- [x] External academic source links return HTTP 200
- [x] Repeatable content audit passes
- [x] Static accessibility/output audit passes
- [x] No invented scholar profile or download links
- [x] Published counts explain the itemized CV records
- [ ] Keyboard-only navigation tested in browser
- [x] Screen-reader landmarks and heading order implemented
- [x] Image alt/placeholder treatment implemented
- [ ] Color contrast checked in browser
- [ ] Mobile, tablet, desktop, and long-title layouts checked in browser
- [ ] GitHub Actions workflow passes
- [ ] Deployed GitHub Pages URL verified

## QA notes

- `npm run astro -- check` passes with 0 errors, 0 warnings, and 0 hints.
- `npm run audit:content` and `npm run audit:static` pass.
- `npm run build` passes and emits a static site.
- Generated asset and anchor paths use `/dr-mayna-portfolio/` correctly.
- The sandbox cannot expose an Astro dev/preview socket or browser surface, so browser interaction and visual viewport checks remain for local review.
- Headless Firefox is installed but cannot create/use a fresh profile in this container; no screenshot or interactive browser session was possible.
- `site` still uses the placeholder `https://username.github.io`; replace it before deployment.
