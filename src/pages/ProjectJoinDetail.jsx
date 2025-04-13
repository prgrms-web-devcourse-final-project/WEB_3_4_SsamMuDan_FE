import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import getProjectDetail from '@/api/projectJoin/getProjectDetail';

import Layout from '@/common/Layout/Layout';
import ProjectIntroduce from '@/components/ProjectDetail/ProjectIntroduce';
import PositionSection from '@/components/ProjectDetail/PositionSection';
import ProjectStack from '@/components/ProjectDetail/ProjectStack';
import FindPeople from '@/components/ProjectDetail/FindPeople';
import ProjectFloating from '@/components/ProjectDetail/ProjectFloating';
import useAuthStore from '@/store/useAuthStore';
import postProjectLike from '@/api/projectJoin/postProjectLike';
import deleteProjectLike from '@/api/projectJoin/deleteProjectLike';

const ProjectJoinDetail = () => {
  const { id } = useParams(); // URL에서 projectId 추출
  const projectId = Number(id);
  const [data, setData] = useState(null);
  const [isOpen, setIsOpen] = useState(null);

  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);
  const navigate = useNavigate();

  // 좋아요 토글 함수
  const handleLikeToggle = async () => {
    if (!isLoggedIn) {
      alert('로그인이 필요합니다.');
      navigate('/login');
      return;
    }

    try {
      if (isLiked) {
        await deleteProjectLike({ itemId: projectId });
        setIsLiked(false);
        setLikeCount((prev) => prev - 1);
      } else {
        await postProjectLike({ itemId: projectId });
        setIsLiked(true);
        setLikeCount((prev) => prev + 1);
      }
    } catch (err) {
      alert('좋아요 처리 중 오류가 발생했습니다.');
      console.error(err);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const detail = await getProjectDetail(id);
        setData(detail);
        setIsLiked(detail.isLiked ?? false);
        setLikeCount(detail.likeCount);
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
        <PositionSection
          devPositionsInfo={data.devPositionsInfo}
          isOwner={data.isOwner}
          projectId={projectId}
        />
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
            text={isOpen ? '모집마감' : '모집중'}
            type="status"
            style={`${
              isOpen ? '!bg-[#C4C4C4] !border-[#C4C4C4]' : '!bg-primary300 !border-primary300'
            }`}
          />
          <ProjectFloating text={data.viewCount} type="viwer" />
          <ProjectFloating
            text={likeCount}
            type="like"
            isLiked={isLiked}
            onClick={handleLikeToggle}
          />
        </div>
      </div>
    </Layout>
  );
};

export default ProjectJoinDetail;
