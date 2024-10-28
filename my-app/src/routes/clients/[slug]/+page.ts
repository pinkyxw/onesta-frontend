import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import { getClient } from '$lib/api/clients.js';


export const load: PageLoad = async ({ params }) => {
	if (params.slug) {
		return await getClient(params.slug);
	}

	error(404, 'Not found');
};