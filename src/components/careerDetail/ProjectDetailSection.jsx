import IntroduceProjectForm from './introduceProjectForm';

const ProjectDetailSection = ({ data }) => {
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
          {Array.isArray(data) && data.length > 0 ? (
            data.map((item) => <IntroduceProjectForm key={item.id} text={item} />)
          ) : (
            <div className="text-center text-gray-500">프로젝트 정보가 없습니다.</div>
          )}
        </div>
      </div>
    </>
  );
};

export default ProjectDetailSection;
