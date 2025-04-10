// 프로젝트 상세 조회 함수

import coTreeAPI from '@/config/cotree';
import { COTREE_ENDPOINT } from '../endpoint';

const getProjectDetail = async (projectId) => {
  try {
    const response = await coTreeAPI.get(COTREE_ENDPOINT.projectDetail(projectId));

    return response.data.data;
  } catch (error) {
    console.error('프로젝트 상세 조회 실패:', error);
    throw error;
  }
};

export default getProjectDetail;
