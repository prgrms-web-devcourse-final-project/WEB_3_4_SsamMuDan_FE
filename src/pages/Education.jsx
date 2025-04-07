import EducationBanner from '@/components/education/EducationBanner';
import Layout from '../common/Layout/Layout';
import CategoryTab from '@/components/common/CategoryTab';
import SearchBar from '@/components/common/SearchBar';
import PrimarySelect from '@/components/common/PrimarySelect';
import LectureCard from '@/common/LectureCard';
import CustomPagination from '@/components/common/CustomPagination';
import { motion } from 'framer-motion';

import { useEffect, useState } from 'react';
import { NavLink, useSearchParams } from 'react-router-dom';
import getTechBook from '@/api/education/getTechBook';
import getTechTube from '@/api/education/getTechTube';

const Education = () => {
  const tabs = [
    { label: 'TechTube', value: 'techtube' },
    { label: 'TechBook', value: 'techbook' },
  ];

  const [searchParams, setSearchParams] = useSearchParams();
  const [techbookList, setTechBookList] = useState([]);
  // const [sortOption, setSortOption] = useState('LATEST');
  const [totalList, setTotalList] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const keyword = searchParams.get('keyword') || '';
  const page = Number(searchParams.get('page')) || 0;
  const category = searchParams.get('category') || 'techtube';
  const sortOption = searchParams.get('sort') || 'LATEST';
  const sortName = {
    최신순: 'LATEST',
    좋아요순: 'LIKES',
  };

  // 탭 변경 핸들러
  const handleTabChange = (tabValue) => {
    const newParams = new URLSearchParams(searchParams);
    newParams.set('category', tabValue);
    newParams.set('page', '0');
    newParams.delete('keyword');

    setSearchParams(newParams);
  };

  // 검색 핸들러
  const handleSearchChange = (input) => {
    const newParams = new URLSearchParams(searchParams);
    newParams.set('keyword', input.trim());
    newParams.set('page', '0');
    setSearchParams(newParams);
  };

  //페이지네이션 핸들러
  const handlepagination = (newPage) => {
    const newParams = new URLSearchParams(searchParams);
    newParams.set('page', String(newPage - 1));
    setSearchParams(newParams);
    window.scrollTo({ top: 0, behavior: 'auto' });
  };

  //정렬 핸들러
  const handleSortChange = (newSortValue) => {
    const newParams = new URLSearchParams(searchParams);
    newParams.set('sort', newSortValue);
    newParams.set('page', '0');
    setSearchParams(newParams);
  };

  //  초기 진입 시 기본값 세팅
  useEffect(() => {
    const newParams = new URLSearchParams(searchParams);
    let changed = false;

    if (!searchParams.get('category')) {
      newParams.set('category', 'techtube');
      changed = true;
    }
    if (!searchParams.get('page')) {
      newParams.set('page', '0');
      changed = true;
    }
    if (!searchParams.get('sort')) {
      newParams.set('sort', 'LATEST');
      changed = true;
    }

    if (changed) setSearchParams(newParams);
  }, []);

  // 리스트 불러오기
  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      try {
        setTechBookList([]);
        let result;

        if (category === 'techbook') {
          result = await getTechBook(page, sortOption, keyword);
        } else {
          result = await getTechTube(page, sortOption, keyword);
        }

        setTechBookList(result?.data.content || []);
        setTotalList(result?.data.totalElements || []);
      } catch (error) {
        console.error('Error fetching data:', error);
        setTechBookList([]);
        setTotalList([]);
      }
      setIsLoading(false);
    };

    fetchData();
  }, [category, keyword, page, sortOption]);

  // 로딩과 없는 기준을 만들엇다

  const loadingRender = () => {
    return (
      <div>
        <h1>로딩중입니다.</h1>
      </div>
    );
  };

  const noneRender = () => {
    return (
      <div>
        <div className="text-[50px] col-span-4 text-center">없다!@@@</div>
      </div>
    );
  };

  return (
    <Layout>
      <EducationBanner />
      <div className="max-w-[1246px] mx-auto">
        <div className="mb-[85px]">
          <CategoryTab
            tabs={tabs}
            currentTab={category}
            onTabChange={handleTabChange}
            cateColor="#ee5945"
          />
        </div>
        <div className="flex justify-between mb-[41px]">
          <div className="font-medium text-[36px]">검색한 강의</div>
          <div className="flex">
            <SearchBar style="mr-[47px]" value={keyword} onSearchChange={handleSearchChange} />
            <PrimarySelect
              selectList={sortName}
              placeholder="최신순"
              customstyle="h-[46px]"
              onSortChange={handleSortChange}
            />
          </div>
        </div>

        <div className="grid grid-cols-4 gap-[17px] min-h-[700px]">
          {isLoading
            ? loadingRender()
            : techbookList.length <= 0
              ? noneRender()
              : techbookList.map((item) => (
                  <motion.div
                    whileHover={{ y: -4 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  >
                    <NavLink to={`/TECH_BOOK/${item.id}`} key={item.id}>
                      <LectureCard
                        id={item.id}
                        title={item.title}
                        instructor={item.writer}
                        likes={item.likeCount}
                        price={item.price}
                        imageUrl={item.techBookThumbnailUrl}
                      />
                    </NavLink>
                  </motion.div>
                ))}
        </div>

        <CustomPagination
          totalItems={totalList}
          itemsPerPage={16}
          currentPage={Number(page) + 1}
          onChangePage={handlepagination}
          style="mt-[67px]"
        />
        <img src="/images/education-ad.png" alt="교육" className="mt-[117px] mb-[143px]" />
      </div>
    </Layout>
  );
};

export default Education;
