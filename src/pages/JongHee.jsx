import PrimarySelect from '@/components/common/PrimarySelect';
import SearchBar from '@/components/common/SearchBar';
import CommunityFloating from '@/components/communityDetail/CommunityFloating';
import EducationPay from '@/components/educationDetail/educationPay';
// import PdfViewer from '@/components/educationDetail/EducationPdf';
import EducationRelatedVideos from '@/components/educationDetail/EducationRelatedVideos';

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
    </div>
  );
};

export default JongHee;
