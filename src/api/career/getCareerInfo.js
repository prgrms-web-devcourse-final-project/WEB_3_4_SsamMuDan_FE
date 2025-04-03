import coTreeAPI from '@/config/coTree';
import { COTREE_ENDPOINT } from '../endpoint';

const getCareerInfo = async () => {
  try {
    const response = await coTreeAPI.get(COTREE_ENDPOINT.techbook);
    console.log(response.data);
    // return response.data;
  } catch (error) {
    console.error('Error fetching career info:', error);
    throw error;
  }
};

export default getCareerInfo;
