import DateSetForm from './DateSetForm';
import ProjectContentForm from './ProjectContentForm';

const ProjectForm = () => {
  return (
    <>
      <div className="w-[1213px] mx-auto">
        {/* 제목 */}
        <div className="w-full h-[44px] mx-auto border-b">
          <div className="text-[22px] font-semibold">📌 프로젝트</div>
        </div>
        {/* 작성 */}
        <div className="flex flex-row justify-end mt-[40px]">
          <DateSetForm type="프로젝트" />
          <ProjectContentForm />
          <div></div>
        </div>
      </div>
    </>
  );
};

export default ProjectForm;
