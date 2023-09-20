import axios from 'axios';

const RSS_PROXY_URL = 'https://cors-anywhere.herokuapp.com/';

export async function fetchRSSFeed(url : string) {
  try {
    const response = await axios.get(`${RSS_PROXY_URL}${url}`);
    return response.data;
  } catch (error) {
    console.error('Erreur lors de la récupération du flux RSS:', error);
    throw error;
  }
}