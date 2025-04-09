import CareerDetail from '@/pages/CareerDetail';

export const COTREE_ENDPOINT = Object.freeze({
  techSkills: `/api/v1/category/skill`, // 기술 스택 조회
  techbook: `/api/v1/education/techbook`, // 교육 테크북
  communityPosts: `/api/v1/community/board`, // 커뮤니티 게시글 조회
  techtube: `/api/v1/education/techtube`, // 교육 테크튜브  조회
  // //임시로 1을 붙여놓았음
  techbookDetail: `/api/v1/education/techbook`, // 교육 테크북 상세페이지
  techbookReview: `/api/v1/education/review`, // 교육 테크북 리뷰
  techbookLike: `/api/v1/like`,
  projectPostsMain: `/api/v1/project/team/hot`, // 메인페이지에서 프로젝트 모집글 조회
  signin: `/api/v1/member/signin`, // 로그인
  careerWrite: '/api/v1/recruitment/resume?id=1',
  careerPosition: '/api/v1/category/position',
  careerInfo: '/api/v1/recruitment/resume',
  CareerDetail: '/api/v1/recruitment/resume/1',
  Comment: '/api/v1/comment',
  hotProject: '/api/v1/project/team/hot', // 메인페이지에서 프로젝트 모집글 조회
  projectList: 'api/v1/project/team', // 메인페이지에서 프로젝트 모집글 조회
  projectMake: 'api/v1/project/team/', // 메인페이지에서 프로젝트 모집글 조회
  signup: `/api/v1/member/signup`, // 회원가입
  userInfo: `/api/v1/member`, // 로그인한 사용자의 정보 조회
  logout: `/api/v1/member/signout`, // 로그아웃
  signupPhone: `/api/v1/member/signup/phone`, // 회원가입 휴대폰번호 인증코드 전송
  signupPhoneVerify: `/api/v1/member/signup/phone/verify`, // 회원가입 휴대폰번호 인증코드 확인
  signupEmail: `/api/v1/email/code`, // 회원가입 이메일 인증코드 전송
  signupEmailVerify: `/api/v1/email/code/verify`, // 회원가입 이메일 인증코드 확인
  educationCategory: `/api/v1/category/education`, // 교육 카테고리 전체 조회

  //  예시 readQuantityAnalysis: `/readQt?authKey=${LIBRARY_KEY}`,
});
