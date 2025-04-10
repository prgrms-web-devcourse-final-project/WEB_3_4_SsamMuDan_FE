import StackBadge from '@/common/StackBadge';

const ProjectStack = ({ techStacks }) => {
  if (!techStacks || techStacks.length === 0) return null;

  return (
    <>
      <div className="w-[1136px] mx-auto mt-[50px] flex flex-col gap-4">
        <div className="text-[25px] font-semibold mt-[60px]">기술 스택</div>
        <div className="w-full border border-black"></div>
        <div className="w-full text-[16px] text-black mt-3 flex flex-wrap gap-3">
          {techStacks.map((stack, index) => (
            <StackBadge key={index} text={stack} />
          ))}
        </div>
      </div>
    </>
  );
};

export default ProjectStack;
