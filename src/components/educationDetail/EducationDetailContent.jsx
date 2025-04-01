import { useState } from 'react';
import CategoryTab from '../common/CategoryTab';
import { StarIcon } from '@heroicons/react/24/solid';
import PrimarySelect from '@/components/common/PrimarySelect';
import EducationDetailReview from './EducationDetailReview';
import PrimaryButton from '../common/PrimaryButton';
import EducationDetailIntro from './EducationDetailIntro';

const EducationDetailContent = () => {
  const tabs = ['강의소개', '수강평', '커뮤니티'];
  const [currentTab, setCurrentTab] = useState('강의소개');
  const selectList = ['전체', '최신순', '높은 평점순'];

  // 강의소개 더미데이터
  const introduceData = {
    image: '/images/dummy-education-detail.svg',
    content: `
    ⭐ 이런 걸 배울 수 있어요
    - 자바스크립트의 기초부터 실무 문법과 구현 사용법
    - 최신 문법과 현대적인 자바스크립트 활용법
    - DOM 조작과 비동기 처리의 원리 등등...

    🔥 자바스크립트 언어 집중 공략
    이 강의는 JS를 집중적으로 학습하고 실무에서 어떻게 적용하는지를 다룹니다.

    💡 이 강의를 들으면 무엇이 달라질까요?
    - 비전공자도 실무에 적용 가능한 JS 기술 습득
    - 실제 프로젝트에서 코드 작성 자신감 향상

     📌 선수 지식 및 유의 사항
    기초 HTML/CSS를 알고 있다면 더 수월하게 따라올 수 있어요.`,
  };

  // 수강평 더미데이터
  const reviewData = {
    reviewer: '피자먹고싶다',
    date: '2025.01.25',
    rating: 5,
    content:
      '브라우저 콘솔을 활용해서 자바스크립트를 연구, 분석하듯이 배워나가는 과정이 너무나 즐거웠습니다. 그동안 js를 적당히만 알고 리액트랑 노드를 써왔는데 이 강의를 들으면서 아 이게 이런원리였구나 하고 깨달았던게 정말 많았습니다. 얄코님다운 쉬운 설명 덕에 고급 개념들도 수월히 배울 수 있었습니다. Js를 강의 제목처럼 제대로 파고들어 공부해 보고 싶으신 분들께는 정말 재미있는 강의가 될 것 같습니다. 현업에서 js를 쓰시는 분들께 특히 강력 추천합니다.',
    profileImage: '/images/user-avatar.png',
  };

  return (
    <div className="max-w-[800px] mx-auto py-10">
      <CategoryTab tabs={tabs} currentTab={currentTab} onTabChange={setCurrentTab} />
      {currentTab === '강의소개' && (
        <EducationDetailIntro image={introduceData.image} content={introduceData.content} />
      )}{' '}
      {currentTab === '수강평' && (
        <div className="bg-white rounded-[15px] border p-4">
          {/* 수강평 별점 요약 배너 */}
          <div className="bg-[#FAFAFA] w-[760px] h-[248px] rounded-[15px] border mb-6 mx-auto flex items-center justify-center relative">
            <div className="text-center">
              <p className="text-4xl font-bold mb-2">5.0</p>
              <div className="flex items-center justify-center gap-1 mb-2">
                {Array(5)
                  .fill()
                  .map((_, index) => (
                    <StarIcon key={index} className="w-[32px] h-[32px] text-yellow-400" />
                  ))}
              </div>
              <p className="text-lg text-gray-400">15개의 수강평</p>
            </div>
            <img
              src="/images/review-avatar.svg"
              alt="리뷰"
              className="absolute right-24 h-[188px]"
            />
          </div>

          {/* 정렬 드롭다운 */}
          <div className="flex justify-end mb-4">
            <PrimarySelect selectList={selectList} placeholder={'전체'}></PrimarySelect>
          </div>

          {/* 수강평 리스트 */}
          <div className="space-y-6 text-sm text-gray-700">
            {Array(5)
              .fill()
              .map((_, idx) => (
                <EducationDetailReview key={idx} {...reviewData} />
              ))}
          </div>

          {/* 더보기 버튼 */}
          <div className="flex justify-center mt-6">
            <PrimaryButton text="더보기" width="760px" height="47px" />
          </div>
        </div>
      )}
    </div>
  );
};

export default EducationDetailContent;
