// vite.config.js
import { sveltekit } from '@sveltejs/kit/vite';
import path from 'path';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit()],
	resolve: {
		alias: {
			components: path.resolve('./src/components'),
			data: path.resolve('./src/data'),
			routes: path.resolve('./src/routes'),
			styles: path.resolve('./src/styles')
		}
	}
};

export default config;
