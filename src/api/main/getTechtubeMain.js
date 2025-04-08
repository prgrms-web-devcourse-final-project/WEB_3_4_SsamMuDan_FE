// 메인페이지에서 테크튜브 조회하는 함수

import coTreeAPI from '@/config/cotree';
import { COTREE_ENDPOINT } from '../endpoint';

const getTechtubeMain = async ({
  // default값
  page = 0,
  size = 100,
  sort = 'LIKES',
  categoryId = '1',
} = {}) => {
  try {
    const response = await coTreeAPI.get(COTREE_ENDPOINT.techtube, {
      params: { page, size, sort, categoryId },
    });

    return response.data.data.content;
  } catch (error) {
    console.error('Error fetching community posts:', error);
    throw error;
  }
};

export default getTechtubeMain;
