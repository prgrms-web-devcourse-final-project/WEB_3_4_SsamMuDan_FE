import Layout from '@/common/Layout/Layout';
import CareerHeroSection from '@/components/career/CareerHeroSection';
import ProfileAd from '@/components/career/ProfileAd';
import StackModal from '@/components/common/StackModal';
// import PositionModal from '@/components/common/PositionModal';
import ProjectPositionModal from '@/components/projectJoin/projectPositionModal';
import HistoryModal from '@/components/career/HistoryModal';
// import PrimarySelect from '@/components/common/PrimarySelect';
import DateSelect from '@/components/career/DateSelect';
import CardList from '@/components/career/CardList';
import CustomPagination from '@/components/common/CustomPagination';
import getCareerInfo from '@/api/career/getCareerInfo';
import { useEffect, useState } from 'react';

const Career = () => {
  const [careerInfo, setCareerInfo] = useState([]);
  const [filteredCareerInfo, setFilteredCareerInfo] = useState([]);
  const [sortOption, setSortOption] = useState('LATEST');
  const [selectedSort, setSelectedSort] = useState('최신순');

  const [techStack, setTechStack] = useState([]);
  const [position, setPosition] = useState([]);
  const [history, setHistory] = useState([]);

  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 16; // 한 페이지당 보여줄 아이템 수

  const fetchCareerInfo = async () => {
    const res = await getCareerInfo(currentPage, techStack, position, history, sortOption);
    setCareerInfo(res.data.content);
    setFilteredCareerInfo(res.data.content);
    setTotalPages(res.data.totalPages);
  };

  useEffect(() => {
    fetchCareerInfo();
    console.log(techStack, position, history, sortOption);
  }, [techStack, position, history, sortOption, currentPage]);

  const handleSortChange = (selectedValue) => {
    setSortOption(selectedValue);
    setSelectedSort(selectList.find((item) => item.value === selectedValue)?.label || '최신순');
  };

  const selectList = [
    { label: '최신순', value: 'LATEST' },
    { label: '조회순', value: 'VIEW' },
  ];

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage - 1);
  };

  // 스크롤 맨 위로 이동
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, []);
  return (
    <>
      <Layout>
        <div className="w-[1246px] mx-auto mt-[47px]">
          <CareerHeroSection />
          <div className="mt-[25px]">
            <ProfileAd />
          </div>
          <div className="w-full  flex flex-row justify-between items-center gap-6 mt-[106px] ">
            <div className="flex flex-row justify-between gap-6 ">
              <StackModal data={techStack} onSelect={setTechStack} />
              <ProjectPositionModal onSelect={setPosition} />
              <HistoryModal data={history} onApply={setHistory} />
            </div>
            <DateSelect
              customstyle="h-[46px]"
              selectList={selectList}
              placeholder={'최신순'}
              onSortChange={handleSortChange}
              value={sortOption}
            />
          </div>
          <div className="mt-[72px]">
            <CardList careerInfo={filteredCareerInfo} />
          </div>
          <div className="w-full mx-auto mt-[103px] mb-[152px]">
            <CustomPagination
              totalPages={totalPages}
              currentPage={currentPage + 1}
              onChangePage={handlePageChange}
            />
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Career;
