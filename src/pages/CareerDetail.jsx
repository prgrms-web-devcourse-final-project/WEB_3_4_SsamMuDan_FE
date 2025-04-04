import Layout from '@/common/Layout/Layout';
import IntroduceSection from '@/components/careerDetail/introduceSection';
import CareerDetailSection from '@/components/careerDetail/CareerDetailSection';
import ProjectDetailSection from '@/components/careerDetail/ProjectDetailSection';
import { Button } from '@/components/ui/button';
import CommentSection from '@/components/careerDetail/CommentSection';

const CareerDetail = () => {
  return (
    <>
      <Layout>
        {/* 이력서 */}
        <div className="w-[1246px] border mx-auto flex flex-col mt-[68px] rounded-[8px]">
          <IntroduceSection />
          <CareerDetailSection />
          <ProjectDetailSection />
          <div className="w-[1136px] h-[100px] flex flex-row justify-end mx-auto mt-8 ">
            <Button className="bg-primary300">제안하기</Button>
          </div>
        </div>
        {/* 댓글 */}
        <div className="mt-[50px]">
          <CommentSection />
        </div>
        <div className="mt-[40px]"></div>
      </Layout>
    </>
  );
};

export default CareerDetail;
