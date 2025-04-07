import Layout from '@/common/Layout/Layout';
import BasicForm from '@/components/careerWrite/BasicForm';
import CareerForm from '@/components/careerWrite/CareerForm';
import AddButton from '@/components/common/AddButton';
import ProjectForm from '@/components/careerWrite/ProjectForm';
import PrimaryButton from '@/components/common/PrimaryButton';
import FloatingButton from '@/components/common/FloatingButton';
import { useState, useEffect } from 'react';
import postRecruitment from '@/api/careerWrite/postRecruitment';

const CareerWrite = () => {
  const [postData, setPostData] = useState({
    basicInfo: {
      profileImage: '',
      email: '',
      years: 0,
      introduction: '',
      developPositionIds: [1],
      techStackIds: [],
    },
    careerInfos: [],
    portfolioInfos: [],
  });

  const handleRegister = () => {
    postRecruitment(postData);
    console.log(postData);
  };

  // 경력 추가
  const handleAddCareer = () => {
    setPostData((prev) => ({
      ...prev,
      careerInfos: [
        ...prev.careerInfos,
        {
          startDate: '',
          endDate: '',
          isWorking: false,
          companyName: '',
          position: '',
          careerDescription: '',
          techStackIds: [],
        },
      ],
    }));
  };

  // 프로젝트 추가
  const handleAddProject = () => {
    setPostData((prev) => ({
      ...prev,
      portfolioInfos: [
        ...prev.portfolioInfos,
        {
          startDate: '',
          endDate: '',
          projectName: '',
          projectDescription: '',
          techStackIds: [],
        },
      ],
    }));
  };

  // 프로젝트 삭제
  const handleDeleteCareer = (deleteIndex) => {
    const updated = postData.careerInfos;
    updated.splice(deleteIndex, 1); // 원하는 index 하나 삭제
    console.log(updated);
    setPostData((prev) => ({
      ...prev,
      careerInfos: updated, // 업데이트된 배열로 반영
    }));
  };
  // 프로젝트 삭제
  const handleDeleteProject = (deleteIndex) => {
    const updated = postData.portfolioInfos;
    updated.splice(deleteIndex, 1); // 원하는 index 하나 삭제
    console.log(updated);
    setPostData((prev) => ({
      ...prev,
      careerInfos: updated, // 업데이트된 배열로 반영
    }));
  };

  return (
    <>
      <Layout>
        <div className="w-[1246px] mx-auto mt-[129px] relative">
          {/* 이름 */}
          <div className="font-esamanru text-[24px]">
            ⭐ <span className="text-primary300">홍길동 </span>님의 정보를 알려주세요
          </div>
          {/* 기본정보 */}
          <div className="mt-[70px]">
            <BasicForm setPostData={setPostData} />
          </div>

          {/* 경력 */}
          <div className="w-full mt-[160px] flex flex-col items-center ">
            <div className="w-[1213px] h-[44px] mx-auto border-b">
              <div className="text-[22px] font-semibold">📌 경력</div>
            </div>
            {postData.careerInfos.map((item, index) => (
              <CareerForm
                key={item.id ?? index}
                index={index}
                setPostData={setPostData}
                careerInfos={postData.careerInfos}
                onDelete={() => handleDeleteCareer(index)}
                canDelete={index === postData.careerInfos.length - 1} // ✅ 마지막 항목만 true
              />
            ))}

            <div className="mt-[110px] ">
              <AddButton
                text="경력 추가하기"
                onClick={() => {
                  handleAddCareer();
                }}
              />
            </div>
          </div>

          {/* 프로젝트 */}
          <div className="w-full mt-[160px] flex flex-col items-center ">
            {/* 제목 */}
            <div className="w-[1213px] h-[44px] mx-auto border-b">
              <div className="text-[22px] font-semibold">📌 프로젝트</div>
            </div>
            {postData.portfolioInfos.map((item, index) => (
              <ProjectForm
                key={item.id ?? index}
                index={index}
                setPostData={setPostData}
                portfolioInfos={postData.portfolioInfos}
                onDelete={() => handleDeleteProject(index)}
                canDelete={index === postData.portfolioInfos.length - 1} // ✅ 마지막만 삭제 가능
              />
            ))}
            <div className="mt-[110px] ">
              <AddButton
                text="프로젝트 추가하기"
                onClick={() => {
                  handleAddProject();
                }}
              />
            </div>
          </div>

          {/* 등록 버튼 */}
          <div
            className="w-[1213px] mx-auto flex flex-row justify-end mt-[204px] mb-[111px]"
            onClick={handleRegister}
          >
            <PrimaryButton text="등록하기" width="239px" height="40px" />
          </div>

          <div className="fixed  bottom-[350px] right-[1%] ">
            <FloatingButton />
          </div>
        </div>
      </Layout>
    </>
  );
};

export default CareerWrite;
