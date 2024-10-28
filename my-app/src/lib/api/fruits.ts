export async function getFruits() {
  try {
    const response = await fetch('https://testapi.onesta.farm/v1/commodities', {
      method: 'GET',
      headers: {
        'content-type': 'application/json'
      }
    });

    if (!response.ok) {
      throw new Error('Failed to fetch fruits');
    }

    const data = await response.json();
    return data.commodities;
  } catch (error) {
    console.error(error);
    return [];
  }
}

export async function getFruit(id: string) {
  try {
    const response = await fetch(`https://testapi.onesta.farm/v1/commodities/${id}`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json'
      }
    });

    if (!response.ok) {
      throw new Error('Failed to fetch fruit');
    }

    const data = await response.json();
    return data.commodity;
  } catch (error) {
    console.error(error);
    return [];
  }
}
  