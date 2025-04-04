import coTreeAPI from '@/config/cotree';
import { COTREE_ENDPOINT } from '../endpoint';

const getTechBookDetail = async (id) => {
  try {
    const response = await coTreeAPI.get(`${COTREE_ENDPOINT.techbook}/${id}/info`);
    return response.data;
  } catch (error) {
    console.error(`TechBook 상세 조회 실패 (id: ${id})`, error);
    throw error;
  }
};

export default getTechBookDetail;
