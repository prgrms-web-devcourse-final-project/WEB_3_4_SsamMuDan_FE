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
            <EducationPay techBookInfo={techtube} IsLogin={Islogin} />
            <EducationRelatedVideos />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default TechTube;

avgRating: 3.6;
createdAt: '2025-04-03T09:19:46';
description: 'else 를 사용하면 여러 if 문들을 하나의 그룹으로 묶을 수 있다.';
durationSeconds: 243;
educationCategoryList: ['프로그래밍 언어'];
educationLevel: '입문';
introduction: '# else 를 사용하면 여러 if 문들을 하나의 그룹으로 묶을 수 있다\\n##강의 소개\\n이번 강의에서는 조건 분기를 처리할 때 사용하는 `else` 키워드의 역할과 `if-else` 문을 그룹화하는 방법을 설명합니다.\\n자바에서 `else`는 앞선 `if` 조건이 거짓일 때 실행될 코드를 지정하며, 여러 조건을 연결하여 하나의 흐름으로 묶을 수 있게 해줍니다.\\n이 구조는 복잡한 조건 분기 로직을 명확하게 구성할 수 있게 도와줍니다.\\n\\n##주요 내용 요약\\n- `if`는 조건이 참일 때 실행\\n- `else`는 앞선 `if`가 거짓일 때 실행되는 블록\\n- `if`와 `else`를 함께 쓰면 한 그룹처럼 동작\\n- 여러 개의 조건이 있을 경우 `else if`를 활용하여 다단계 분기 가능\\n- 모든 조건이 거짓일 때 실행할 코드는 마지막 `else`에 작성\\n\\n-중요내용: `else`를 사용하면 `if`와 함께 하나의 논리 그룹으로 묶을 수 있어, 조건 분기 흐름을 명확하게 만들 수 있음\n';
isLike: false;
isPaymentDone: true;
likeCount: 7;
price: 3000;
techTubeUrl: 'https://devcouse4-team15-bucket.s3.ap-northeast-2.amazonaws.com/education/techtube/main/9f8e7d6c-5b4a-3210-fedc-ba9876543210/21강__else_를_사용하면_여러_if_문들을_하나의_그룹으로_묶을_수_있다..mp4';
thumbnailUrl: 'https://devcouse4-team15-bucket.s3.ap-northeast-2.amazonaws.com/education/techtube/thumbnail/9f8e7d6c-5b4a-3210-fedc-ba9876543210/21강__else_를_사용하면_여러_if_문들을_하나의_그룹으로_묶을_수_있다..jpg';
title: 'else 를 사용하면 여러 if 문들을 하나의 그룹으로 묶을 수 있다.';
totalReviewCount: 5;
viewCount: 90;
writer: '다크팬텀';
