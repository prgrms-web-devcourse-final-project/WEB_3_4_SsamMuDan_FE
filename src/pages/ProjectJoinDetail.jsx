import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import getProjectDetail from '@/api/projectJoin/getProjectDetail';

import Layout from '@/common/Layout/Layout';
import ProjectIntroduce from '@/components/ProjectDetail/ProjectIntroduce';
import PositionSection from '@/components/ProjectDetail/PositionSection';
import ProjectStack from '@/components/ProjectDetail/ProjectStack';
import FindPeople from '@/components/ProjectDetail/FindPeople';
import ProjectFloating from '@/components/ProjectDetail/ProjectFloating';

const ProjectJoinDetail = () => {
  const { id } = useParams(); // URL에서 projectId 추출
  const [data, setData] = useState(null);
  const [isOpen, setIsOpen] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const detail = await getProjectDetail(id);
        setData(detail);
        setIsOpen(detail.isOpen); // 초기값 세팅
      } catch (error) {
        console.error('상세 조회 실패:', error);
      }
    };

    fetchData();
  }, [id]);

  // 로딩 중이거나 데이터가 없으면 렌더링 X
  if (!data) {
    return <div className="text-center mt-20">로딩 중입니다...</div>;
  }

  return (
    <Layout>
      <div className="w-[1246px] border mx-auto flex flex-col mt-[68px] rounded-[8px] mb-[55px] relative">
        <ProjectIntroduce data={data} />
        <PositionSection devPositionsInfo={data.devPositionsInfo} isOwner={data.isOwner} />
        <ProjectStack techStacks={data.techStacks} />
        <FindPeople
          partnerType={data.partnerType}
          isOwner={data.isOwner}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          projectId={id}
        />
        {/* 플로팅 뱃지 */}
        <div className="fixed top-[300px] right-[100px] max-w-[800px] z-50">
          <ProjectFloating
            text={isOpen ? '모집중' : '모집마감'}
            type="status"
            style={`${
              isOpen ? '!bg-primary300 !border-primary300' : '!bg-[#C4C4C4] !border-[#C4C4C4]'
            }`}
          />
          <ProjectFloating text={data.viewCount} type="viwer" />
          <ProjectFloating text={data.likeCount} type="like" />
        </div>
      </div>
    </Layout>
  );
};

export default ProjectJoinDetail;
