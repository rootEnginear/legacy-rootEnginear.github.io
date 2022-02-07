import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-static';
import path from 'path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		// target: '#svelte',
		adapter: adapter(),
		vite: {
			resolve: {
				alias: {
					components: path.resolve('./src/components'),
					data: path.resolve('./src/data'),
					routes: path.resolve('./src/routes'),
					styles: path.resolve('./src/styles')
				}
			}
		}
	}
};

export default config;