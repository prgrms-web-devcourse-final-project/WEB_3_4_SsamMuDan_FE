import IntroduceBar from '@/components/common/IntroduceBar';

const CareerDetailSection = () => {
  return (
    <>
      {/* 경력 세션 */}
      <div className="w-[1136px] mx-auto mt-[107px] flex flex-col gap-[41px]">
        {/* 제목 */}
        <div className="w-full border-b border-black h-[50px] ">
          <div className="text-[25px] font-semibold">경력</div>
        </div>
        {/* 경력 정보 */}
        <div className="w-full flex flex-col gap-[41px]">
          <IntroduceBar text="" />
          <IntroduceBar text="" />
        </div>
      </div>
    </>
  );
};

export default CareerDetailSection;
