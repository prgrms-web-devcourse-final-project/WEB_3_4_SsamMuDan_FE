// 로그인한 사용자의 정보를 조회하는 함수

import coTreeAPI from '@/config/cotree';
import { COTREE_ENDPOINT } from '../endpoint';

const getUserInfo = async () => {
  const res = await coTreeAPI.get(COTREE_ENDPOINT.userInfo, {
    withCredentials: true,
  });
  return res.data;
};

export default getUserInfo;
