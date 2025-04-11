import Layout from '@/common/Layout/Layout';
import HeroSection from '@/components/projectJoin/HeroSection';
import HotProject from '@/components/projectJoin/HotProject';
import StackModal from '@/components/common/StackModal';
import DateSelect from '@/components/career/DateSelect';
import ProjectCardListSection from '@/components/projectJoin/ProjectListSection';
import CustomPagination from '@/components/common/CustomPagination';
import { useEffect, useState } from 'react';
import getProjectList from '@/api/projectJoin/getProjectList';
import ProjectPositionModal from '@/components/projectJoin/projectPositionModal';

const ProjectJoin = () => {
  const dateSelectList = [
    { label: '최신순', value: 'createdAt' },
    { label: '좋아요순', value: 'like' },
  ];

  const [selectedPosition, setSelectedPosition] = useState([]);
  const [selectedTechStack, setSelectedTechStack] = useState([]);
  const [selectedSort, setSelectedSort] = useState('createdAt');

  const [projectList, setProjectList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 16;

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage - 1);
  };

  // 리스트 받아오기
  const fetchProjectList = async () => {
    const projectList = await getProjectList(
      selectedTechStack,
      selectedPosition,
      currentPage,
      itemsPerPage,
      selectedSort,
    );
    setProjectList(projectList.content);
    setFilteredList(projectList.content);
    setTotalPages(projectList.totalPages);
  };

  // 기술 스택 선택
  const handleTechStackSelect = (selectedStacks) => {
    setSelectedTechStack(selectedStacks);
    setCurrentPage(0); // 기술 스택이 변경되면 첫 페이지로 이동
  };

  // 정렬 상태가 변경될 때마다 프로젝트 목록 다시 불러오기
  useEffect(() => {
    console.log('페이지 변경 감지:', currentPage);
    fetchProjectList();
  }, [currentPage, selectedTechStack, selectedPosition, selectedSort]);

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
  }, [currentPage]);

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
          <DateSelect
            customstyle="w-[120px] h-[42px]"
            selectList={dateSelectList}
            placeholder="최신순"
            onSortChange={setSelectedSort}
            value={selectedSort}
          />
        </div>
        <div className="mt-[31px]">
          <ProjectCardListSection data={filteredList} />
        </div>
        <div className="mt-[133px] mb-[164px] w-[1246px] mx-auto">
          <CustomPagination
            totalPages={totalPages}
            currentPage={currentPage + 1}
            onChangePage={handlePageChange}
          />
        </div>
      </Layout>
    </>
  );
};

export default ProjectJoin;
