import Layout from '@/common/Layout/Layout';
import BasicForm from '@/components/careerWrite/BasicForm';
import CareerForm from '@/components/careerWrite/CareerForm';
import AddButton from '@/components/common/AddButton';
import ProjectForm from '@/components/careerWrite/ProjectForm';
import PrimaryButton from '@/components/common/PrimaryButton';
import FloatingButton from '@/components/common/FloatingButton';
import { useState } from 'react';

const CareerWrite = () => {
  const [postData, setPostData] = useState({
    basicInfo: {
      profileImage: '',
      email: '',
      years: 0,
      introduction: '',
      developPositionIds: [],
      techStackIds: [],
    },
    careerInfos: [],
    portfolioInfos: '',
  });

  const handleResiter = () => {
    console.log(postData);
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
            <CareerForm setPostData={setPostData} />
            <div className="mt-[110px] ">
              <AddButton text="경력 추가하기" />
            </div>
          </div>

          {/* 프로젝트 */}
          <div className="w-full mt-[160px] flex flex-col items-center ">
            <ProjectForm />
            <div className="mt-[110px] ">
              <AddButton text="프로젝트 추가하기" />
            </div>
          </div>

          {/* 등록 버튼 */}
          <div
            className="w-[1213px] mx-auto flex flex-row justify-end mt-[204px] mb-[111px]"
            onClick={handleResiter}
          >
            <PrimaryButton text="등록하기" width="239px" height="40px" />
          </div>
        </div>

        <div className="fixed bottom-[350px] right-[1%] ">
          <FloatingButton />
        </div>
      </Layout>
    </>
  );
};

export default CareerWrite;
