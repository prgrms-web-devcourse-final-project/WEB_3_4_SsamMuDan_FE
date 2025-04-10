// 회원가입 함수

import coTreeAPI from '@/config/cotree';
import { COTREE_ENDPOINT } from '../endpoint';

const postSignup = async ({ email, password, username, nickname, phoneNumber, role }) => {
  try {
    const response = await coTreeAPI.post(COTREE_ENDPOINT.signup, {
      email,
      password,
      username,
      nickname,
      phoneNumber,
      role, // "user" 또는 "hunter"
    });

    console.log('회원가입 응답:', response.data);
    return response.data;
  } catch (error) {
    console.error('회원가입 실패:', error);
    throw error;
  }
};

export default postSignup;
