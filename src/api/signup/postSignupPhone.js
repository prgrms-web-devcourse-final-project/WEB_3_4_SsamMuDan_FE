// 회원가입 휴대폰번호 인증코드 전송하는 함수

import coTreeAPI from '@/config/cotree';
import { COTREE_ENDPOINT } from '../endpoint';

const postSignupPhone = async ({ receiverNumber }) => {
  try {
    const response = await coTreeAPI.post(COTREE_ENDPOINT.signupPhone, {
      receiverNumber,
    });

    console.log('휴대폰번호 인증코드 전송 응답:', response.data);
    return response.data;
  } catch (error) {
    console.error('휴대폰번호 인증코드 전송 실패:', error);
    throw error;
  }
};

export default postSignupPhone;
