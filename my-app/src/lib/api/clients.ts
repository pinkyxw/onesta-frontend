import type { Client } from "$lib/models/client.js";
import { defaultErrorHandler } from "$lib/utils.js";
import { BASE_BACKEND_URL, COMMON_HEADERS } from "../../constants/constants.js";


const PATH_SEGMENT = 'clients'; 

export async function getClients(): Promise<Client[]> {
  return defaultErrorHandler(async () => {
    const response = await fetch([BASE_BACKEND_URL, PATH_SEGMENT].join('/'), {
      method: 'GET',
      headers: COMMON_HEADERS
    });

    if (!response.ok) {
      throw { status: response.status, message: 'Failed to fetch clients' };
    }

    const data = await response.json();
    return data.clients;
  });
}

export async function getClient(id: string): Promise<Client> {
  return defaultErrorHandler(async () => {
    const response = await fetch([BASE_BACKEND_URL, PATH_SEGMENT, id].join('/'), {
      method: 'GET',
      headers: COMMON_HEADERS
    });

    if (!response.ok) {
      throw { status: response.status, message: 'Failed to fetch client' };
    }

    const data = await response.json();
    return data.client as Client;
  });
}
  