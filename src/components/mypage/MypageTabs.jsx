import React, { useEffect, useState } from 'react';
import CategoryTab from '../common/CategoryTab';
import LectureCardSimple from '../common/LectureCardSimple';
import CustomPagination from '../common/CustomPagination';
import { useSearchParams } from 'react-router-dom';
import getOrderList from '@/api/mypage/getOrderList';
import LottieEmpty from '../common/LottieEmpty';

const MypageTabs = ({ activeSection }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const page = Number(searchParams.get('page')) || 0;
  const category = searchParams.get('category') || 'techtube';

  const [items, setItems] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(false);
  const [selectedSortLabel, setSelectedSortLabel] = useState('최신순');

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

  const handleTabChange = (tabValue) => {
    const newParams = new URLSearchParams(searchParams);
    newParams.set('category', tabValue);
    newParams.set('sort', 'LATEST');
    newParams.set('page', '0');
    newParams.delete('keyword');
    setSearchParams(newParams);
    setSelectedSortLabel('최신순');
  };

  const handlePagination = (newPage) => {
    const newParams = new URLSearchParams(searchParams);
    newParams.set('page', String(newPage - 1));
    setSearchParams(newParams);
    window.scrollTo({ top: 0, behavior: 'auto' });
  };

  useEffect(() => {
    const fetchData = async () => {
      if (activeSection !== 'purchase') {
        setItems([]); // 관심목록은 아직 API 없음
        return;
      }

      setLoading(true);
      try {
        const type = category === 'techtube' ? 'TECH_TUBE' : 'TECH_BOOK';
        const res = await getOrderList(page, 12, type);
        setItems(res.content);
        setTotalPages(res.totalPages);
      } catch (err) {
        console.error('구매 목록 로드 실패:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [activeSection, category, page]);

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
            {items.map((item) => (
              <LectureCardSimple
                key={item.productId}
                title={item.title}
                instructor={item.author}
                imageUrl={item.thumbnail}
                showPrice={false}
              />
            ))}
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

      {/* 페이지네이션 */}
      {activeSection === 'purchase' && totalPages > 1 && (
        <div className="my-[80px]">
          <CustomPagination
            totalPages={totalPages}
            currentPage={page + 1}
            onChangePage={handlePagination}
          />
        </div>
      )}
    </div>
  );
};

export default MypageTabs;
