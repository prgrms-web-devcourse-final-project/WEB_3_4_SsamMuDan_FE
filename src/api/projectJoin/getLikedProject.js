// 내가 좋아요한 프로젝트 모집글 목록 조회

import coTreeAPI from '@/config/cotree';
import { COTREE_ENDPOINT } from '../endpoint';

const getLikedProject = async (page = 0, size = 16) => {
  try {
    const response = await coTreeAPI.get(COTREE_ENDPOINT.likedProject, {
      params: { page, size },
    });
    return response.data.data;
  } catch (error) {
    console.error('내가 좋아요한 프로젝트 모집글 조회 실패:', error);
    throw error;
  }
};

export default getLikedProject;
