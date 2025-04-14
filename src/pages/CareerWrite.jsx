import Layout from '@/common/Layout/Layout';
import BasicForm from '@/components/careerWrite/BasicForm';
import CareerForm from '@/components/careerWrite/CareerForm';
import AddButton from '@/components/common/AddButton';
import ProjectForm from '@/components/careerWrite/ProjectForm';
import PrimaryButton from '@/components/common/PrimaryButton';
import FloatingButton from '@/components/common/FloatingButton';
import { useState } from 'react';
import postRecruitment from '@/api/careerWrite/postRecruitment';
import { useNavigate } from 'react-router-dom';
import { Toaster, toast } from 'react-hot-toast';
const CareerWrite = () => {
  const navigate = useNavigate();

  const toTop = () => {
    window.scrollTo({ top: 0, behavior: 'auto' });
    console.log('클릭');
  };

  // 이력서 데이터 상태 관리
  const [postData, setPostData] = useState({
    basicInfo: {
      profileImage: '',
      email: '',
      years: 0,
      introduction: '',
      developPositionIds: [],
      techStackIds: [],
    },
    careerInfos: [
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
    portfolioInfos: [
      {
        startDate: '',
        endDate: '',
        projectName: '',
        projectDescription: '',
        techStackIds: [],
      },
    ],
  });

  const [resumeImage, setResumeImage] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

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

  // 경력 삭제
  const handleDeleteCareer = (deleteIndex) => {
    if (postData.careerInfos.length <= 1) return; // 최소 1개는 유지
    setPostData((prev) => ({
      ...prev,
      careerInfos: prev.careerInfos.filter((_, index) => index !== deleteIndex),
    }));
  };

  // 프로젝트 삭제
  const handleDeleteProject = (deleteIndex) => {
    if (postData.portfolioInfos.length <= 1) return; // 최소 1개는 유지
    setPostData((prev) => ({
      ...prev,
      portfolioInfos: prev.portfolioInfos.filter((_, index) => index !== deleteIndex),
    }));
  };

  // 데이터 유효성 검사
  const validateData = () => {
    const { basicInfo, careerInfos, portfolioInfos } = postData;

    // 기본 정보 검사
    if (!basicInfo.email || !basicInfo.introduction || basicInfo.developPositionIds.length === 0) {
      alert('기본 정보를 모두 입력해주세요.');
      return false;
    }

    // 경력 정보 검사
    if (
      !careerInfos.every(
        (career) => career.companyName && career.position && career.careerDescription,
      )
    ) {
      alert('경력 정보를 모두 입력해주세요.');
      return false;
    }

    // 프로젝트 정보 검사
    if (!portfolioInfos.every((project) => project.projectName && project.projectDescription)) {
      alert('프로젝트 정보를 모두 입력해주세요.');
      return false;
    }

    return true;
  };

  // 등록하기 버튼 클릭 시 실행되는 함수
  const handleRegister = async () => {
    if (isSubmitting) return; // 중복 제출 방지

    if (!validateData()) return;

    try {
      setIsSubmitting(true);

      const response = await postRecruitment(postData, resumeImage);
      console.log('response', response);
      if (response.isSuccess) {
        toast.success('이력서가 성공적으로 등록되었습니다.');
        navigate('/career'); // 이력서 목록 페이지로 이동
      } else {
        toast.error('이력서 등록에 실패했습니다. 다시 시도해주세요.');
      }
    } catch (error) {
      toast.error('이력서 등록에 실패했습니다. 다시 시도해주세요.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      <Toaster />
      <div className="w-[1246px] mx-auto mt-[129px] relative">
        {/* 이름 */}
        <div className="font-esamanru text-[24px]">
          ⭐ <span className="text-primary300">홍길동 </span>님의 정보를 알려주세요
        </div>
        {/* 기본정보 */}
        <div className="mt-[70px]">
          <BasicForm setPostData={setPostData} setResumeImage={setResumeImage} />
        </div>

        {/* 경력 */}
        <div className="w-full mt-[160px] flex flex-col items-center">
          <div className="w-[1213px] h-[44px] mx-auto border-b">
            <div className="text-[22px] font-semibold">📌 경력</div>
          </div>
          {postData.careerInfos.map((item, index) => (
            <CareerForm
              key={index}
              index={index}
              setPostData={setPostData}
              careerInfos={postData.careerInfos}
              onDelete={() => handleDeleteCareer(index)}
              canDelete={postData.careerInfos.length > 1}
            />
          ))}
          <div className="mt-[110px]">
            <AddButton text="경력 추가하기" onClick={handleAddCareer} />
          </div>
        </div>

        {/* 프로젝트 */}
        <div className="w-full mt-[160px] flex flex-col items-center">
          <div className="w-[1213px] h-[44px] mx-auto border-b">
            <div className="text-[22px] font-semibold">📌 프로젝트</div>
          </div>
          {postData.portfolioInfos.map((item, index) => (
            <ProjectForm
              key={index}
              index={index}
              setPostData={setPostData}
              portfolioInfos={postData.portfolioInfos}
              onDelete={() => handleDeleteProject(index)}
              canDelete={postData.portfolioInfos.length > 1}
            />
          ))}
          <div className="mt-[110px]">
            <AddButton text="프로젝트 추가하기" onClick={handleAddProject} />
          </div>
        </div>

        {/* 등록 버튼 */}
        <div className="w-[1213px] mx-auto flex flex-row justify-end mt-[204px] mb-[111px]">
          <PrimaryButton
            text={isSubmitting ? '등록 중...' : '등록하기'}
            width="239px"
            height="40px"
            onClick={handleRegister}
            disabled={isSubmitting}
          />
        </div>

        {/* 플로팅 버튼 */}
        <FloatingButton
          style="!fixed bottom-[100px] right-[150px] bg-transparent"
          scrollTop={toTop}
        />
      </div>
    </Layout>
  );
};

export default CareerWrite;
