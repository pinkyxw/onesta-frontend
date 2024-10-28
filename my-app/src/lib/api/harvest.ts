export async function getHarvests() {
  try {
    const response = await fetch('https://testapi.onesta.farm/v1/harvests', {
      method: 'GET',
      headers: {
        'content-type': 'application/json'
      }
    });

    if (!response.ok) {
      throw new Error('Failed to fetch harvests');
    }

    const data = await response.json();
    return data.harvests;
  } catch (error) {
    console.error(error);
    return [];
  }
}

export async function getHarvest(id: string) {
  try {
    const response = await fetch(`https://testapi.onesta.farm/v1/harvests/${id}`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json'
      }
    });

    if (!response.ok) {
      throw new Error('Failed to fetch harvests');
    }

    const data = await response.json();
    return data.harvest;
  } catch (error) {
    console.error(error);
    return [];
  }
}
  
export async function createHarvest(growerId: string, farmId: string, varietyId: string, clientId: string, commodityId: string) {
  try {
    const response = await fetch(`https://testapi.onesta.farm/v1/harvests`, {
      method: 'POST',
			body: JSON.stringify({ growerId, farmId, varietyId, clientId, commodityId }),
      headers: {
        'content-type': 'application/json'
      }
    });

    if (!response.ok) {
      throw new Error('Failed to create harvest');
    }

    const data = await response.json();
    return data.harvest;
  } catch (error) {
    console.error(error);
    return [];
  }
}