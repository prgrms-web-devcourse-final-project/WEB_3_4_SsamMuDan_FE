// 회원 구매목록 조회 함수

import coTreeAPI from '@/config/cotree';
import { COTREE_ENDPOINT } from '../endpoint';

const getOrderList = async (
  // default
  page = 0,
  size = 12,
  type = 'TECH_TUBE',
) => {
  try {
    const response = await coTreeAPI.get(COTREE_ENDPOINT.orderList, {
      params: { page, size, type },
    });
    return {
      content: response.data.data.content,
      totalPages: response.data.data.totalPages,
    };
  } catch (error) {
    console.error('구매 목록 조회 실패:', error);
    throw error;
  }
};

export default getOrderList;
