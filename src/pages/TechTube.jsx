import getTechTubeInfo from '@/api/techtubeDetail/techtubeDetail';
import Layout from '@/common/Layout/Layout';
import EducationDetailBanner from '@/components/educationDetail/EducationDetailBanner';
import EducationDetailContent from '@/components/educationDetail/EducationDetailContent';
import EducationPay from '@/components/educationDetail/EducationPay';
import EducationRelatedVideos from '@/components/educationDetail/EducationRelatedVideos';
import useAuthStore from '@/store/useAuthStore';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const TechTube = () => {
  // 좋아요, 결제하기 버튼 상태 테스트
  const [techtube, setTechTube] = useState();
  //로그인하기
  const Islogin = useAuthStore((state) => state.isLoggedIn);
  const { id } = useParams();

  useEffect(() => {
    async function fetchTechTubeList() {
      try {
        const data = await getTechTubeInfo(id);
        setTechTube(data.data);
        console.log('data.data', data.data);
      } catch (error) {
        console.error('Error fetching tech book:', error);
      }
    }
    fetchTechTubeList();
  }, []);

  return (
    <Layout>
      <div className="relative w-full max-w-[1246px] mx-auto py-10">
        <EducationDetailBanner techTubeInfo={techtube} />
        <div className="flex">
          <EducationDetailContent techTubeInfo={techtube} code={id} />
          <div className="mt-[80px] ml-[21px]">
            <EducationPay techTubeInfo={techtube} IsLogin={Islogin} />
            <EducationRelatedVideos />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default TechTube;
