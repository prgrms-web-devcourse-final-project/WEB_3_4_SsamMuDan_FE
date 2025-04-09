import coTreeAPI from '@/config/cotree';
import { COTREE_ENDPOINT } from '../endpoint';

const getTechTubeInfo = async (id) => {
  try {
    const response = await coTreeAPI.get(`${COTREE_ENDPOINT.techtube}/${id}/info`, {
      params: {},
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching career info:', error);
    throw error;
  }
};

export default getTechTubeInfo;
