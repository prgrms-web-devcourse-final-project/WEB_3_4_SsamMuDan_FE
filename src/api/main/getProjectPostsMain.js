// 메인페이지에서 프로젝트 모집글 조회하는 함수

import coTreeAPI from '@/config/cotree';
import { COTREE_ENDPOINT } from '../endpoint';

const getProjectPostsMain = async ({ page = 0, size = 4 } = {}) => {
  try {
    const response = await coTreeAPI.get(COTREE_ENDPOINT.projectPostsMain, {
      params: { page, size },
    });

    return response.data.data.content;
  } catch (error) {
    console.error('HOT 프로젝트 조회 실패:', error);
    throw error;
  }
};

export default getProjectPostsMain;
