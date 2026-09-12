# Dr. Mayna Talukdar Academic Portfolio — Master Planner

## 1. Current project baseline

- Framework: Astro `^7.3.2`
- Package manager: npm (`package-lock.json` is present)
- Current source: minimal starter with only `src/pages/index.astro`
- Current config: `astro.config.mjs` has no `site`, `base`, integrations, or adapter
- Tailwind: not installed or configured yet
- Existing assets: `public/favicon.svg` and `public/favicon.ico`
- Intended deployment: static GitHub Pages at `/dr-mayna-portfolio`

## 2. Objective

Build a polished, accessible, responsive, static academic portfolio for Dr. Mayna Talukdar, Professor of Sanskrit at the University of Dhaka. The site should make her scholarly identity, research, publications, supervision, academic service, and contact details easy to verify and navigate.

## 3. Content inclusion rule

The website will include all available academic and professional information supported by the detailed CV, the official University of Dhaka profile, or another reliable primary/official source. Anything not verifiable will be omitted rather than guessed. Conflicts will be recorded and resolved before publication.

For publications, titles and citation wording will be taken exactly from the detailed CV. Add a DOI, official journal page, institutional repository, publisher page, or verified academic profile only when a reliable title-matched result is found. Never fabricate DOI, ISBN, PDF, Google Scholar, ORCID, or ResearchGate URLs. If no reliable link is found, render the citation without a link.

## 4. Decisions required before implementation

These values must be confirmed before production content is written:

1. GitHub username and exact repository name. The repository name determines `base`; the GitHub username determines `site`.
2. Whether the site will use a custom domain. If yes, provide the domain and DNS/`CNAME` preference.
3. The authoritative CV or faculty profile source. All dates, counts, titles, affiliations, and publication metadata should come from this source.
4. Which contact details are safe to publish publicly.
5. Profile photograph, department/university logos, and any image usage permissions.
6. Official links: University of Dhaka profile, Google Scholar, ORCID, ResearchGate, institutional email, and any other approved scholarly profiles.
7. Whether the publication inventory should contain all 9 research books and the claimed 21 research articles now. The detailed CV visibly lists 20 research-article entries, so the 21st item must be supplied or the count corrected.
8. Preferred spelling/transliteration for Sanskrit and Bengali titles. Keep source titles unchanged, with an English transliteration/translation only where approved.
9. Confirm the bilingual policy: English and Bengali labels/content with a language toggle. Decide whether all publication titles need Bengali translations or only navigation, headings, and biography.
10. Search/filter is deferred for the first release, as requested. Publications will use clear categories and an expandable or paginated presentation if the list becomes long.
11. Confirm whether public-facing content should include administrative/social advocacy roles, countries visited, family information, birth details, or only academic/professional information.

## 5. Recommended information architecture

Use one long-form landing page with stable section IDs for the first release:

- `/dr-mayna-portfolio/` — overview, hero, research, projects, publications, supervision, timeline, contact
- Optional later routes: `/publications/`, `/projects/`, or individual publication detail pages if the content volume warrants them

Primary navigation: About, Research & Projects, Publications, Teaching & Supervision, Academic Service, Contact.

Language behavior:

- Default language: English unless the user chooses Bengali.
- Toggle: a keyboard-accessible `EN / বাংলা` control in the header.
- Store the selection locally so it persists during a visit, while keeping the site fully static.
- Use a structured bilingual data shape rather than translating strings inside component markup.
- Keep proper names, official titles, citations, ISBNs, DOI URLs, and institutional names stable across languages.

## 6. Planned file structure

```text
.
├── .github/workflows/deploy.yml          # GitHub Pages deployment
├── docs/
│   ├── CONTENT_INTAKE.md                  # human-facing content request
│   ├── IMPLEMENTATION_CHECKLIST.md       # build/review checklist
│   ├── CONTENT_MATRIX.md                  # source-to-section inventory
│   ├── CV_EXTRACTION_NOTES.md              # extracted facts and conflicts
│   └── profile-data-template.json         # shape for verified profile data
├── planner.md
├── public/
│   ├── favicon.svg
│   ├── favicon.ico
│   ├── images/                            # optimized approved assets
│   └── CNAME                              # only if a custom domain is chosen
├── src/
│   ├── components/
│   │   ├── Hero.astro
│   │   ├── Projects.astro
│   │   ├── Publications.astro
│   │   ├── Supervision.astro
│   │   ├── Timeline.astro
│   │   └── SectionHeading.astro
│   ├── data/
│   │   ├── profile.json                   # verified, publication-ready data
│   │   └── ui.json                        # bilingual navigation and interface labels
│   ├── i18n/
│   │   └── language.ts                    # language state and safe fallback helpers
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   │   └── index.astro
│   └── styles/
│       └── global.css
├── astro.config.mjs
└── package.json
```

The exact source-to-section mapping is recorded in `docs/CONTENT_MATRIX.md` before data entry.

## 7. Implementation sequence

### Phase A — content and project decisions

1. Collect the completed intake form and authoritative CV.
2. Normalize names, dates, roles, titles, ISBNs, DOIs, URLs, and counts.
3. Mark every missing value as `null` or a clearly labeled placeholder; do not invent credentials or publication metadata.
4. Confirm the GitHub URL and final base path.
5. Complete the content matrix, including a source note for every displayed fact and a link-search result for every publication record.
6. Reconcile conflicting totals and dates before the first production data file is created.

### Phase B — foundation

1. Install and configure Tailwind using the approach supported by the current Astro version.
2. Update `astro.config.mjs` with the confirmed `site` and `base`.
3. Add global design tokens, typography, focus styles, color contrast, responsive breakpoints, and reduced-motion support.
4. Create `Layout.astro` with metadata, skip link, sticky header, mobile navigation behavior, footer, and base-aware internal links.
5. Add a small bilingual interface dictionary and a progressive-enhancement language toggle. The page must remain readable if JavaScript is unavailable.

### Phase C — data-driven UI

1. Create `src/data/profile.json` from the verified template.
2. Build `Hero.astro` for identity, appointment, research chips, and citation/academic badges.
3. Build `Projects.astro` for grant/project cards and status labels.
4. Build `Publications.astro` for Books and Articles categories, citation links, ISBN/DOI fields, and download links.
5. Build `Supervision.astro` for scholar counts, thesis titles, and international lecture history.
6. Build a teaching/appointment timeline and a teaching assessment section.
7. Build an academic service section for memberships, administrative roles, curriculum work, and approved public activities.
8. Add bilingual content switching with progressive enhancement and an accessible fallback.
9. Add source-aware link rendering: a citation link appears only when its URL has been verified; otherwise no empty button or misleading placeholder is shown.
10. Compose the page in `src/pages/index.astro`.

### Phase D — quality and deployment

1. Run formatting/type/build checks and fix all errors.
2. Test the generated site at the configured base path, not only at `/`.
3. Check keyboard navigation, visible focus, headings, alt text, link labels, color contrast, and reduced motion.
4. Test phone, tablet, and desktop widths plus long publication titles.
5. Add the official GitHub Pages workflow and configure repository Pages to use GitHub Actions.
6. Verify deployed asset URLs, navigation, favicon, canonical URL, and 404 behavior.
7. Perform a final content audit against the CV and `docs/CONTENT_MATRIX.md`; only then mark the release ready.

## 8. Content model

The JSON should be the single source of truth for the rendered page. Suggested top-level groups:

- `identity`: name, title, department, institution, portrait, short/long bio
- `research`: specializations, keywords, research statement
- `appointments`: role, institution, start/end dates, notes
- `projects`: title, dates, status, funder, description, links
- `publications.books`: title, year, publisher, ISBN, links, notes
- `publications.articles`: title, year, journal, volume/issue/pages, DOI, links
- `supervision`: completed counts, current counts, scholar list if approved
- `lectures`: city, country, institution/event, year, topic, link
- `fellowships`: award, host, location, dates, description
- `teaching`: assessed subjects/courses
- `service`: memberships, leadership, curriculum and textbook work
- `travel`: countries visited only if approved for publication
- `links`: official profiles and institutional pages
- `contact`: public email, office, department address, contact URL

Each factual record should also carry lightweight provenance fields such as `source`, `sourceLabel`, and `verified`. Publication records should use `url` and `linkType` only when an exact link exists. Provenance can stay out of the visible UI while supporting maintenance and audits.

For bilingual content, human-facing strings should use a structure such as `{ "en": "...", "bn": "..." }`. Factual records can retain their original-language title plus an optional approved translation.

## 9. Design direction

- Tone: scholarly, warm, restrained, high-trust
- Typography: serif display face paired with a highly readable sans-serif body face
- Palette: ink/slate text, warm paper background, deep indigo accent, restrained gold/amber detail
- Layout: generous spacing, narrow reading measure, clear section hierarchy, editorial cards
- Motion: subtle reveal/hover only; no motion should be necessary to understand content
- Imagery: one strong approved portrait and optional manuscript/detail imagery, all optimized and credited where needed

## 10. Acceptance criteria

- `npm run dev` starts successfully.
- `npm run build` completes successfully.
- The site works at `/dr-mayna-portfolio/` and all internal links preserve the base path.
- No fabricated biography, publication, award, or contact data appears.
- All 9 books and 21 articles are present if that inventory is confirmed.
- The published article count matches the verified itemized list.
- English/Bengali switching works without breaking layout, citations, or accessibility.
- The layout is usable at mobile, tablet, and desktop widths.
- Publications remain readable when titles or metadata wrap to multiple lines.
- Navigation and interactive filtering are keyboard accessible.
- The initial release does not require publication search/filter controls; category navigation and clear grouping are sufficient.
- GitHub Pages deployment succeeds from the intended branch.

## 11. Research findings and verification notes

The official University of Dhaka faculty profile corroborates the following: Professor in the Department of Sanskrit; B.A. 1993, M.A. 1994, M.Phil. 2002, Ph.D. 2010; the appointment progression through CODA, National University, and University of Dhaka; research interests in Sanskrit manuscripts, comparative Bengali/Sanskrit literature, and Sanskrit drama; memberships in the Asiatic Society of Bangladesh and Bangladesh Itihas Parishad; a 2019 Arts Faculty short project; and a partial publication list.

The University of Dhaka profile lists a current Chairman appointment ending 9 January 2025, while the CV says Professor and separately identifies current leadership roles. This should be presented with exact dates and confirmed current status rather than inferred from search results.

An official University of Dhaka Japanese Studies page provides a public article page for “A Study on the Iconographical Similarity between the Gods and Goddesses of Hindus and Buddhists of Japan: A Case Study,” including DOI `10.55156/jjsem.dec2119`. An official University of Dhaka Bengali journal page provides a DOI for the Bengali article on *Kṛṣṇakumārī Nāṭaka* and related Sanskrit dramas: `10.62328/sp.v51i2.10`.

The University of Dhaka publication hub provides an official landing page for several listed works: https://du.ac.bd/public/publication/SPL. Its research-details index also provides a broader publication record, but entries will be matched title-by-title before linking: https://du.ac.bd/public/researchDetails/164.

The University of Dhaka annual report and a 2025 Bhagavad Gita Research Foundation conference document provide additional corroboration for recent academic activity, co-editing, fellowship, supervision, and research-book claims. These will be used only where specific and consistent with the CV.

These sources can be linked from the site, but every additional item found on the web must be checked against the CV or an official institutional source before being added as biography or publication data. News coverage may be used for an optional “public engagement” section only after approval.

## 12. Final preflight gate

Before writing production components, confirm that:

- The detailed DOCX is the retained title and citation authority.
- Every planned section has at least one verified content source or is explicitly marked optional.
- The 8-versus-9 research-book count and 20-versus-21 article count are resolved.
- Research-project statuses and current leadership dates are resolved.
- Personal, family, residential, and non-academic details have an explicit publish/omit decision.
- Scholar names and thesis titles have an explicit publish/omit decision.
- Bengali interface copy and any Bengali translations of CV titles are reviewed for accuracy.
- Each external link is exact, title-matched, and checked for a working destination.
- The GitHub username, repository name, branch, `site`, and `base` are known.
- The photo can remain an intentional placeholder until supplied; it must not block layout work.

## 13. Execution checkpoint

Implementation should begin only after the final preflight gate is satisfied. The photo may be supplied later, but all content, privacy, translation, link, and deployment decisions should be complete first.

## References consulted

- Astro Components: https://docs.astro.build/en/basics/astro-components/
- Astro Styling and Tailwind: https://docs.astro.build/en/guides/styling/
- Astro GitHub Pages deployment: https://docs.astro.build/en/guides/deploy/github/
- Astro Content Collections: https://docs.astro.build/en/guides/content-collections/
- University of Dhaka faculty profile: https://www.du.ac.bd/body/faculty_details/SPL/1204
- University of Dhaka Japanese Studies article page: https://djs.du.ac.bd/?p=2979
- University of Dhaka Bengali journal article page: https://journal.bangla.du.ac.bd/article/view/224
