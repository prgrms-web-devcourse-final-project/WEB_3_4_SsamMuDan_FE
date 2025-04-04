import Layout from '@/common/Layout/Layout';
import CareerHeroSection from '@/components/career/CareerHeroSection';
import ProfileAd from '@/components/career/ProfileAd';
import StackModal from '@/components/common/StackModal';
import PositionModal from '@/components/common/PositionModal';
import HistoryModal from '@/components/career/HistoryModal';
import PrimarySelect from '@/components/common/PrimarySelect';
import CardList from '@/components/career/CardList';
import CustomPagination from '@/components/common/CustomPagination';
import getCareerInfo from '@/api/career/getCareerInfo';
import { NavLink } from 'react-router-dom';
import { useEffect } from 'react';

const Career = () => {
  getCareerInfo();

  const techStack = [
    'Python',
    'SpringFramework',
    'AWS',
    'Git',
    'iOS',
    'HTML',
    'JavaScript',
    'MySQL',
    'SQL',
  ];

  const selectList = ['최신순', '높은 평점순'];

  // 스크롤 맨 위로 이동
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, []);
  return (
    <>
      <Layout>
        <div className="w-[1246px] mx-auto mt-[47px]">
          <CareerHeroSection />
          <div className="mt-[25px]">
            <ProfileAd />
          </div>
          <div className="w-full  flex flex-row justify-between items-center gap-6 mt-[106px] ">
            <div className="flex flex-row justify-between gap-6 ">
              <StackModal data={techStack} />
              <PositionModal />
              <HistoryModal />
            </div>
            <PrimarySelect selectList={selectList} placeholder={'최신순'}></PrimarySelect>
          </div>
          <div className="mt-[72px]">
            <CardList />
          </div>
          <div className="w-full mx-auto mt-[103px] mb-[152px]">
            <CustomPagination />
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Career;
