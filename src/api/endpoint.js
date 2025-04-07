export const COTREE_ENDPOINT = Object.freeze({
  techSkills: `/api/v1/category/skill`, // 기술 스택 조회
  techbook: `/api/v1/education/techbook`, // 교육 테크북
  communityPosts: `/api/v1/community/board`, // 커뮤니티 게시글 조회
  techtube: `/api/v1/education/techtube`, // 교육 테크튜브  조회
  // //임시로 1을 붙여놓았음
  techbookDetail: `/api/v1/education/techbook/50/info`, // 교육 테크북 상세페이지
  techbookReview: `/api/v1/education/review`, // 교육 테크북 리뷰
  techbookLike: `/api/v1/like`,

  //  예시 readQuantityAnalysis: `/readQt?authKey=${LIBRARY_KEY}`,
});
