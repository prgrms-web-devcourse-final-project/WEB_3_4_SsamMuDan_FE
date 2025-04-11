import Loading from '@/components/common/Loading';
import PrimarySelect from '@/components/common/PrimarySelect';
import SearchBar from '@/components/common/SearchBar';
import CommunityFloating from '@/components/communityDetail/CommunityFloating';
import EducationPay from '@/components/educationDetail/EducationPay';
import EducationRelatedVideos from '@/components/educationDetail/EducationRelatedVideos';
import ReactPlayer from 'react-player';

const JongHee = () => {
  const selectList = ['최신순', '높은 평점순'];
  return (
    <div className="mx-auto mt-[100px]">
      <div className="font-esamanru font-esamanru-bold text-[25px]">테스트</div>
      <PrimarySelect selectList={selectList} placeholder={'최신 순'}></PrimarySelect>
      <SearchBar />
      <EducationPay />
      <EducationRelatedVideos />
      <CommunityFloating type="modify" />
      <ReactPlayer
        url="https://baekgwa-test-bucket.s3.ap-northeast-2.amazonaws.com/education/techtube/main/e13bd6b9-6e05-4aa3-87f5-2c0b59e157c6/24_03_10__p_13442__1%EA%B0%95__%EC%9E%90%EB%B0%94_%EA%B8%B0%EC%B4%88%EA%B0%95%EC%9D%98_%EC%8B%9C%EC%9E%91%ED%95%A9%EB%8B%88%EB%8B%A4__%EC%9D%B8%ED%85%94%EB%A6%AC%EC%A0%9C%EC%9D%B4_%EC%BB%A4%EB%AE%A4%EB%8B%88%ED%8B%B0_%EC%84%A4%EC%B9%98_%EB%B0%8F_%EC%84%B8%ED%8C%85%EB%B2%95%EC%9D%80_slog.gg_p_13445_%EC%97%90%EC%84%9C_%ED%99%95%EC%9D%B8.mp4"
        controls
      />
      <Loading />
    </div>
  );
};

export default JongHee;
