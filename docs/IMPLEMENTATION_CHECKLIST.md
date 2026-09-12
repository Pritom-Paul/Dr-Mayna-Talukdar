# Implementation and QA Checklist

## Before coding

- [ ] `docs/CONTENT_INTAKE.md` completed
- [ ] Authoritative CV/publication source received
- [ ] GitHub username and repository name confirmed
- [ ] Public contact and profile links approved
- [ ] Portrait/logo permissions confirmed
- [ ] English/multilingual and publication download policy confirmed
- [ ] Detailed CV conflicts resolved: books, articles, and project statuses
- [ ] Privacy decision made for scholar names, countries visited, and service roles
- [ ] Exact official web profile URLs supplied or verified
- [ ] Inclusion rule applied: verified content included, unsupported content omitted
- [ ] Publication titles copied exactly from the detailed CV
- [ ] Links added only for reliable title-matched sources
- [ ] Unmatched publication links left empty
- [ ] `docs/CONTENT_MATRIX.md` reviewed section by section
- [ ] Every displayed record has source/provenance metadata
- [ ] Final preflight gate in `planner.md` completed

## Foundation

- [ ] Tailwind installed using the current Astro-compatible setup
- [ ] `astro.config.mjs` has confirmed `site` and `base`
- [ ] Global fonts, colors, spacing, focus, and reduced-motion styles added
- [ ] Layout metadata, canonical URL, favicon, skip link, header, footer added
- [ ] Base-aware links used throughout

## Content and components

- [ ] Verified `src/data/profile.json` created
- [ ] Hero renders identity and research focus
- [ ] Projects render status, dates, funder, and links
- [ ] Books category renders complete verified inventory
- [ ] Articles category renders complete verified inventory
- [ ] Search/filter controls are keyboard accessible, if enabled
- [ ] Supervision stats and lecture history render accurately
- [ ] Teaching subjects and academic service render accurately
- [ ] Appointment/teaching timeline renders chronologically
- [ ] English/Bengali toggle is keyboard accessible and preserves layout
- [ ] Contact section exposes only approved public details

## Verification

- [ ] `npm run build` passes
- [ ] Local preview tested at `/dr-mayna-portfolio/`
- [ ] No broken links or missing assets
- [ ] No invented data or unresolved accidental placeholders
- [ ] Published counts equal the itemized verified records
- [ ] Keyboard-only navigation tested
- [ ] Screen-reader landmarks and heading order checked
- [ ] Image alt text checked
- [ ] Color contrast checked
- [ ] Mobile, tablet, desktop, and long-title layouts checked
- [ ] GitHub Actions workflow passes
- [ ] Deployed GitHub Pages URL verified
