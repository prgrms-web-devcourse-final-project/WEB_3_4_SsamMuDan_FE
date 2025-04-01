import StackBadge from '@/common/StackBadge';

const ProjectStack = () => {
  return (
    <>
      <div className=" w-[1136px] mx-auto mt-[50px] flex flex-col gap-4">
        <div className="text-[25px] font-semibold mt-[60px]">기술 스택</div>
        <div className="w-full border border-black"></div>
        <div className="w-full text-[16px] text-black mt-3 flex flex-wrap gap-3">
          {Array(8)
            .fill(null)
            .map((_, index) => (
              <StackBadge key={index} text="프론트엔드" />
            ))}
        </div>
      </div>
    </>
  );
};

export default ProjectStack;
