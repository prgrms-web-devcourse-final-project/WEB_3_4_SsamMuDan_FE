import coTreeAPI from '@/config/cotree';
import { COTREE_ENDPOINT } from '../endpoint';

const getCommunity = async (page, sort, category, keyword) => {
  const size = 5;
  try {
    const response = await coTreeAPI.get(COTREE_ENDPOINT.community, {
      params: {
        ...(page && { page }),
        size,
        ...(sort && { sort }),
        ...(category && { category }),
        ...(keyword && { keyword }),
      },
    });

    console.log('커뮤ㅜ니티', response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching  community info:', error);
    throw error;
  }
};

export default getCommunity;
