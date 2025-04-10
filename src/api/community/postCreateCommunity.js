import coTreeAPI from '@/config/cotree';
import { COTREE_ENDPOINT } from '../endpoint';

const postCreateCommunity = async (request) => {
  try {
    const response = await coTreeAPI.post(COTREE_ENDPOINT.communityCreate, request);
    console.log(response.data);
  } catch (error) {
    console.error('Error fetching community info:', error);
    throw error;
  }
};

export default postCreateCommunity;
