import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import { getHarvest } from '$lib/api/harvest.js';


export const load: PageLoad = async ({ params }) => {
	if (params.slug) {
		return await getHarvest(params.slug);
	}

	error(404, 'Not found');
};