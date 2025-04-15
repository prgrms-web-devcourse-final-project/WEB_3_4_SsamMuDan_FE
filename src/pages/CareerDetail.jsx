import Layout from '@/common/Layout/Layout';
import IntroduceSection from '@/components/careerDetail/IntroduceSection';
import CareerDetailSection from '@/components/careerDetail/CareerDetailSection';
import ProjectDetailSection from '@/components/careerDetail/ProjectDetailSection';
import { Button } from '@/components/ui/button';
import CommentSection from '@/components/careerDetail/CommentSection';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import getCareerDetail from '@/api/careerDetail/getCareerDetail';
import useAuthStore from '@/store/useAuthStore';

const CareerDetail = () => {
  const { userInfo } = useAuthStore();
  const { id } = useParams();
  const category = 'RESUME';
  const [introduceData, setIntroduceData] = useState({
    name: '',
    imageUrl: '',
    positionNames: [],
    years: '',
    email: '',
    introduction: '',
  });

  const [careerData, setCareerData] = useState({});
  const [projectData, setProjectData] = useState({});

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const infoFetchData = async () => {
    try {
      const getData = await getCareerDetail(id);
      setIntroduceData(getData.basicInfoResponse);
      setCareerData(getData.careerInfos);
      setProjectData(getData.portfolioInfos);
    } catch (error) {
      console.error('Error fetching tech stack options:', error);
    }
  };

  useEffect(() => {
    infoFetchData();
  }, []);

  return (
    <>
      <Layout>
        {/* 이력서 */}
        <div className="w-[1246px] border mx-auto flex flex-col mt-[68px] rounded-[8px]">
          <IntroduceSection data={introduceData} />
          <CareerDetailSection data={careerData} />
          <ProjectDetailSection data={projectData} />
          {userInfo?.role === 'HUNTER' && (
            <div className="w-[1136px] h-[100px] flex flex-col justify-center items-end mx-auto mt-8 gap-2">
              <Button className="bg-primary300">제안하기</Button>
              <span className="text-gray-500">(추후 개발 예정)</span>
            </div>
          )}
        </div>
        {/* 댓글 */}
        <div className="mt-[50px]">
          <CommentSection id={id} category={category} />
        </div>
        <div className="mt-[40px]"></div>
      </Layout>
    </>
  );
};

export default CareerDetail;
