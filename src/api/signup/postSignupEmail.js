// 회원가입 이메일 인증코드 전송하는 함수

import coTreeAPI from '@/config/cotree';
import { COTREE_ENDPOINT } from '../endpoint';

const postSignupEmail = async ({ email }) => {
  try {
    const response = await coTreeAPI.post(COTREE_ENDPOINT.signupEmail, {
      email,
    });

    console.log('이메일 인증코드 전송 응답:', response.data);
    return response.data;
  } catch (error) {
    console.error('이메일 인증코드 전송 실패:', error);
    throw error;
  }
};

export default postSignupEmail;
