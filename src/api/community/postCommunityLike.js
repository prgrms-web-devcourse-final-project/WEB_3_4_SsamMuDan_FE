// 커뮤니티 게시글 좋아요 등록

import coTreeAPI from '@/config/cotree';
import { COTREE_ENDPOINT } from '../endpoint';

const postCommunityLike = async ({ itemId }) => {
  const body = {
    likeType: 'COMMUNITY',
    itemId,
  };

  try {
    const response = await coTreeAPI.post(COTREE_ENDPOINT.techLike, body);

    return response.data;
  } catch (error) {
    console.error('커뮤니티 좋아요 등록 실패:', error);
    throw error;
  }
};

export default postCommunityLike;
