import LectureCard from '@/common/LectureCard';
import { NavLink } from 'react-router-dom';

const EducationRelatedVideos = () => {
  return (
    <div className="w-[400px] h-[1207px] rounded-[12px] bg-[#F9F9F9] py-[27px] px-[44px] shadow-lg">
      {/* 타이틀 */}
      <div className="font-esamanru text-[24px] mb-[39px]">🔥 TechTube와 연관 영상</div>
      {/* 더미로 설정하고 dummy로 돌림 */}
      {Array(3)
        .fill(null)
        .map((_, index) => (
          <NavLink className="mb-[48px]" key={index}>
            <LectureCard
              title="React 완벽 마스터: 기초 개념부터 린캔버스 프로젝트까지"
              instructor="김코딩"
              likes="77"
              price="16,800"
              imageUrl="/images/education-image1.png"
              style="w-[342px] h-[195px]"
              stylemg="mb-[47px]"
            />
          </NavLink>
        ))}
    </div>
  );
};

export default EducationRelatedVideos;
