import coTreeAPI from '@/config/cotree';
import { COTREE_ENDPOINT } from '../endpoint';

const getTechBook = async () => {
  try {
    const response = await coTreeAPI.get(COTREE_ENDPOINT.techbook);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching career info:', error);
    throw error;
  }
};

export default getTechBook;
