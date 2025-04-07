import coTreeAPI from '@/config/cotree';
import { COTREE_ENDPOINT } from '../endpoint';

const getTechBookInfo = async () => {
  try {
    const response = await coTreeAPI.get(COTREE_ENDPOINT.techbookDetail, {
      params: {
        // reviewType: reviewType,
        // itemId: itemId,
        // ...(page && { page }),
        // size,
        // ...(sort && { sort }),
      },
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching career info:', error);
    throw error;
  }
};

export default getTechBookInfo;
