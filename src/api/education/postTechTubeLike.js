// 테크튜브 좋아요 등록

import coTreeAPI from '@/config/cotree';
import { COTREE_ENDPOINT } from '../endpoint';

const postTechTubeLike = async ({ itemId }) => {
  const body = {
    likeType: 'TECH_TUBE',
    itemId,
  };

  try {
    const response = await coTreeAPI.post(COTREE_ENDPOINT.techLike, body);

    return response.data;
  } catch (error) {
    console.error('테크튜브 좋아요 등록 실패:', error);
    throw error;
  }
};

export default postTechTubeLike;
