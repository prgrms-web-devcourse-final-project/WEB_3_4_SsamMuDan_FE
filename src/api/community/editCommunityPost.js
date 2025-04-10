// 커뮤니티 게시글 수정 함수

import coTreeAPI from '@/config/cotree';
import { COTREE_ENDPOINT } from '../endpoint';

const editCommunityPost = async (boardId, updatedData) => {
  try {
    const response = await coTreeAPI.put(COTREE_ENDPOINT.communityDetail(boardId), updatedData);
    return response.data.data;
  } catch (error) {
    console.error('커뮤니티 게시글 수정 실패:', error);
    throw error;
  }
};

export default editCommunityPost;
