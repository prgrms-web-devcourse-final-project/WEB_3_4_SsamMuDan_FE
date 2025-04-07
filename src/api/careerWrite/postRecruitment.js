import coTreeAPI from '@/config/cotree';
import { COTREE_ENDPOINT } from '../endpoint';

const postRecruitment = async (request) => {
  try {
    const response = await coTreeAPI.post(COTREE_ENDPOINT.careerWrite, request);
    console.log(response.data);

    // return response.data; // 필요 시 반환
  } catch (error) {
    console.error('Error fetching career info:', error);
    throw error;
  }
};

export default postRecruitment;
