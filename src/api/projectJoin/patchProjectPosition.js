// 프로젝트 직무별 모집 인원 수정 함수

import coTreeAPI from '@/config/cotree';
import { COTREE_ENDPOINT } from '../endpoint';

const patchProjectPosition = async (projectId, positions) => {
  try {
    const response = await coTreeAPI.patch(COTREE_ENDPOINT.projectPosition(projectId), positions);
    return response.data.data;
  } catch (error) {
    console.error('프로젝트 직무별 모집 인원 변경 실패:', error);
    throw error;
  }
};

export default patchProjectPosition;
