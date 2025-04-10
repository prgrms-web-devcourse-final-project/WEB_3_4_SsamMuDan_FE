import coTreeAPI from '@/config/cotree';
import { COTREE_ENDPOINT } from '../endpoint';

const getTechTubeReview = async (id, page, sort) => {
  const size = 10;
  try {
    const response = await coTreeAPI.get(COTREE_ENDPOINT.techbookReview, {
      params: {
        reviewType: 'TECH_BOOK',
        itemId: id,
        ...(page && { page }),
        size,
        ...(sort && { sort }),
      },
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching career info:', error);
    throw error;
  }
};

export default getTechTubeReview;
