import { json, text } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export async function POST({ request }) {
	const { a, b } = await request.json();
	return json(777);
}

// This handler will respond to PUT, PATCH, DELETE, etc.
export const fallback: RequestHandler = async ({ request }) => {
    return json(666);
	return text(`I caught your ${request.method} request!`);
};