// 마이페이지에서 회원정보 변경하는 함수

import coTreeAPI from '@/config/cotree';
import { COTREE_ENDPOINT } from '../endpoint';

const editUserInfo = async ({ username, nickname, profileImageUrl }) => {
  const res = await coTreeAPI.put(COTREE_ENDPOINT.userInfo, {
    username,
    nickname,
    profileImageUrl,
  });
  return res.data;
};

export default editUserInfo;
