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
import ProjectPositionModal from '@/components/projectJoin/projectPositionModal';

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

  const selectList = {
    최신순: 'LATEST',
    조회순: 'VIEW',
  };

  const [selectedPosition, setSelectedPosition] = useState([]);
  const [selectedTechStack, setSelectedTechStack] = useState([]);
  const [selectedSort, setSelectedSort] = useState('최신순');

  const [projectList, setProjectList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);

  const [totalElements, setTotalElements] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 16;
  const [page, setPage] = useState(0);

  // 리스트 받아오기
  const fetchProjectList = async () => {
    const projectList = await getProjectList(selectedTechStack, selectedPosition);
    setProjectList(projectList.content);
    setFilteredList(projectList.content);
    setTotalElements(projectList.totalElements);
  };

  // 기술 스택 선택
  const handleTechStackSelect = (selectedStacks) => {
    console.log('선택된 기술 스택:', selectedStacks);
    setSelectedTechStack(selectedStacks);
  };

  // 정렬 함수
  const sortProjects = (projects, sortType) => {
    const sortedProjects = [...projects];
    if (sortType === '최신순') {
      sortedProjects.sort((a, b) => new Date(b.startDate) - new Date(a.startDate));
    } else if (sortType === '조회순') {
      sortedProjects.sort((a, b) => b.viewCount - a.viewCount);
    }
    return sortedProjects;
  };

  // 정렬 상태가 변경될 때마다 프로젝트 목록 정렬
  useEffect(() => {
    const sortedProjects = sortProjects(projectList, selectedSort);
    setFilteredList(sortedProjects);
  }, [selectedSort, projectList]);

  // 기술 스택이나 페이지가 변경될 때마다 프로젝트 목록 다시 불러오기
  useEffect(() => {
    console.log('기술 스택 변경 감지:', selectedTechStack);
    fetchProjectList();
  }, [selectedTechStack, page, selectedPosition]);

  // 초기 프로젝트 목록 불러오기
  useEffect(() => {
    fetchProjectList();
  }, []);

  useEffect(() => {
    console.log('selectedPosition', selectedPosition);
  }, [selectedPosition]);

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
            <ProjectPositionModal onSelect={setSelectedPosition} />
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
          <CustomPagination
            totalElements={totalElements}
            itemsPerPage={itemsPerPage}
            currentPage={currentPage + 1}
          />
        </div>
      </Layout>
    </>
  );
};

export default ProjectJoin;
