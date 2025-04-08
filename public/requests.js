// Versiune locală a fișierului requests.js pentru utilizarea fișierelor JSON locale

export async function getRules() {
  return await fetchLocalJSON('./reguli.json');
}

export async function getPhones() {
  return await fetchLocalJSON('./telefoane_mobile.json');
}

export async function getInferenceQuestions() {
  return await fetchLocalJSON('./intrebari.json');
}

async function fetchLocalJSON(path) {
  try {
    const response = await fetch(path);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}