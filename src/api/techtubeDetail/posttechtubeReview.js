import coTreeAPI from '@/config/cotree';
import { COTREE_ENDPOINT } from '../endpoint';

const posttechtubeReview = async (request) => {
  console.log('request', request);
  try {
    const response = await coTreeAPI.post(COTREE_ENDPOINT.techbookReview, request);
  } catch (error) {
    console.error('Error fetching community info:', error);
    throw error;
  }
};

export default posttechtubeReview;
