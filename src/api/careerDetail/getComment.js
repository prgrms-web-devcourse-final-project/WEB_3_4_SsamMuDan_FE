import coTreeAPI from '@/config/cotree';
import { COTREE_ENDPOINT } from '../endpoint';

const getComment = async (itemId, page) => {
  try {
    const response = await coTreeAPI.get(
      COTREE_ENDPOINT.Comment + `?itemId=${itemId}&category=RESUME&size=2&page=${page}`,
    );
    return response.data.data;
  } catch (error) {
    console.error('Error fetching career info:', error);
    throw error;
  }
};

export default getComment;
