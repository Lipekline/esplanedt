import axios from 'axios';

export const BASE_URL = 'https://api.spoonacular.com/recipes';
export const API_KEY = 'f853ce6ec727414abce38278fb831f9d';

export const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    apiKey: 'f853ce6ec727414abce38278fb831f9d',
  },
});
