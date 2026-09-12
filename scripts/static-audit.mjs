import { readFile } from 'node:fs/promises';

const html = await readFile(new URL('../dist/index.html', import.meta.url), 'utf8');
const cssFilename = html.match(/href="([^\"]+\.css)"/)?.[1].split('/').pop();
const css = cssFilename ? await readFile(new URL(`../dist/_astro/${cssFilename}`, import.meta.url), 'utf8') : '';
const fail = (message) => {
	console.error(`STATIC AUDIT FAILED: ${message}`);
	process.exit(1);
};
const count = (pattern) => (html.match(pattern) ?? []).length;

if (count(/<h1\b/g) !== 1) fail('expected exactly one h1');
if (html.includes('/Dr-Mayna-Talukdar/')) fail('old GitHub Pages base path still present');
for (const landmark of ['<header', '<nav', '<main id="main-content"', '<footer']) {
	if (!html.includes(landmark)) fail(`missing landmark: ${landmark}`);
}
for (const required of ['data-language="en"', 'data-theme="light"', 'data-language-toggle', 'data-theme-toggle', 'aria-controls="site-navigation"', 'class="lang-en"', 'class="lang-bn"']) {
	if (!html.includes(required)) fail(`missing bilingual/navigation hook: ${required}`);
}

for (const match of html.matchAll(/<a\b([^>]+)>/g)) {
	const attrs = match[1];
	if (/target="_blank"/.test(attrs) && !/rel="[^"]*noreferrer/.test(attrs)) fail('target=_blank link missing rel=noreferrer');
	const href = attrs.match(/href="([^"]+)"/)?.[1];
	if (href?.startsWith('/Dr-Mayna-Talukdar/')) fail(`old GitHub Pages URL is still present: ${href}`);
}

if (!/@media \((?:max-width: 760px|width<=760px)\)/.test(css)) fail('mobile breakpoint missing');
if (!css.includes(':focus-visible')) fail('visible focus style missing');
if (!css.includes('prefers-reduced-motion')) fail('reduced-motion support missing');
if (!/data-theme=(?:['"])?dark/.test(css)) fail('dark theme styles missing');
if (!css.includes('Noto Sans Bengali')) fail('Bengali-capable font missing');

console.log('STATIC AUDIT PASSED');
console.log('Landmarks, heading structure, base-aware URLs, bilingual hooks, link safety, responsive CSS, focus styles, and reduced-motion support verified.');
