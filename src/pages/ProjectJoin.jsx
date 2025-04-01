import Layout from '@/common/Layout/Layout';
import HeroSection from '@/components/projectJoin/HeroSection';
import HotProject from '@/components/projectJoin/HotProject';
import StackModal from '@/components/common/StackModal';
import PositionModal from '@/components/common/PositionModal';
import PrimarySelect from '@/components/common/PrimarySelect';
import ProjectCardListSection from '@/components/projectJoin/ProjectListSection';
import CustomPagination from '@/components/common/CustomPagination';

const ProjectJoin = () => {
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
  const position = ['전체', '프론트엔드', '벡엔드', '풀스택', 'iOS'];

  const selectList = ['최신순', '높은 평점순'];
  return (
    <>
      <Layout>
        <HeroSection />
        <HotProject />
        {/* 조회 */}
        <div className="w-[1246px] h-[42px] mx-auto flex flex-row justify-between items-center gap-6 mt-[106px] ">
          <div className="flex flex-row justify-between gap-6 ">
            <StackModal data={techStack} />
            <PositionModal position={position} />
          </div>
          <PrimarySelect selectList={selectList} placeholder={'최신순'}></PrimarySelect>
        </div>
        <div className="mt-[31px]">
          <ProjectCardListSection />
        </div>
        <div className="mt-[133px] mb-[164px] w-[1246px] mx-auto">
          <CustomPagination />
        </div>
      </Layout>
    </>
  );
};

export default ProjectJoin;
