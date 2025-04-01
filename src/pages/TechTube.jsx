import Layout from '@/common/Layout/Layout';
import EducationDetailBanner from '@/components/educationDetail/EducationDetailBanner';
import EducationDetailContent from '@/components/educationDetail/EducationDetailContent';
import EducationPay from '@/components/educationDetail/EducationPay';
import EducationRelatedVideos from '@/components/educationDetail/EducationRelatedVideos';
import { useState } from 'react';

const TechTube = () => {
  // 좋아요, 결제하기 버튼 상태 테스트
  const [liked, setLiked] = useState(false);
  const [isPaid, setIsPaid] = useState(false);

  return (
    <Layout>
      <div className="relative w-full max-w-[1246px] mx-auto py-10">
        <EducationDetailBanner />
        <div className="flex">
          <EducationDetailContent />
          <div className="mt-[80px] ml-[21px]">
            <EducationPay />
            <EducationRelatedVideos />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default TechTube;
