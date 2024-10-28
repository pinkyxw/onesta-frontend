import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types.js';
import { getGrower } from '$lib/api/growers.js';


export const load: PageLoad = async ({ params }) => {
	if (params.slug) {
		return await getGrower(params.slug);
	}

	error(404, 'Not found');
};