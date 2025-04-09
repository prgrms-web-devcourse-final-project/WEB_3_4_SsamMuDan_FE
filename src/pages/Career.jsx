import Layout from '@/common/Layout/Layout';
import CareerHeroSection from '@/components/career/CareerHeroSection';
import ProfileAd from '@/components/career/ProfileAd';
import StackModal from '@/components/common/StackModal';
import PositionModal from '@/components/common/PositionModal';
import HistoryModal from '@/components/career/HistoryModal';
import PrimarySelect from '@/components/common/PrimarySelect';
import CardList from '@/components/career/CardList';
import CustomPagination from '@/components/common/CustomPagination';
import getCareerInfo from '@/api/career/getCareerInfo';
import { useEffect, useState } from 'react';

const Career = () => {
  getCareerInfo();

  const [careerInfo, setCareerInfo] = useState([]);
  const [filteredCareerInfo, setFilteredCareerInfo] = useState([]);
  const [sortOption, setSortOption] = useState('최신순');

  const [techStack, setTechStack] = useState([]);
  const [position, setPosition] = useState([]);
  const [history, setHistory] = useState([]);

  const [totalElements, setTotalElements] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 16; // 한 페이지당 보여줄 아이템 수

  useEffect(() => {
    const fetchCareerInfo = async () => {
      const res = await getCareerInfo(currentPage);
      setCareerInfo(res.data.content);
      setFilteredCareerInfo(res.data.content);
      setTotalElements(res.data.totalElements);
    };
    fetchCareerInfo();
  }, [currentPage]);

  useEffect(() => {
    console.log(history);
  }, [history]);

  const normalizeStr = (str) => str?.toLowerCase().trim().normalize(); // Unicode 정규화(NFC)로 문자열 비교

  useEffect(() => {
    if (!careerInfo) return;
    console.log(careerInfo);
    let filteredCareerInfo = [...careerInfo];

    // 기술 스택과 직무 필터링을 동시에 적용
    if (techStack.length > 0 || (position.length > 0 && !position.includes('전체')) || history) {
      filteredCareerInfo = filteredCareerInfo.filter((item) => {
        // 기술 스택 조건
        const techStackMatch =
          techStack.length === 0 ||
          (item.tackStacksId && techStack.some((techId) => item.tackStacksId.includes(techId)));

        // 직무 조건 - positions가 배열이므로 includes로 비교
        const positionMatch =
          position.length === 0 ||
          position.includes('전체') ||
          position.some((posId) =>
            item.positions.some((itemPos) => normalizeStr(itemPos) === normalizeStr(posId)),
          );

        // 경력 범위 조건
        const careerMatch = !history || (item.year >= history[0] && item.year <= history[1]);

        // 모든 조건이 만족해야 함
        return techStackMatch && positionMatch && careerMatch;
      });
    }

    setFilteredCareerInfo(filteredCareerInfo);
  }, [techStack, position, history]);

  const sortCareerData = (data, option) => {
    if (!data) return data;

    const sortedData = [...data];
    switch (option) {
      case '최신순':
        return sortedData.sort((a, b) => new Date(b.createAt) - new Date(a.createAt));
      case '좋아요순':
        return sortedData.sort((a, b) => new Date(a.createAt) - new Date(b.createAt));
      default:
        return sortedData;
    }
  };

  useEffect(() => {
    const sortedData = sortCareerData(filteredCareerInfo, sortOption);
    console.log(filteredCareerInfo);
    setFilteredCareerInfo(sortedData);
  }, [sortOption]);

  const selectList = {
    최신순: 'LATEST',
    좋아요순: 'LIKES',
  };

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
              <PositionModal onSelect={setPosition} />
              <HistoryModal data={history} onApply={setHistory} />
            </div>
            <PrimarySelect
              selectList={selectList}
              placeholder={'최신순'}
              onSelect={setSortOption}
            ></PrimarySelect>
          </div>
          <div className="mt-[72px]">
            <CardList careerInfo={filteredCareerInfo} />
          </div>
          <div className="w-full mx-auto mt-[103px] mb-[152px]">
            <CustomPagination
              totalItems={totalElements}
              itemsPerPage={itemsPerPage}
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
