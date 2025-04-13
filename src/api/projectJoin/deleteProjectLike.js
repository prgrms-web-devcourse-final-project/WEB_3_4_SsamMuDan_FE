// 프로젝트 모집글 좋아요 삭제

import coTreeAPI from '@/config/cotree';
import { COTREE_ENDPOINT } from '../endpoint';

const deleteProjectLike = async ({ itemId }) => {
  try {
    const response = await coTreeAPI.delete(COTREE_ENDPOINT.techLike, {
      data: {
        likeType: 'PROJECT',
        itemId,
      },
    });
    return response.data;
  } catch (error) {
    console.error('프로젝트 좋아요 삭제 실패:', error);
    throw error;
  }
};

export default deleteProjectLike;
