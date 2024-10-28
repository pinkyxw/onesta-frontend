import { error } from "@sveltejs/kit";

export async function defaultErrorHandler(callback: () => Promise<any>) {
    try {
        return await callback();
    } catch (err: Error | any) {
        error(err.status || 500, { message: err.message });
    }
}
