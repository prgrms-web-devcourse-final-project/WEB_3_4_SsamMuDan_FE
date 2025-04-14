import CareerDetail from '@/pages/CareerDetail';

export const COTREE_ENDPOINT = Object.freeze({
  postImg: '/api/v1/file/upload',
  techSkills: `/api/v1/category/skill`, // 기술 스택 조회
  techbook: `/api/v1/education/techbook`, // 교육 테크북
  communityPosts: `/api/v1/community/board`, // 커뮤니티 게시글 조회
  techtube: `/api/v1/education/techtube`, // 교육 테크튜브  조회와 상세에 씀
  techbookDetail: `/api/v1/education/techbook`, // 교육 테크북 상세페이지
  techbookReview: `/api/v1/education/review`, // 교육 테크북 리뷰
  techLike: `/api/v1/like`, // 교육 좋아요 (⭐️ 교육, 프로젝트, 커뮤니티 모두 해당 엔드포인트 사용)
  likedTechTube: '/api/v1/education/techtube/like', // 내가 좋아요한 테크튜브 목록 조회
  likedTechBook: '/api/v1/education/techbook/like', // 내가 좋아요한 테크북 목록 조회
  projectPostsMain: `/api/v1/project/team/hot/main`, // 메인페이지에서 프로젝트 모집글 조회
  signin: `/api/v1/member/signin`, // 로그인
  careerWrite: '/api/v1/recruitment/resume?id=1',
  community: '/api/v1/community/board',
  communityDetail: (boardId) => `/api/v1/community/board/${boardId}`, // 커뮤니티 게시글 상세 조회
  community: '/api/v1/community/board', // 커뮤니티 조회
  communityCategory: '/api/v1/category/community', //커뮤니티 카테고리 조회
  communityCreate: '/api/v1/community/board', // 커뮤니티 작성
  likedCommunity: '/api/v1/community/like', // 내가 좋아요한 커뮤니티 게시글 목록 조회
  careerPosition: '/api/v1/category/position',
  careerInfo: '/api/v1/recruitment/resume',
  CareerDetail: '/api/v1/recruitment/resume',
  Comment: '/api/v1/comment',
  hotProject: '/api/v1/project/team/hot', // 메인페이지에서 프로젝트 모집글 조회
  projectList: 'api/v1/project/team', // 메인페이지에서 프로젝트 모집글 조회
  projectMake: 'api/v1/project/team/', // 메인페이지에서 프로젝트 모집글 조회
  projectDetail: (projectId) => `/api/v1/project/team/${projectId}`, // 프로젝트 상세 조회
  projectStatus: (projectId) => `/api/v1/project/team/${projectId}/status`, // 프로젝트 모집 상태 변경
  projectPosition: (projectId) => `/api/v1/project/team/${projectId}/position`, // 프로젝트 직무별 모집 인원 수정
  likedProject: '/api/v1/project/team/like', // 내가 좋아요한 프로젝트 모집글 목록 조회
  signup: `/api/v1/member/signup`, // 회원가입
  userInfo: `/api/v1/member`, // 로그인한 사용자의 정보 조회
  logout: `/api/v1/member/signout`, // 로그아웃
  orderList: `/api/v1/member/order`, // 회원 구매목록 조회
  signupPhone: `/api/v1/member/signup/phone`, // 회원가입 휴대폰번호 인증코드 전송
  signupPhoneVerify: `/api/v1/member/signup/phone/verify`, // 회원가입 휴대폰번호 인증코드 확인
  signupEmail: `/api/v1/email/code`, // 회원가입 이메일 인증코드 전송
  signupEmailVerify: `/api/v1/email/code/verify`, // 회원가입 이메일 인증코드 확인
  findIdCode: `/api/v1/member/recovery/loginId`, // 아이디찾기 휴대폰번호 인증코드 전송
  findIdCodeVerify: `/api/v1/member/recovery/loginId/verify`, // 아이디찾기 휴대폰번호 인증코드 확인
  resetPassword: `/api/v1/member/update/password`, // 비밀번호 재설정
  educationCategory: `/api/v1/category/education`, // 교육 카테고리 전체 조회
  tosspay: '/api/v1/payment/prepare', // 토스페이
  tosspayconfirm: '/api/v1/payment/confirm', //토스페이 확인
  //  예시 readQuantityAnalysis: `/readQt?authKey=${LIBRARY_KEY}`,
});
