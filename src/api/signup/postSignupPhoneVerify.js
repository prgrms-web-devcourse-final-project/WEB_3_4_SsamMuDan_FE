// 회원가입 휴대폰번호 인증코드 확인하는 함수

import coTreeAPI from '@/config/cotree';
import { COTREE_ENDPOINT } from '../endpoint';

const postSignupPhoneVerify = async ({ receiverNumber, code }) => {
  try {
    const response = await coTreeAPI.post(COTREE_ENDPOINT.signupPhoneVerify, {
      receiverNumber,
      code,
    });

    console.log('휴대폰번호 인증코드 확인 응답:', response.data);
    return response.data;
  } catch (error) {
    console.error('휴대폰번호 인증코드 확인 실패:', error);
    throw error;
  }
};

export default postSignupPhoneVerify;
