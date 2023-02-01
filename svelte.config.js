import adapter from '@sveltejs/adapter-auto';

// import { vitePreprocess } from '@sveltejs/kit/vite';
import preprocess  from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: preprocess ({}),

	kit: {
		adapter: adapter(
			// {
			// 	pages: 'build',
			// 	assets: 'build',
			// 	fallback: null,
			// 	precompress: false,
			// 	strict: true
			// }
		)
	}
};

export default config;
