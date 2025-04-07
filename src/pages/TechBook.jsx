import getTechBookInfo from '@/api/techbookDetail/techbookDetail';
import Layout from '@/common/Layout/Layout';
import EducationDetailBookBanner from '@/components/educationDetail/EducationDetailBookBanner';
import EducationDetailBookContent from '@/components/educationDetail/EducationDetailBookContent';
import EducationPay from '@/components/educationDetail/EducationPay';
import EducationRelatedVideos from '@/components/educationDetail/EducationRelatedVideos';
import { useEffect, useState } from 'react';

const TechBook = () => {
  // 좋아요, 결제하기 버튼 상태 테스트
  const [liked, setLiked] = useState(false);
  const [isPaid, setIsPaid] = useState(false);
  const [techbook, setTechBook] = useState();

  console.log(getTechBookInfo());

  useEffect(() => {
    async function fetchTechBookList() {
      try {
        const data = await getTechBookInfo();
        setTechBook(data.data);
      } catch (error) {
        console.error('Error fetching tech book:', error);
      }
    }
    fetchTechBookList();
  }, []);

  return (
    <Layout>
      <div className="relative w-full max-w-[1246px] mx-auto py-10">
        <EducationDetailBookBanner techBookInfo={techbook} />
        <div className="flex">
          <EducationDetailBookContent techBookInfo={techbook} />
          <div className="mt-[80px] ml-[21px]">
            <EducationPay techInfo={techbook} />
            <EducationRelatedVideos />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default TechBook;
