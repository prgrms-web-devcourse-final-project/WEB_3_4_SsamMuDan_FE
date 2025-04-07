import coTreeAPI from '@/config/cotree';
import { COTREE_ENDPOINT } from '../endpoint';

const getPosition = async (itemId) => {
  try {
    const response = await coTreeAPI.get(COTREE_ENDPOINT.careerPosition);
    // console.log(response.data);
    return response.data.data;
  } catch (error) {
    console.error('Error fetching career info:', error);
    throw error;
  }
};

export default getPosition;
