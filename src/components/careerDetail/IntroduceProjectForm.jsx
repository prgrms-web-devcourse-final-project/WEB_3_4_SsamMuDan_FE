import Badge from '@/common/Badge';

const IntroduceProjectForm = () => {
  return (
    <>
      <div className="w-full flex flex-col gap-7">
        {/* 제목 */}
        <div className="w-full  ">
          <div className="border-l-4 border-primary300">
            <div className="ml-[20px] text-[24px] font-semibold">cotree</div>
          </div>
          <div className="ml-[25px] text-[16px] text-grey300">2024.11.15 ~ 2025.04.18</div>
        </div>

        {/* 경험 */}
        <div>
          <div className="border-l-4 border-primary300">
            <div className="ml-[20px] text-[24px] font-semibold">Experience</div>
          </div>
          <div className="ml-[25px] text-[16px] text-black mt-3 flex flex-col gap-2">
            <div> - 의존성 캐싱을 통해 CI 시간 70% 단축</div>
            <div> - 의존성 캐싱을 통해 CI 시간 70% 단축</div>
            <div> - 의존성 캐싱을 통해 CI 시간 70% 단축</div>
            <div> - 의존성 캐싱을 통해 CI 시간 70% 단축</div>
          </div>
        </div>

        {/* 기술 스택 */}
        <div>
          <div className="border-l-4 border-primary300">
            <div className="ml-[20px] text-[24px] font-semibold">TechStack</div>
          </div>
          <div className="w-[822px] ml-[25px] text-[16px] text-black mt-3 flex flex-wrap gap-3">
            {Array(8)
              .fill(null)
              .map((_, index) => (
                <Badge
                  key={index}
                  text="프론트엔드"
                  className="w-[133px] h-[35px] bg-primary300 text-white text-[16px]"
                />
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default IntroduceProjectForm;
