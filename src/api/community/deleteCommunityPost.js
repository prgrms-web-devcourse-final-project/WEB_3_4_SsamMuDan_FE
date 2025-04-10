// 커뮤니티 게시글 삭제 함수

import coTreeAPI from '@/config/cotree';
import { COTREE_ENDPOINT } from '../endpoint';

const deleteCommunityPost = async (boardId) => {
  try {
    const response = await coTreeAPI.delete(COTREE_ENDPOINT.communityDetail(boardId));

    return response.data.data;
  } catch (error) {
    console.error('커뮤니티 게시글 삭제 실패:', error);
    throw error;
  }
};

export default deleteCommunityPost;
