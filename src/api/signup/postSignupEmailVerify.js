// 회원가입 이메일 인증코드 확인하는 함수

import coTreeAPI from '@/config/cotree';
import { COTREE_ENDPOINT } from '../endpoint';

const postSignupEmailVerify = async ({ email, code }) => {
  try {
    const response = await coTreeAPI.post(COTREE_ENDPOINT.signupEmailVerify, {
      email,
      code,
    });

    console.log('이메일 인증코드 확인 응답:', response.data);
    return response.data;
  } catch (error) {
    console.error('이메일 인증코드 확인 실패:', error);
    throw error;
  }
};

export default postSignupEmailVerify;
