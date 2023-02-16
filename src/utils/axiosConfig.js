import axios from 'axios';

export const axiosConfig = axios.create({
  baseURL: 'https://my-json-server.typicode.com/higorpo/trilha-dev-json-server',
});
