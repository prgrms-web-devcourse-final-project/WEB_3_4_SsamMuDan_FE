// 교육(테크북, 테크튜브) 카테고리를 조회하는 함수

import coTreeAPI from '@/config/cotree';
import { COTREE_ENDPOINT } from '../endpoint';

const getEducationCategory = async () => {
  try {
    const response = await coTreeAPI.get(COTREE_ENDPOINT.educationCategory);

    return response.data;
  } catch (error) {
    console.error('교육 카테고리 조회 실패:', error);
    throw error;
  }
};

export default getEducationCategory;
