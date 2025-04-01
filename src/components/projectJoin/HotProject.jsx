import HotProjectCard from './HotProjectCard';

const HotProject = () => {
  return (
    <>
      <div className="w-[1246px] h-[449px] mx-auto mt-[146px]">
        {/* 제목 */}
        <div className="h-[36px] text-[30px] font-[400] ">가장 HOT한 프로젝트</div>
        <div className="w-full flex justify-between mt-[27px]">
          <HotProjectCard />
          <HotProjectCard />
        </div>
      </div>
    </>
  );
};

export default HotProject;
