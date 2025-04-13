// 프로젝트 모집글 좋아요 등록

import coTreeAPI from '@/config/cotree';
import { COTREE_ENDPOINT } from '../endpoint';

const postProjectLike = async ({ itemId }) => {
  const body = {
    likeType: 'PROJECT',
    itemId,
  };

  try {
    const response = await coTreeAPI.post(COTREE_ENDPOINT.techLike, body);

    return response.data;
  } catch (error) {
    console.error('프로젝트 좋아요 등록 실패:', error);
    throw error;
  }
};

export default postProjectLike;
