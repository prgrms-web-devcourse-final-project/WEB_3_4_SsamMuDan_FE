// 아이디찾기 전화번호 인증코드 확인하는 함수

import { COTREE_ENDPOINT } from '../endpoint';
import coTreeAPI from '@/config/cotree';

const postFindIdCodeVerify = async ({ username, receiverNumber, code }) => {
  try {
    const response = await coTreeAPI.post(
      COTREE_ENDPOINT.findIdCodeVerify,
      { username, receiverNumber, code },
      { withCredentials: true }, // 명시적으로
    );

    console.log('아이디찾기 인증코드 확인 응답:', response.data);
    return response.data;
  } catch (error) {
    console.error('아이디찾기 인증코드 확인 실패:', error);
    throw error;
  }
};

export default postFindIdCodeVerify;
