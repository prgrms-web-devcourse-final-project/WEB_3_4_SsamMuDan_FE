// 테크북 좋아요 삭제

import coTreeAPI from '@/config/cotree';
import { COTREE_ENDPOINT } from '../endpoint';

const deleteTechBookLike = async ({ itemId }) => {
  try {
    const response = await coTreeAPI.delete(COTREE_ENDPOINT.techLike, {
      data: {
        likeType: 'TECH_BOOK',
        itemId,
      },
    });
    return response.data;
  } catch (error) {
    console.error('테크북 좋아요 삭제 실패:', error);
    throw error;
  }
};

export default deleteTechBookLike;
