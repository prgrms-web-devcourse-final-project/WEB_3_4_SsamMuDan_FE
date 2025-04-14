// 테크튜브 좋아요 삭제

import coTreeAPI from '@/config/cotree';
import { COTREE_ENDPOINT } from '../endpoint';

const deleteTechTubeLike = async ({ itemId }) => {
  try {
    const response = await coTreeAPI.delete(COTREE_ENDPOINT.techLike, {
      data: {
        likeType: 'TECH_TUBE',
        itemId,
      },
    });
    return response.data;
  } catch (error) {
    console.error('테크튜브 좋아요 삭제 실패:', error);
    throw error;
  }
};

export default deleteTechTubeLike;
