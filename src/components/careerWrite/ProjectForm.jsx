import DateSetForm from './DateSetForm';
import ProjectContentForm from './ProjectContentForm';
import { useState, useEffect } from 'react';

const ProjectForm = ({ setPostData, index, portfolioInfos, onDelete, canDelete }) => {
  const [dateInfo, setDateInfo] = useState();
  const [careerContent, setCareerContent] = useState();
  useEffect(() => {
    if (!dateInfo || !careerContent) return;

    const merged = { ...dateInfo, ...careerContent };

    setPostData((prev) => {
      const updated = [...prev.portfolioInfos]; // ✅ 프로젝트는 portfolioInfos
      updated[index] = {
        ...updated[index], // 필요시 기존 정보 유지
        ...merged,
      };

      return {
        ...prev,
        portfolioInfos: updated, // ✅ 여기로 반영해야 함
      };
    });
  }, [dateInfo, careerContent]);

  const handleDateChange = (data) => {
    setDateInfo(data);
  };

  const handleProjectContentChange = (data) => {
    setCareerContent(data);
  };
  return (
    <>
      <div className="w-[1213px] mx-auto">
        {/* 작성 */}
        <div className="flex flex-row justify-end mt-[40px]">
          <DateSetForm type="프로젝트" key={index} index={index} onDateChange={handleDateChange} />
          <ProjectContentForm
            onCareerChange={handleProjectContentChange}
            onDelete={onDelete}
            canDelete={canDelete}
          />
          <div></div>
        </div>
      </div>
    </>
  );
};

export default ProjectForm;
