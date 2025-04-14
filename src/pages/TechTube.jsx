import getTechTube from '@/api/education/getTechTube';
import getTechTubeInfo from '@/api/techtubeDetail/techtubeDetail';
import Layout from '@/common/Layout/Layout';
import FloatingButton from '@/components/common/FloatingButton';
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

  const toTop = () => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
    async function fetchTechTubeList() {
      try {
        //상세 정보
        const data = await getTechTubeInfo(id);
        // 교육정보
        const educationdata = await getTechTube(0, 3, 'LIKES');
        setTechTube(data.data);
        setTechtubeList(educationdata.data.content);
      } catch (error) {
        console.error('Error fetching tech tube:', error);
      }
    }
    fetchTechTubeList();
  }, [id]);

  // 스크롤 맨 위로 이동
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, []);

  return (
    <Layout>
      <div className="relative w-full max-w-[1246px] mx-auto py-10">
        <EducationDetailBanner techTubeInfo={techtube} code={id} />
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
        {/* 플로팅 버튼 */}
        <FloatingButton
          style="!fixed bottom-[100px] right-[150px] bg-transparent"
          scrollTop={toTop}
        />
      </div>
    </Layout>
  );
};

export default TechTube;
