import coTreeAPI from '@/config/cotree';
import { COTREE_ENDPOINT } from '../endpoint';

const postTechsPay = async (request) => {
  try {
    const response = await coTreeAPI.post(COTREE_ENDPOINT.tosspay, request);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching community info:', error);
    throw error;
  }
};

export default postTechsPay;
