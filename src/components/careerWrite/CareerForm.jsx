import DateSetForm from './DateSetForm';
import CareerContentForm from './CareerContentForm';
import { useState, useEffect } from 'react';

const CareerForm = ({ setPostData, index, careerInfos, onDelete, canDelete }) => {
  const [dateInfo, setDateInfo] = useState('');
  const [careerContent, setCareerContent] = useState('');

  useEffect(() => {
    console.log(dateInfo);
    console.log(careerContent);
    if (!dateInfo || !careerContent) return;

    const merged = { ...dateInfo, ...careerContent };

    setPostData((prev) => {
      const updated = [...prev.careerInfos];
      updated[index] = {
        ...updated[index], // 기존 값도 병합 (안전성 ↑)
        ...merged,
      };

      return {
        ...prev,
        careerInfos: updated,
      };
    });

    // console.log('📦 merged:', merged);
  }, [dateInfo, careerContent]);

  const handleDateChange = (data) => {
    setDateInfo(data);
  };

  const handleCareerContentChange = (data) => {
    setCareerContent(data);
  };

  return (
    <>
      <div className="w-[1213px] mx-auto mt-6">
        {/* 작성 */}
        <div className="flex flex-row justify-end mt-[40px]">
          <DateSetForm key={index} index={index} type="경력" onDateChange={handleDateChange} />
          <CareerContentForm
            onCareerChange={handleCareerContentChange}
            onDelete={onDelete}
            canDelete={canDelete} // ✅ 넘겨줌
          />
          <div></div>
        </div>
      </div>
    </>
  );
};

export default CareerForm;
