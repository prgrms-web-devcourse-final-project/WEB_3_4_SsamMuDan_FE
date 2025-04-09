import coTreeAPI from '@/config/cotree';
import { COTREE_ENDPOINT } from '../endpoint';

const getBestCommunity = async () => {
  try {
    const response = await coTreeAPI.get(COTREE_ENDPOINT.community, {
      params: {
        page: 0,
        size: 3,
        sort: 'COMMENT',
        category: 'TOTAL',
      },
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching career info:', error);
    throw error;
  }
};

export default getBestCommunity;
