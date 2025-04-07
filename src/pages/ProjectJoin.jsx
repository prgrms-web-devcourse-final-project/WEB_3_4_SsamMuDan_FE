import Layout from '@/common/Layout/Layout';
import HeroSection from '@/components/projectJoin/HeroSection';
import HotProject from '@/components/projectJoin/HotProject';
import StackModal from '@/components/common/StackModal';
import PositionModal from '@/components/common/PositionModal';
import PrimarySelect from '@/components/common/PrimarySelect';
import ProjectCardListSection from '@/components/projectJoin/ProjectListSection';
import CustomPagination from '@/components/common/CustomPagination';
import { useEffect, useState } from 'react';
import getProjectList from '@/api/projectJoin/getProjectList';

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

  const [selectedPosition, setSelectedPosition] = useState('전체');
  const [selectedTechStack, setSelectedTechStack] = useState([]);
  const [selectedSort, setSelectedSort] = useState('최신순');

  const [projectList, setProjectList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);

  const [page, setPage] = useState(0);

  // 리스트 받아오기
  const fetchProjectList = async () => {
    const projectList = await getProjectList();
    setProjectList(projectList.content);
    setFilteredList(projectList.content);
  };

  // 기술 스택 선택
  const handleTechStackSelect = (selectedStacks) => {
    setSelectedTechStack(selectedStacks);
  };

  // 필터링 로직
  useEffect(() => {
    console.log('Selected Tech Stack:', selectedTechStack);
  }, [selectedTechStack]);

  useEffect(() => {
    fetchProjectList();
  }, []);
  // 스크롤 맨 위로 이동
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, []);
  return (
    <>
      <Layout>
        <HeroSection />
        <HotProject />
        {/* 조회 */}
        <div className="w-[1246px] h-[42px] mx-auto flex flex-row justify-between items-center gap-6 mt-[106px] ">
          <div className="flex flex-row justify-between gap-6 ">
            <StackModal onSelect={handleTechStackSelect} />
            <PositionModal position={position} onSelect={(pos) => setSelectedPosition(pos)} />
          </div>
          <PrimarySelect
            selectList={selectList}
            placeholder={'최신순'}
            onSelect={(sort) => setSelectedSort(sort)}
          />
        </div>
        <div className="mt-[31px]">
          <ProjectCardListSection data={filteredList} />
        </div>
        <div className="mt-[133px] mb-[164px] w-[1246px] mx-auto">
          <CustomPagination />
        </div>
      </Layout>
    </>
  );
};

export default ProjectJoin;
