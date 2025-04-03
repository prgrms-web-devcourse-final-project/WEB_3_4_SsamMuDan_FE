import axios from 'axios';

const baseURL = import.meta.env.VITE_COTREE_BASE_URL;

const coTreeAPI = axios.create({
  baseURL,
  timeout: 10000,
});

export default coTreeAPI;
