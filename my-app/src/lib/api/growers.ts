import type { Grower } from "$lib/models/grower.js";
import { defaultErrorHandler } from "$lib/utils.js";
import { BASE_BACKEND_URL, COMMON_HEADERS } from "../../constants/constants.js";


const PATH_SEGMENT = 'growers'; 

export async function getGrowers(): Promise<Grower[]>  {
  return defaultErrorHandler(async () => {
    const response = await fetch([BASE_BACKEND_URL, PATH_SEGMENT].join('/'), {
      method: 'GET',
      headers: COMMON_HEADERS
    });

    if (!response.ok) {
      throw { status: response.status, message: 'Failed to fetch growers' };
    }

    const data = await response.json();
    return data.growers;
  });
}

export async function getGrower(id: string): Promise<Grower>  {
  return defaultErrorHandler(async () => {
    const response = await fetch([BASE_BACKEND_URL, PATH_SEGMENT, id].join('/'), {
      method: 'GET',
      headers: COMMON_HEADERS
    });

    if (!response.ok) {
      throw { status: response.status, message: 'Failed to fetch grower' };
    }

    const data = await response.json();
    return data.grower;
  });
}
  