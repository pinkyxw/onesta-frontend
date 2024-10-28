import type { Fruit } from "$lib/models/fruit.js";
import { defaultErrorHandler } from "$lib/utils.js";
import { BASE_BACKEND_URL, COMMON_HEADERS } from "../../constants/constants.js";


const PATH_SEGMENT = 'commodities'; 

export async function getFruits(): Promise<Fruit[]> {
  return defaultErrorHandler(async () => {
    const response = await fetch([BASE_BACKEND_URL, PATH_SEGMENT].join('/'), {
      method: 'GET',
      headers: COMMON_HEADERS
    });

    if (!response.ok) {
      throw { status: response.status, message: 'Failed to fetch fruits' };
    }

    const data = await response.json();
    return data.commodities;
  });
}

export async function getFruit(id: string): Promise<Fruit> {
  return defaultErrorHandler(async () => {
    const response = await fetch([BASE_BACKEND_URL, PATH_SEGMENT, id].join('/'), {
      method: 'GET',
      headers: COMMON_HEADERS
    });

    if (!response.ok) {
      throw { status: response.status, message: 'Failed to fetch fruit' };
    }

    const data = await response.json();
    return data.commodity;
  });
}
  