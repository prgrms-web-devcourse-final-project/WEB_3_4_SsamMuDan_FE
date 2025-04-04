import EducationBanner from '@/components/education/EducationBanner';
import Layout from '../common/Layout/Layout';
import CategoryTab from '@/components/common/CategoryTab';
import SearchBar from '@/components/common/SearchBar';
import PrimarySelect from '@/components/common/PrimarySelect';
import LectureCard from '@/common/LectureCard';
import CustomPagination from '@/components/common/CustomPagination';
import { useEffect, useState } from 'react';
// import getTechBook from '@/api/education/getTechBook';
import item from '@/api/education/TechBookDummy';
import { NavLink } from 'react-router-dom';
import TechBookStore from '@/store/TechBookSearch';

const Education = () => {
  const tabs = ['TechTube', 'TechBook'];
  const [currentTab, setCurrentTab] = useState('TechTube');
  const techbookList = item.data.content;
  const [sortOption, setSortOption] = useState('최신순');
  const [sortList, setSortList] = useState([]);
  const [keyword, setKeyword] = useState();

  useEffect(() => {
    if (!techbookList || techbookList.length === 0) return; // 데이터가 없으면 종료

    let sorted = [...techbookList].sort((a, b) => {
      if (sortOption === '최신순') {
        return new Date(b.createdAt) - new Date(a.createdAt);
      } else if (sortOption === '좋아요순') {
        return b.likeCount - a.likeCount;
      }
      return 0;
    });
    sorted = sorted.filter((item) =>
      keyword
        ? item.title
            .replace(/\s/g, '')
            .toLowerCase()
            .includes(keyword.replace(/\s/g, '').toLowerCase())
        : true,
    );

    setSortList(sorted); // 최종 데이터 업데이트
  }, [sortOption, keyword, techbookList]); // 🔥 `keyword`도 의존성에 추가!

  // useEffect(() => {
  //   const sorted = [...techbookList].sort((a, b) => {
  //     if (sortOption == '최신순') {
  //       return new Date(b.createdAt) - new Date(a.createdAt);
  //     } else if (sortOption === '좋아요순') {
  //       return b.likeCount - a.likeCount;
  //     }

  //     return 0;
  //   });

  //   setSortList(sorted);
  // }, [sortOption]);

  // /////////////////////////////////////////////////////////
  // techbookList 는 dummydata여서 여기에 넣은거다 실제는 fetchItems 써야함
  // const { techbookList, filter, setFilter, filteredItems, fetchItems } = TechBookStore();
  // const [filterSelect, setFilterSelect] = useState();

  // console.log(techbookList);
  // useEffect(() => {
  //   // api를 썼을때만 쓰기
  //   fetchItems();
  // }, []);

  // const SelectedFilter = techbookList.filter((item) =>
  //   filter === 'All' ? true : item.category === filter,
  // );

  // const filteredItems = items
  //   .filter((item) => (filter === 'All' ? true : item.category === filter))
  //   .sort((a, b) => {
  //     // 1️⃣ like 기준 내림차순 정렬
  //     if (b.like !== a.like) return b.like - a.like;
  //     // 2️⃣ like 값이 같다면 날짜 기준 내림차순 (최신이 먼저)
  //     return new Date(b.date) - new Date(a.date);
  //   });
  // //////////////////////////////////////////////////////////

  // 스크롤 맨 위로 이동
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, []);

  return (
    <Layout>
      <EducationBanner />
      <div className="max-w-[1246px] mx-auto">
        <div className="mb-[85px]">
          <CategoryTab
            cateColor={'#ee5945'}
            tabs={tabs}
            currentTab={currentTab}
            onTabChange={setCurrentTab}
          />
        </div>
        <div className="flex  justify-between mb-[41px]">
          <div className="font-medium text-[36px]">검색한 강의</div>
          <div className="flex">
            <SearchBar style="mr-[47px]" onSearchChange={setKeyword} />
            <PrimarySelect
              selectList={['최신순', '좋아요순']}
              placeholder="최신순"
              customstyle="h-[46px]"
              onSortChange={setSortOption}
            />
          </div>
        </div>
        <div className="grid grid-cols-4 gap-[17px] ">
          {currentTab === 'TechTube' &&
            Array(16)
              .fill(null)
              .map((_, index) => (
                <LectureCard
                  key={index}
                  title="React 완벽 마스터: 기초 개념부터 린캔버스 프로젝트까지"
                  instructor="김코딩"
                  likes="77"
                  price="16,800"
                  imageUrl="/images/education-image1.png"
                />
              ))}
          {currentTab === 'TechBook' &&
            sortList.map((item) => (
              <NavLink to={`/education/techbook/${item.id}`} key={item.id}>
                <LectureCard
                  id={item.id}
                  title={item.title}
                  instructor={item.writer}
                  likes={item.likeCount}
                  price={item.price}
                  imageUrl={item.techBookThumbnailUrl}
                />
              </NavLink>
            ))}
        </div>
        <CustomPagination style="mt-[67px]" />
        <img src="/images/education-ad.png" alt="교육" className="mt-[117px] mb-[143px]" />
      </div>
    </Layout>
  );
};

export default Education;
