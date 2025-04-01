import Layout from '@/common/Layout/Layout';
import ProjectIntroduce from '@/components/ProjectDetail/ProjectIntroduce';
import PositionSection from '@/components/ProjectDetail/PositionSection';
import ProjectStack from '@/components/ProjectDetail/ProjectStack';
import FindPeople from '@/components/ProjectDetail/FindPeople';

const ProjectJoinDetail = () => {
  return (
    <>
      <Layout>
        {/* 이력서 */}
        <div className="w-[1246px] border mx-auto flex flex-col mt-[68px] rounded-[8px] mb-[55px]">
          <ProjectIntroduce />
          <PositionSection />
          <ProjectStack />
          <FindPeople />
        </div>
      </Layout>
    </>
  );
};

export default ProjectJoinDetail;
