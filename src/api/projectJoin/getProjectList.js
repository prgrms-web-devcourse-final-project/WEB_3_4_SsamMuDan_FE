// 메인페이지에서 프로젝트 모집글 조회하는 함수

import coTreeAPI from '@/config/cotree';
import { COTREE_ENDPOINT } from '../endpoint';

const getProjectList = async (page) => {
  try {
    const response = await coTreeAPI.get(COTREE_ENDPOINT.projectList, {
      params: {
        page: page,
        size: 16,
      },
    });
    return response.data.data;
  } catch (error) {
    console.error('HOT 프로젝트 조회 실패:', error);
    throw error;
  }
};

export default getProjectList;
