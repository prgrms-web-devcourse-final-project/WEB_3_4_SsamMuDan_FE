import IntroduceBar from '@/components/common/IntroduceBar';

const CareerDetailSection = ({ data }) => {
  console.log(data);
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
          {Array.isArray(data) && data.length > 0 ? (
            data.map((item, index) => <IntroduceBar key={item.index} text={item} />)
          ) : (
            <div className="text-center text-gray-500">경력 정보가 없습니다.</div>
          )}
        </div>
      </div>
    </>
  );
};

export default CareerDetailSection;
