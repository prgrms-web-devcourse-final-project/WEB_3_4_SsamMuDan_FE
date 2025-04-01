import EducationBanner from '@/components/education/EducationBanner';
import Layout from '../common/Layout/Layout';
import CategoryTab from '@/components/common/CategoryTab';
import SearchBar from '@/components/common/SearchBar';
import PrimarySelect from '@/components/common/PrimarySelect';
import LectureCard from '@/common/LectureCard';
import CustomPagination from '@/components/common/CustomPagination';

const Education = () => {
  return (
    <Layout>
      <EducationBanner />
      <div className="max-w-[1246px] mx-auto">
        <div className="mb-[85px]">
          <CategoryTab cateColor={'#ee5945'} tabs={['TechTube', 'TechBook']} />
        </div>
        <div className="flex  justify-between mb-[41px]">
          <div className="font-medium text-[36px]">검색한 강의</div>
          <div className="flex">
            <SearchBar style="mr-[47px]" />
            <PrimarySelect
              selectList={['최신순', '좋아요순']}
              placeholder="최신순"
              customstyle="h-[46px]"
            />
          </div>
        </div>
        <div className="grid grid-cols-4 gap-[17px]">
          {Array(16)
            .fill(null)
            .map((_, index) => (
              <LectureCard
                title="React 완벽 마스터: 기초 개념부터 린캔버스 프로젝트까지"
                instructor="김코딩"
                likes="77"
                price="16,800"
                imageUrl="/images/education-image1.png"
              />
            ))}
        </div>
        <CustomPagination style="mt-[67px]" />
        <img src="/images/education-ad.png" alt="교육" className="mt-[117px] mb-[143px]" />
      </div>
    </Layout>
  );
};

export default Education;
