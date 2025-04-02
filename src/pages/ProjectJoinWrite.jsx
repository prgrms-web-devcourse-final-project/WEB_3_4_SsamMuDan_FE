import Layout from '@/common/Layout/Layout';
import ProjectInfoForm from '@/components/projectJoinWrite/ProjectInfoForm';

const ProjectJoinWrite = () => {
  return (
    <>
      <Layout>
        <div className="w-[1246px] mx-auto mt-[129px] relative">
          {/* 이름 */}
          <div className="font-esamanru text-[24px]">
            <span className="text-primary300">프로젝트 생성 </span>
          </div>
          {/* 기본정보 */}
          <div className="mt-[82px]">
            <ProjectInfoForm />
          </div>

          {/* 등록 버튼 */}
          {/* <div className="w-[1213px] mx-auto flex flex-row justify-end mt-[204px] mb-[111px]">
            <PrimaryButton text="등록하기" width="239px" height="40px" />
          </div> */}
        </div>
      </Layout>
    </>
  );
};

export default ProjectJoinWrite;
