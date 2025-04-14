import coTreeAPI from '@/config/cotree';
import { COTREE_ENDPOINT } from '../endpoint';

const getTechTube = async (page, size = 16, sort, keyword) => {
  try {
    const response = await coTreeAPI.get(COTREE_ENDPOINT.techtube, {
      params: {
        ...(page && { page }),
        size,
        ...(sort && { sort }),
        ...(keyword && { keyword }),
      },
    });

    return response.data;
  } catch (error) {
    console.error('Error fetching career info:', error);
    throw error;
  }
};

export default getTechTube;
