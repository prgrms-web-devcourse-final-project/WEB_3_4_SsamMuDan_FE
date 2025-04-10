import coTreeAPI from '@/config/cotree';
import { COTREE_ENDPOINT } from '../endpoint';

const postTechTubePay = async (request) => {
  console.log('request', request);
  try {
    const response = await coTreeAPI.post(COTREE_ENDPOINT.techLike, request);
  } catch (error) {
    console.error('Error fetching community info:', error);
    throw error;
  }
};

export default postTechTubePay;
