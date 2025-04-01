import Badge from '@/common/Badge';
import LectureCard from '@/common/LectureCard';
import StackBadge from '@/common/StackBadge';
import LectureCardSimple from '@/components/common/LectureCardSimple';
import ActionButton from '@/components/common/ActionButton';
import { useState } from 'react';
import EducationDetailBanner from '@/components/educationDetail/EducationDetailBanner';
import Layout from '@/common/Layout/Layout';
import EducationDetailContent from '@/components/educationDetail/EducationDetailContent';

// 강의 카드 더미데이터
const dummyLecture = {
  title: '한 입 크기로 잘라 먹는 리액트(React.js) : 기초부터 실전까지',
  instructor: '김코딩',
  likes: 304,
  price: 16800,
  imageUrl: '/images/dummy-lecture.png',
};

const Jiwoo = () => {
  // 좋아요, 결제하기 버튼 상태 테스트
  const [liked, setLiked] = useState(false);
  const [isPaid, setIsPaid] = useState(false);

  return (
    <Layout>
      <div className="relative w-full max-w-[1246px] mx-auto py-10">
        <EducationDetailBanner />
        <EducationDetailContent />
      </div>
      <div className="flex flex-col gap-4">
        {/* 스택 뱃지 */}
        <div className="flex gap-2">
          <StackBadge text="JavaScript" />
          <StackBadge text="TypeScript" showCloseIcon={true} />
        </div>
        {/* 일반 뱃지 */}
        <div className="flex gap-2">
          <Badge text="모집중" className="w-[72px] h-[33px] bg-[#3FC22E] text-white text-sm" />
          <Badge text="4년차" className="w-[72px] h-[33px] bg-[#3FC22E] text-white text-sm" />
          <Badge
            text="프론트엔드"
            className="w-[138px] h-[48px] bg-primary300 text-white text-2xl"
          />
          <Badge text="백엔드" className="w-[138px] h-[48px] border text-2xl" />
        </div>
        {/* 강의 카드 */}
        <div className="pl-5">
          <LectureCard {...dummyLecture} />
        </div>
        {/* 마이페이지, 교육페이지 배너에 사용하는 강의 카드 */}
        <div className="pl-5 flex gap-2">
          {/* 가격 O */}
          <LectureCardSimple
            title={dummyLecture.title}
            instructor={dummyLecture.instructor}
            price={dummyLecture.price}
            imageUrl={dummyLecture.imageUrl}
          />
          {/* 가격 X */}
          <LectureCardSimple
            title={dummyLecture.title}
            instructor={dummyLecture.instructor}
            price={dummyLecture.price}
            imageUrl={dummyLecture.imageUrl}
            showPrice={false}
          />
        </div>
        {/* /////////////////////////////////////////////////////// */}
        {/* 로그인, 교육 페이지 결제창에서 사용하는 버튼 */}
        <div className="flex flex-col gap-4">
          <div className="flex gap-4 p-4">
            {/* 로그인 버튼 */}
            <ActionButton
              text="로그인"
              variant="default"
              onClick={() => alert('로그인 버튼 클릭됨')}
            />
            {/* 회원가입 버튼 */}
            <ActionButton
              text="회원가입"
              variant="auth"
              onClick={() => alert('회원가입 버튼 클릭됨')}
            />
          </div>

          <div className="flex gap-4 p-4">
            {/* 결제하기 버튼 -> 클릭 시 '바로보기'로 상태 변경  */}
            <ActionButton
              text="결제하기"
              variant="payment"
              isPayCompleted={isPaid}
              hasTopImage
              topImageSrc="/icons/leaf.svg"
              onClick={() => setIsPaid(true)}
            />

            {/* 좋아요 버튼 -> 클릭 시 좋아요 상태 토글됨 */}
            <ActionButton
              text="좋아요"
              variant="like"
              isLiked={liked}
              onClick={() => setLiked((prev) => !prev)}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Jiwoo;
