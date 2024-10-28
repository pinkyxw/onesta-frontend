export async function getGrowers() {
  try {
    const response = await fetch('https://testapi.onesta.farm/v1/growers', {
      method: 'GET',
      headers: {
        'content-type': 'application/json'
      }
    });

    if (!response.ok) {
      throw new Error('Failed to fetch growers');
    }

    const data = await response.json();
    return data.growers;
  } catch (error) {
    console.error(error);
    return [];
  }
}

export async function getGrower(id: string) {
  try {
    const response = await fetch(`https://testapi.onesta.farm/v1/growers/${id}`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json'
      }
    });

    if (!response.ok) {
      throw new Error('Failed to fetch grower');
    }

    const data = await response.json();
    return data.grower;
  } catch (error) {
    console.error(error);
    return [];
  }
}
  