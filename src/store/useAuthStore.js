// 로그인 정보 스토어

import { create } from 'zustand';

const useAuthStore = create((set) => ({
  // 상태
  accessToken: null,
  refreshToken: null,
  isLoggedIn: false, // 로그인 됐는지 상태
  userInfo: null, // 로그인한 사용자 정보 -> 나중에

  // 로그인 성공하면 호출
  login: ({ accessToken, refreshToken }) =>
    set({
      accessToken,
      refreshToken,
      isLoggedIn: true,
    }),

  // 로그아웃 되면 호출
  logout: () =>
    set({
      accessToken: null,
      refreshToken: null,
      isLoggedIn: false,
      userInfo: null,
    }),
}));

export default useAuthStore;
