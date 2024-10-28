import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types.js';
import { getFruit } from '$lib/api/fruits.js';


export const load: PageLoad = async ({ params }) => {
	if (params.slug) {
		return await getFruit(params.slug);
	}

	error(404, 'Not found');
};