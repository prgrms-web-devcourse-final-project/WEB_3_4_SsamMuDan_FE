// 커뮤니티 게시글 상세 조회 함수

import coTreeAPI from '@/config/cotree';
import { COTREE_ENDPOINT } from '../endpoint';

const getCommunityDetail = async (boardId) => {
  try {
    const response = await coTreeAPI.get(COTREE_ENDPOINT.communityDetail(boardId));

    return response.data.data;
  } catch (error) {
    console.error('커뮤니티 게시글 상세 조회 실패:', error);
    throw error;
  }
};

export default getCommunityDetail;
