// 메인페이지에서 테크북 조회하는 함수

import coTreeAPI from '@/config/cotree';
import { COTREE_ENDPOINT } from '../endpoint';

const getTechbookMain = async ({
  // default
  keyword = '',
  page = 0,
  size = 16,
  sort = 'LATEST',
  categoryId,
} = {}) => {
  try {
    const response = await coTreeAPI.get(COTREE_ENDPOINT.techbook, {
      params: {
        keyword,
        page,
        size,
        sort,
        ...(categoryId && { categoryId }), // categoryId가 있을 때만 추가
      },
    });

    return response.data.data.content;
  } catch (error) {
    console.error('테크북 조회 실패:', error);
    throw error;
  }
};

export default getTechbookMain;
