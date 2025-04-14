// 테크북 좋아요 등록

import coTreeAPI from '@/config/cotree';
import { COTREE_ENDPOINT } from '../endpoint';

const postTechBookLike = async ({ itemId }) => {
  const body = {
    likeType: 'TECH_BOOK',
    itemId,
  };

  try {
    const response = await coTreeAPI.post(COTREE_ENDPOINT.techLike, body);

    return response.data;
  } catch (error) {
    console.error('테크북 좋아요 등록 실패:', error);
    throw error;
  }
};

export default postTechBookLike;
