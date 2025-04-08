// 메인페이지에서 프로젝트 모집글 조회하는 함수

import coTreeAPI from '@/config/cotree';
import { COTREE_ENDPOINT } from '../endpoint';

const getProjectList = async (techStacks, position, page) => {
  try {
    let queryString = `?page=${page}&size=16`;

    // 기술 스택이 선택된 경우, 각각의 ID를 쿼리 파라미터로 추가
    if (techStacks && techStacks.length > 0) {
      techStacks.forEach((stackId) => {
        queryString += `&techStack=${stackId}`;
      });
    }
    if (position && position.length > 0) {
      position.forEach((posId) => {
        queryString += `&jobPosition=${posId}`;
      });
    }

    const response = await coTreeAPI.get(COTREE_ENDPOINT.projectList + queryString);
    console.log('response', response.data);
    return response.data.data;
  } catch (error) {
    console.error('일반 프로젝트 조회 실패:', error);
    throw error;
  }
};

export default getProjectList;
