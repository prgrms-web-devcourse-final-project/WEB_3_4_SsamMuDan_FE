// 메인페이지에서 커뮤니티 게시글 조회하는 함수

import coTreeAPI from '@/config/cotree';
import { COTREE_ENDPOINT } from '../endpoint';

const getCommunityPosts = async ({
  // default값
  page = 0,
  size = 5,
  sort = 'LATEST',
  category = 'TOTAL',
  keyword = '',
} = {}) => {
  try {
    const response = await coTreeAPI.get(COTREE_ENDPOINT.communityPosts, {
      params: { page, size, sort, category, keyword },
    });

    return response.data.data.content;
  } catch (error) {
    console.error('Error fetching community posts:', error);
    throw error;
  }
};

export default getCommunityPosts;
