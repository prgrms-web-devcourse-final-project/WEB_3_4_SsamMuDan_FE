import Layout from '@/common/Layout/Layout';
import IntroduceSection from '@/components/careerDetail/introduceSection';
import CareerDetailSection from '@/components/careerDetail/CareerDetailSection';
import ProjectDetailSection from '@/components/careerDetail/ProjectDetailSection';
import { Button } from '@/components/ui/button';
import CommentSection from '@/components/careerDetail/CommentSection';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import getCareerDetail from '@/api/careerDetail/getCareerDetail';

const CareerDetail = () => {
  const { id } = useParams();
  const [totalElements, setTotalElements] = useState(0);
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

  const infoFetchData = async () => {
    try {
      const getData = await getCareerDetail();
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
          <div className="w-[1136px] h-[100px] flex flex-row justify-end mx-auto mt-8 ">
            <Button className="bg-primary300">제안하기</Button>
          </div>
        </div>
        {/* 댓글 */}
        <div className="mt-[50px]">
          <CommentSection id={id} totalElements={totalElements} />
        </div>
        <div className="mt-[40px]"></div>
      </Layout>
    </>
  );
};

export default CareerDetail;
