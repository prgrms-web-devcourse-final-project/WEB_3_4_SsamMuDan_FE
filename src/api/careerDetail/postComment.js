import coTreeAPI from '@/config/cotree';
import { COTREE_ENDPOINT } from '../endpoint';

const postComment = async (request) => {
  try {
    console.log(request);
    const response = await coTreeAPI.post(COTREE_ENDPOINT.Comment, request);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching career info:', error);
    throw error;
  }
};

export default postComment;
