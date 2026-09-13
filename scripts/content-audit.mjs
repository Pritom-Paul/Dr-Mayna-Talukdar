import { readFile } from 'node:fs/promises';

const profile = JSON.parse(await readFile(new URL('../src/data/profile.json', import.meta.url), 'utf8'));
const fail = (message) => {
	console.error(`CONTENT AUDIT FAILED: ${message}`);
	process.exit(1);
};

if (profile.publications.books.length !== 9) fail(`expected 9 research books, found ${profile.publications.books.length}`);
if (profile.publications.otherBooks.length !== 4) fail(`expected 4 other books, found ${profile.publications.otherBooks.length}`);
if (profile.publications.articles.length !== 20) fail(`expected 20 itemized articles, found ${profile.publications.articles.length}`);
if (profile.projects.length !== 4) fail(`expected 4 projects, found ${profile.projects.length}`);
if (profile.supervision.scholars.length !== 9) fail(`expected 9 named supervision records, found ${profile.supervision.scholars.length}`);

for (const record of [...profile.projects, ...profile.publications.books, ...profile.publications.articles]) {
	if (!record.source || record.verified !== true) fail(`missing verification metadata for ${record.title}`);
	if (record.url && !/^https:\/\//.test(record.url)) fail(`non-HTTPS URL found for ${record.title}`);
	if (record.downloadUrl && !/^https:\/\//.test(record.downloadUrl)) fail(`non-HTTPS download URL found for ${record.title}`);
}

for (const key of ['googleScholar', 'orcid', 'researchGate']) {
	if (profile.links[key] !== null) fail(`unverified profile link should remain null: ${key}`);
}

const serialized = JSON.stringify(profile);
for (const forbidden of ['@gmail.com', 'Dhanmondi', 'Rikabi Bazar', 'Ashit Baran Paul', 'Pritom Paul']) {
	if (serialized.includes(forbidden)) fail(`sensitive personal value present: ${forbidden}`);
}

console.log('CONTENT AUDIT PASSED');
console.log(`Research books: ${profile.publications.books.length}`);
console.log(`Other books: ${profile.publications.otherBooks.length}`);
console.log(`Itemized research articles: ${profile.publications.articles.length}`);
console.log(`Projects: ${profile.projects.length}`);
console.log(`Supervision records: ${profile.supervision.scholars.length}`);
