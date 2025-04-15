// 로그인 정보 스토어

import { create } from 'zustand';

const useAuthStore = create((set) => ({
  // 초기 상태값
  accessToken: null,
  refreshToken: null,
  isLoggedIn: false, // 로그인 여부
  userInfo: null, // 로그인한 유저 정보
  role: null, // 유저 역할
  // 로그인 함수: accessToken, refreshToken, userInfo 저장
  login: ({ accessToken, refreshToken, userInfo }) =>
    set({
      accessToken,
      refreshToken,
      userInfo,
      isLoggedIn: true, // 로그인 여부 true
    }),

  // 새로고침 복구용 함수: 새로고침 하면 로그인 상태가 날아가기 때문에 토큰 없이 userInfo만으로 로그인 처리
  loginWithUserInfo: (userInfo) =>
    set({
      userInfo,
      isLoggedIn: true,
    }),

  // 로그아웃 함수
  logout: () =>
    set({
      accessToken: null,
      refreshToken: null,
      userInfo: null,
      isLoggedIn: false,
    }),
}));

export default useAuthStore;
