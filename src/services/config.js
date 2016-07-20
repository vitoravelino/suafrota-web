const isProduction = process.NODE_ENV === 'production';

export const API_URL = isProduction ? 'https://stealth.com/' : 'http://localhost:3000/';
