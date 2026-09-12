// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
	// Vercel serves this static site from the deployment root.
	base: '/',
	vite: {
		plugins: [tailwindcss()],
	},
});
