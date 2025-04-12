// 아이디찾기 전화번호 인증코드 전송하는 함수

import { COTREE_ENDPOINT } from '../endpoint';
import coTreeAPI from '@/config/cotree';

const postFindIdCode = async ({ username, receiverNumber }) => {
  try {
    const response = await coTreeAPI.post(
      COTREE_ENDPOINT.findIdCode,
      { username, receiverNumber },
      { withCredentials: true }, // 명시적으로
    );

    console.log('아이디찾기 휴대폰번호 인증코드 전송 응답:', response.data);
    return response.data;
  } catch (error) {
    console.error('아이디찾기 인증코드 전송 실패:', error);
    throw error;
  }
};

export default postFindIdCode;
