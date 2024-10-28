import type { Harvest } from "$lib/models/harvest.js";
import { defaultErrorHandler } from "$lib/utils.js";
import { BASE_BACKEND_URL, COMMON_HEADERS } from "../../constants/constants.js";


const PATH_SEGMENT = 'harvests'; 

export async function getHarvests(): Promise<Harvest[]>  {
  return defaultErrorHandler(async () => {
    const response = await fetch([BASE_BACKEND_URL, PATH_SEGMENT].join('/'), {
      method: 'GET',
      headers: COMMON_HEADERS
    });

    if (!response.ok) {
      throw { status: response.status, message: 'Failed to fetch harvests' };
    }

    const data = await response.json();
    return data.harvests;
  });
}

export async function getHarvest(id: string): Promise<Harvest>  {
  return defaultErrorHandler(async () => {
    const response = await fetch([BASE_BACKEND_URL, PATH_SEGMENT, id].join('/'), {
      method: 'GET',
      headers: COMMON_HEADERS
    });

    if (!response.ok) {
      throw { status: response.status, message: 'Failed to fetch harvest' };
    }

    const data = await response.json();
    return data.harvest;
  });
}
  
export async function createHarvest(growerId: string, farmId: string, varietyId: string, clientId: string, commodityId: string) {
  return defaultErrorHandler(async () => {
    const response = await fetch([BASE_BACKEND_URL, PATH_SEGMENT].join('/'), {
      method: 'POST',
			body: JSON.stringify({ growerId, farmId, varietyId, clientId, commodityId }),
      headers: COMMON_HEADERS
    });

    if (!response.ok) {
      throw { status: response.status, message: 'Failed to create harvest' };
    }

    const data = await response.json();
    return data.harvest;
  });
}