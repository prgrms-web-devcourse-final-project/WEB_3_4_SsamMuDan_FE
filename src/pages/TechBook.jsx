import getTechBook from '@/api/education/getTechBook';
import getTechBookInfo from '@/api/techbookDetail/techbookDetail';
import Layout from '@/common/Layout/Layout';
import FloatingButton from '@/components/common/FloatingButton';
import EducationDetailBookBanner from '@/components/educationDetail/EducationDetailBookBanner';
import EducationDetailBookContent from '@/components/educationDetail/EducationDetailBookContent';
import EducationPay from '@/components/educationDetail/EducationPay';
import EducationRelatedVideos from '@/components/educationDetail/EducationRelatedVideos';
import useAuthStore from '@/store/useAuthStore';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const TechBook = () => {
  // 좋아요, 결제하기 버튼 상태 테스트
  const [techbook, setTechBook] = useState();
  //로그인하기
  const Islogin = useAuthStore((state) => state.isLoggedIn);
  const { id } = useParams();
  const educationType = 'TECH_BOOK';
  const [techbookList, setTechbookList] = useState([]);

  const toTop = () => {
    window.scrollTo({ top: 0, behavior: 'auto' });
    console.log('클릭');
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
    async function fetchTechBookList() {
      try {
        const data = await getTechBookInfo(id);
        const educationdata = await getTechBook(0, 3, 'LIKES');
        setTechbookList(educationdata.data.content);
        console.log('로그인입니다', educationdata.data.content);
        setTechBook(data.data);
      } catch (error) {
        console.error('Error fetching tech book:', error);
      }
    }
    fetchTechBookList();
  }, [id]);
  return (
    <Layout>
      <div className="relative w-full max-w-[1246px] mx-auto py-10">
        <EducationDetailBookBanner techBookInfo={techbook} code={id} />
        <div className="flex">
          <EducationDetailBookContent techBookInfo={techbook} code={id} />
          <div className="mt-[80px] ml-[21px]">
            <EducationPay
              techBookInfo={techbook}
              IsLogin={Islogin}
              id={id}
              educationType={educationType}
            />
            <EducationRelatedVideos techbookList={techbookList} educationType={educationType} />
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

export default TechBook;
