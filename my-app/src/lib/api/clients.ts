export async function getClients() {
  try {
    const response = await fetch('https://testapi.onesta.farm/v1/clients', {
      method: 'GET',
      headers: {
        'content-type': 'application/json'
      }
    });

    if (!response.ok) {
      throw new Error('Failed to fetch clients');
    }

    const data = await response.json();
    return data.clients;
  } catch (error) {
    console.error(error);
    return [];
  }
}

export async function getClient(id: string) {
  try {
    const response = await fetch(`https://testapi.onesta.farm/v1/clients/${id}`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json'
      }
    });

    if (!response.ok) {
      throw new Error('Failed to fetch clients');
    }

    const data = await response.json();
    return data.client;
  } catch (error) {
    console.error(error);
    return [];
  }
}
  