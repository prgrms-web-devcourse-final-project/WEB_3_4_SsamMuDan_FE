import Badge from '@/common/Badge';
import LectureCard from '@/common/LectureCard';
import StackBadge from '@/common/StackBadge';

// 강의 카드 더미데이터
const dummyLecture = {
  title: '한 입 크기로 잘라 먹는 리액트(React.js) : 기초부터 실전까지',
  instructor: '김코딩',
  likes: 304,
  price: 16800,
  imageUrl: '/images/dummy-lecture.png',
};

const Jiwoo = () => {
  return (
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
        <Badge text="프론트엔드" className="w-[138px] h-[48px] bg-primary300 text-white text-2xl" />
        <Badge text="백엔드" className="w-[138px] h-[48px] border text-2xl" />
      </div>

      {/* 강의 카드 */}
      <div className="pl-5">
        <LectureCard {...dummyLecture} />
      </div>
    </div>
  );
};

export default Jiwoo;
