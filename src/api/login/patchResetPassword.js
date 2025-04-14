// 비밀번호 재설정하는 함수

import { COTREE_ENDPOINT } from '../endpoint';
import coTreeAPI from '@/config/cotree';

const patchResetPassword = async (email, password) => {
  try {
    const response = await coTreeAPI.patch(
      COTREE_ENDPOINT.resetPassword,
      { email, password },
      {
        withCredentials: true,
        headers: {
          'Content-Type': 'application/json', // 명시적으로
        },
      },
    );
    return response.data;
  } catch (error) {
    console.error('비밀번호 재설정 실패:', error.response?.data || error);
    throw error;
  }
};

export default patchResetPassword;
