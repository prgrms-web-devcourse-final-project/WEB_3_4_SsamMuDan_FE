import Layout from '../common/Layout/Layout';
import HeroLeft from '@/components/main/HereLeft';
import HeroRight from '@/components/main/HeroRigth';
import CategorySection from '@/components/main/CategorySection';
import TechTubeSection from '@/components/main/TechTubeSection';
import TechBookSection from '@/components/main/TechBookSection';
import CareerSection from '@/components/main/CareerSection';
import ProjectSection from '@/components/main/ProjectSection';
import CommunitySection from '@/components/main/CommunitySection';

const Main = () => {
  return (
    <>
      <Layout className="">
        {/* 히어로 섹션 */}
        <div className="w-full h-[580px] flex flex-row items-center justify-end ">
          <HeroLeft />
          <HeroRight />
        </div>
        <div className="w-[1246px] mx-auto">
          <CategorySection />
          <TechTubeSection />
          <div className="">
            <TechBookSection />
          </div>
        </div>
        <div className="mt-[97px]">
          <CareerSection />
        </div>
        <div className="mt-[124px]">
          <ProjectSection />
        </div>
        <div className="mt-[130px]">
          <CommunitySection />
        </div>
      </Layout>
    </>
  );
};

export default Main;
