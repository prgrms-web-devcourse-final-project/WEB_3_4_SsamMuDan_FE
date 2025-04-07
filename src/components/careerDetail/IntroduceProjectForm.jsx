import Badge from '@/common/Badge';

const IntroduceProjectForm = ({ text }) => {
  return (
    <>
      <div className="w-full flex flex-col gap-7 border-l-4 border-primary300">
        {/* 제목 */}
        <div className="w-full  ">
          <div className=" ">
            <div className="ml-[20px] text-[24px] font-semibold">{text.projectName}</div>
          </div>
          <div className="ml-[25px] text-[16px] text-grey300">
            {text.startDate} ~ {text.endDate ? text.endDate : '진행중'}
          </div>
        </div>

        {/* 경험 */}
        <div>
          <div className=" ">
            <div className="ml-[20px] text-[24px] font-semibold">Experience</div>
          </div>
          <div className="ml-[25px] text-[16px] text-black mt-3 flex flex-col gap-2">
            {text.description}
          </div>
        </div>

        {/* 기술 스택 */}
        <div>
          <div className="">
            <div className="ml-[20px] text-[24px] font-semibold">TechStack</div>
          </div>
          <div className="w-[822px] ml-[25px] text-[16px] text-black mt-3 flex flex-wrap gap-3">
            {text.techStackInfos.map((item, index) => (
              <Badge
                key={index}
                text={item.name}
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
