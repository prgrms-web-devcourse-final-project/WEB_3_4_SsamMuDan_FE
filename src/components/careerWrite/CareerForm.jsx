import DateSetForm from './DateSetForm';
import CareerContentForm from './CareerContentForm';
import { useState, useEffect } from 'react';

const CareerForm = ({ setPostData }) => {
  const [dateInfo, setDateInfo] = useState({});
  const [careerContent, setCareerContent] = useState({});

  const handleDateChange = (data) => {
    setDateInfo(data);
  };

  const handleCareerChange = (data) => {
    setCareerContent(data);
  };

  useEffect(() => {
    if (Object.keys(dateInfo).length) {
      const merged = { ...dateInfo };

      setPostData((prev) => ({
        ...prev,
        careerInfos: [merged], // 추후 추가 지원 시 배열 관리
      }));
    }
  }, [dateInfo]);

  return (
    <>
      <div className="w-[1213px] mx-auto">
        {/* 제목 */}
        <div className="w-full h-[44px] mx-auto border-b">
          <div className="text-[22px] font-semibold">📌 경력</div>
        </div>
        {/* 작성 */}
        <div className="flex flex-row justify-end mt-[40px]">
          <DateSetForm onChange={(data) => handleDateChange(data)} />
          <CareerContentForm />
          <div></div>
        </div>
      </div>
    </>
  );
};

export default CareerForm;
