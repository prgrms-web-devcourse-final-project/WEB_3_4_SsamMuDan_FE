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
import { useLocation } from 'react-router-dom';

const ProjectJoin = () => {
  const dateSelectList = [
    { label: '최신순', value: 'createdAt' },
    { label: '좋아요순', value: 'like' },
  ];

  const [selectedPosition, setSelectedPosition] = useState([]);
  const [selectedTechStack, setSelectedTechStack] = useState([]);
  const [selectedSort, setSelectedSort] = useState('createdAt');

  const location = useLocation();
  const [projectList, setProjectList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [totalPages, setTotalPages] = useState(0);

  // 페이지 번호 저장을 위해 세션에서 불러오거나 0으로 초기화
  const [currentPage, setCurrentPage] = useState(() => {
    const saved = sessionStorage.getItem('projectPage');
    return saved !== null ? Number(saved) : 0;
  });

  const itemsPerPage = 16;

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage - 1);
  };

  // 페이지 번호를 세션스토리지에 저장
  useEffect(() => {
    sessionStorage.setItem('projectPage', String(currentPage));
  }, [currentPage]);

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

  const handleTechStackSelect = (selectedStacks) => {
    setSelectedTechStack(selectedStacks);
    setCurrentPage(0); // 필터 바뀌면 초기화
  };

  useEffect(() => {
    console.log('페이지 변경 감지:', currentPage);
    fetchProjectList();
  }, [currentPage, selectedTechStack, selectedPosition, selectedSort]);

  useEffect(() => {
    console.log('selectedPosition', selectedPosition);
  }, [selectedPosition]);

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
