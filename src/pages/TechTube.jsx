import getTechTube from '@/api/education/getTechTube';
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
  const educationType = 'TECH_TUBE';
  const [techtubeList, setTechtubeList] = useState([]);

  useEffect(() => {
    async function fetchTechTubeList() {
      try {
        //상세 정보
        const data = await getTechTubeInfo(id);
        // 교육정보
        const educationdata = await getTechTube(0, 3, 'LIKES');
        setTechTube(data.data);
        setTechtubeList(educationdata.data.content);
        console.log('data.data', data.data);
      } catch (error) {
        console.error('Error fetching tech tube:', error);
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
            <EducationPay
              techBookInfo={techtube}
              IsLogin={Islogin}
              id={id}
              educationType={educationType}
            />
            <EducationRelatedVideos techtubeList={techtubeList} educationType={educationType} />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default TechTube;
