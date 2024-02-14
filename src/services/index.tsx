import axios from 'axios';

export const BASE_URL = 'https://api.spoonacular.com/recipes';
export const API_KEY = '429e383ba796438280d5584874bcc271';

export const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    apiKey: '429e383ba796438280d5584874bcc271',
  },
});
