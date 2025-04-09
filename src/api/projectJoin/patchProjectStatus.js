// 프로젝트 모집 상태 변경 함수

import coTreeAPI from '@/config/cotree';
import { COTREE_ENDPOINT } from '../endpoint';

const patchProjectStatus = async (projectId) => {
  try {
    const response = await coTreeAPI.patch(COTREE_ENDPOINT.projectStatus(projectId));

    return response.data.data;
  } catch (error) {
    console.error('프로젝트 모집 상태 변경 실패:', error);
    throw error;
  }
};

export default patchProjectStatus;
