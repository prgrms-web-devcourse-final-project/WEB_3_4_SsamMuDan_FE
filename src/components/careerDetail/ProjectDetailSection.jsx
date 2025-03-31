import IntroduceProjectForm from './introduceProjectForm';

const ProjectDetailSection = () => {
  return (
    <>
      {/* 경력 세션 */}
      <div className="w-[1136px] mx-auto mt-[107px] flex flex-col gap-[41px]">
        {/* 제목 */}
        <div className="w-full border-b border-black h-[50px] ">
          <div className="text-[25px] font-semibold">프로젝트</div>
        </div>
        {/* 경력 정보 */}
        <div className="w-full flex flex-col gap-[41px]">
          <IntroduceProjectForm />
        </div>
      </div>
    </>
  );
};

export default ProjectDetailSection;
