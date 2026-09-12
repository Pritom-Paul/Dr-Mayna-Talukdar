# Content to Website Matrix

This matrix is the pre-implementation inventory. Every item rendered in the website should map to a source and a destination section. If a fact cannot be verified, it stays out of production data.

| Source or CV section | Website destination | Planned treatment | Verification rule |
| --- | --- | --- | --- |
| Name, current position, department, institution | Hero and About | Prominent academic identity | Detailed CV and official University of Dhaka profile |
| Short and long biography | About | English/Bengali editorial copy | Derived only from verified CV facts |
| Degrees and years | About or Academic Timeline | Compact education list | CV plus official DU profile |
| Teaching appointments | Academic Timeline | Chronological timeline | Preserve exact dates; resolve discrepancies |
| Teaching assessment subjects | Teaching | Subject list | Detailed CV; correct spelling only |
| Research interests | Research | Research statement and topic tags | CV plus official DU research profile |
| Numata Fellowship | Fellowships | Fellowship record | Detailed CV; official corroboration where available |
| Lectures and presentations | Talks and Lectures | Venue/city/country list | Detailed CV; add dates only when sourced |
| Countries visited | Talks or Academic Activity | Include only if clearly professional and useful | Detailed CV; omit if not suitable for public site |
| Supervision counts | Supervision | Stat cards | CV and official DU profile; resolve count differences |
| Scholar names and thesis titles | Supervision | Detailed list only when appropriate | CV and official DU profile; privacy review |
| Memberships and leadership | Academic Service | Roles with dates | CV plus official source; verify current status |
| Curriculum and textbook work | Academic Service | National contribution items | Detailed CV; preserve official wording |
| Research books | Publications | Research Books category | Copy titles exactly from detailed CV; reconcile count |
| Other books | Publications | Separate Educational Works category | Detailed CV and official DU record |
| Research articles | Publications | Research Articles category | Copy titles exactly; reconcile item count |
| DOI/journal/publisher links | Publications | Link buttons only when exact match exists | DOI, official journal, publisher, repository, or DU page |
| Research projects | Research and Projects | Cards with status, period, funder | Detailed CV; resolve status conflicts |
| Devabrata Thakur Roy Silver Medal | Awards | Award record | Detailed CV and official DU profile |
| Official email and office contact | Contact | Public institutional contact | Official DU profile preferred |
| Personal email, mobile, home address | Contact | Exclude by default | Include only by explicit instruction |
| Birth, religion, marital, family details | Nowhere by default | Exclude from public portfolio | Sensitive personal information |
| Portrait and logos | Hero/header | Supplied portrait plus official DU wordmark; no separate Sanskrit logo found | User-provided portrait; DU asset from official university website |

## Link search protocol

1. Start with the exact CV title in quotation marks.
2. Check University of Dhaka faculty, publication, and research pages.
3. Check the journal or publisher’s official page.
4. Check the DOI resolver and exact-title metadata.
5. Check an exact scholar profile only when the identity is unambiguous.
6. Store the URL, link type, source label, and verification date in the data record.
7. If no exact reliable match is found, leave `url`, `doi`, and `downloadUrl` as `null`.

## Bilingual content rule

Navigation, interface labels, section descriptions, biography, and research summaries should have English and Bengali values. Publication titles remain exactly as written in the detailed CV. A Bengali translation may be shown only as an explicitly editorial translation and must never replace the original citation title.
