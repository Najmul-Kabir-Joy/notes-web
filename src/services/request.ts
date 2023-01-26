import axios from 'axios';

export const Api = axios.create({
  baseURL: 'https://notes-server-production.up.railway.app/api/v1/notes',
  headers: {
    'Content-Type': 'application/json',
  },
});

Api.interceptors.request.use(async (request) => {
  return request;
});
