import React, { useEffect, useState } from 'react';
import CategoryTab from '../common/CategoryTab';
import LectureCardSimple from '../common/LectureCardSimple';
import CustomPagination from '../common/CustomPagination';
import { useNavigate, useSearchParams } from 'react-router-dom';
import getOrderList from '@/api/mypage/getOrderList';
import LottieEmpty from '../common/LottieEmpty';
import getLikedCommunity from '@/api/community/getLikedCommunity';
import getLikedTechTube from '@/api/education/getLikedTechTube';
import getLikedTechBook from '@/api/education/getLikedTechBook';
import getLikedProject from '@/api/projectJoin/getLikedProject';
import MyProjectCard from './MyProjectCard';

const MypageTabs = ({ activeSection }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const page = Number(searchParams.get('page')) || 0;
  const category = searchParams.get('category') || 'techtube';

  const [items, setItems] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(false);
  const [selectedSortLabel, setSelectedSortLabel] = useState('최신순');

  const navigate = useNavigate();

  const tabs =
    activeSection === 'purchase'
      ? [
          { label: 'TechTube', value: 'techtube' },
          { label: 'TechBook', value: 'techbook' },
        ]
      : [
          { label: 'TechTube', value: 'techtube' },
          { label: 'TechBook', value: 'techbook' },
          { label: '프로젝트', value: 'project' },
          { label: '커뮤니티', value: 'community' },
        ];

  // 탭 변경 시 URL 쿼리파라미터 변경
  const handleTabChange = (tabValue) => {
    const newParams = new URLSearchParams(searchParams);
    newParams.set('category', tabValue);
    newParams.set('sort', 'LATEST');
    newParams.set('page', '0');
    newParams.delete('keyword');
    setSearchParams(newParams);
    setSelectedSortLabel('최신순');
  };

  // 페이지네이션
  const handlePagination = (newPage) => {
    const newParams = new URLSearchParams(searchParams);
    newParams.set('page', String(newPage - 1));
    setSearchParams(newParams);
    window.scrollTo({ top: 0, behavior: 'auto' });
  };

  // 각 카테고리별 API를 함수로 저장해둠
  const fetcherMap = {
    community: () => getLikedCommunity(page, 12),
    techtube: () => getLikedTechTube(page, 12),
    techbook: () => getLikedTechBook(page, 12),
    project: () => getLikedProject(page, 12),
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        if (activeSection === 'purchase') {
          // 구매목록일 때 테크튜브, 테크북 구분
          const type = category === 'techtube' ? 'TECH_TUBE' : 'TECH_BOOK';
          const res = await getOrderList(page, 12, type);
          setItems(res.content);
          setTotalPages(res.totalPages);
        } else {
          // 관심목록일 때는 해당 카테고리의 fetch 함수 실행함
          const fetcher = fetcherMap[category];
          if (fetcher) {
            const res = await fetcher();
            setItems(res.content);
            setTotalPages(res.totalPages);
          } else {
            setItems([]);
            setTotalPages(0);
          }
        }
      } catch (err) {
        console.error('목록 로드 실패:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [activeSection, category, page]);

  const renderItem = (item) => {
    // 구매 목록
    if (activeSection === 'purchase') {
      const path =
        category === 'techtube'
          ? `/TECH_TUBE/${item.productId}?category=강의소개&page=0&sort=LATEST`
          : `/TECH_BOOK/${item.productId}?category=강의소개&page=0&sort=LATEST`;

      return (
        <div key={item.id} onClick={() => navigate(path)} className="cursor-pointer">
          <LectureCardSimple
            title={item.title}
            imageUrl={item.thumbnail || '/images/default-image.svg'}
            showPrice={false}
          />
        </div>
      );
    }

    // 관심 목록 - 커뮤니티
    if (category === 'community') {
      return (
        <div
          key={item.id}
          onClick={() => navigate(`/communityDetail/${item.id}`)}
          className="cursor-pointer"
        >
          <LectureCardSimple
            title={item.title}
            imageUrl={item.thumbnailImage || '/images/default-image.svg'}
            showPrice={false}
          />
        </div>
      );
    }

    // 관심 목록 - TechTube
    if (category === 'techtube') {
      return (
        <div
          key={item.id}
          onClick={() => navigate(`/TECH_TUBE/${item.id}?category=강의소개&page=0&sort=LATEST`)}
          className="cursor-pointer"
        >
          <LectureCardSimple
            title={item.title}
            imageUrl={item.techTubeThumbnailUrl || '/images/default-image.svg'}
            showPrice={false}
          />
        </div>
      );
    }

    // 관심 목록 - TechBook
    if (category === 'techbook') {
      return (
        <div
          key={item.id}
          onClick={() => navigate(`/TECH_BOOK/${item.id}?category=강의소개&page=0&sort=LATEST`)}
          className="cursor-pointer"
        >
          <LectureCardSimple
            title={item.title}
            imageUrl={item.techBookThumbnailUrl || '/images/default-image.svg'}
            showPrice={false}
          />
        </div>
      );
    }

    // 관심 목록 - 프로젝트
    if (category === 'project') {
      return (
        <div
          key={item.id}
          onClick={() => navigate(`/projectJoinDetail/${item.id}`)}
          className="cursor-pointer"
        >
          <MyProjectCard item={item} />
        </div>
      );
    }

    return null;
  };

  return (
    <div className="bg-white border border-grey200 p-6 shadow-lg rounded-2xl mb-[90px] max-w-[1246px] mx-auto">
      <div className="mb-8">
        <CategoryTab
          tabs={tabs}
          currentTab={category}
          onTabChange={handleTabChange}
          cateColor="#00be7b"
        />
      </div>

      <div>
        {loading ? (
          <p>로딩 중...</p>
        ) : items.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-10">
            {items.map((item) => renderItem(item))}
          </div>
        ) : (
          <LottieEmpty
            message={
              activeSection === 'purchase'
                ? '아직 구매한 콘텐츠가 없어요.\nTechTube & TechBook에서 찾아보세요!'
                : '찜한 항목이 없어요.\n관심 있는 콘텐츠에 하트를 눌러 추가해보세요!'
            }
          />
        )}
      </div>

      {totalPages > 1 && (
        <div className="my-[80px]">
          <CustomPagination
            totalPages={totalPages}
            currentPage={page + 1}
            onChangePage={handlePagination}
            style="mt-[17px]"
          />
        </div>
      )}
    </div>
  );
};

export default MypageTabs;
