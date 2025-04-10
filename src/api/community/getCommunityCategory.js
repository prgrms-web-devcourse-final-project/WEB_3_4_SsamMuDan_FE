import coTreeAPI from '@/config/cotree';
import { COTREE_ENDPOINT } from '../endpoint';

const getCommunityCategory = async () => {
  try {
    const response = await coTreeAPI.get(COTREE_ENDPOINT.communityCategory);

    console.log('커뮤니티', response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching  community info:', error);
    throw error;
  }
};

export default getCommunityCategory;
