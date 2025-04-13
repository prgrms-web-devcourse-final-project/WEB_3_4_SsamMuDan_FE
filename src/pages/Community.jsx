import getCommunity from '@/api/community/getCommunity';
import Layout from '@/common/Layout/Layout';
import CustomPagination from '@/components/common/CustomPagination';
import CommunityBestSection from '@/components/community/CommunityBestSection';
import CommunityPostList from '@/components/community/CommunityPostList';
import CommunityRuleBanner from '@/components/community/CommunityRuleBanner';
import { useEffect, useState } from 'react';
import getBestCommunity from '@/api/community/getBestCommunity';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { PencilSquareIcon } from '@heroicons/react/24/outline';
import useAuthStore from '@/store/useAuthStore';

const Community = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [communityList, setCommunityList] = useState([]);
  const [communityPostList, setCommunityPostList] = useState([]);
  const [communityCodeList, setCommunityCodeList] = useState([]);
  const [bestCommunity, setBestCommunity] = useState([]);
  const [totalPages, setTotalPages] = useState();

  const page = Number(searchParams.get('page')) || 0;
  const keyword = searchParams.get('keyword') || '';
  const category = searchParams.get('category') || 'TOTAL';
  const sortOption = searchParams.get('sort') || 'LATEST';
  const [selectedSortLabel, setSelectedSortLabel] = useState('최신순');
  const sortName = {
    최신순: 'LATEST',
    댓글순: 'COMMENT',
    좋아요순: 'LIKE',
  };
  //로그인하기
  const IsLogin = useAuthStore((state) => state.isLoggedIn);
  // const { id } = useParams();
  const navigate = useNavigate();

  //로그인 관련 버튼
  const handlewrite = () => {
    if (!IsLogin) {
      alert('로그인 후 이용가능한 서비스 입니다.');
      navigate('/login');
      return;
    } else {
      navigate('/communityWrite');
    }
  };

  // 탭 변경 핸들러
  const handleTabChange = (tabValue) => {
    const newParams = new URLSearchParams(searchParams);
    newParams.set('category', tabValue);
    newParams.set('page', '0');
    newParams.set('sort', 'LATEST');
    newParams.delete('keyword');

    setSelectedSortLabel('최신순');
    setSearchParams(newParams);
  };

  // 검색 핸들러
  const handleSearchChange = (input) => {
    const newParams = new URLSearchParams(searchParams);
    newParams.set('keyword', input.trim());
    newParams.set('page', '0');
    setSearchParams(newParams);
  };

  //정렬 핸들러
  const handleSortChange = (newSortValue) => {
    const newParams = new URLSearchParams(searchParams);
    newParams.set('sort', newSortValue);
    newParams.set('page', '0');
    setSearchParams(newParams);

    const newLabel = Object.keys(sortName).find((key) => sortName[key] === newSortValue); // 추가 해놓음
    setSelectedSortLabel(newLabel); //추가
  };

  //페이지네이션 핸들러
  const handlepagination = (newPage) => {
    const newParams = new URLSearchParams(searchParams);
    newParams.set('page', String(newPage - 1));
    setSearchParams(newParams);
    window.scrollTo({ top: 0, behavior: 'auto' });
  };

  //  초기 진입 시 기본값 세팅
  useEffect(() => {
    const newParams = new URLSearchParams(searchParams);
    let changed = false;

    if (!searchParams.get('category')) {
      newParams.set('category', 'TOTAL');
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

    window.scrollTo({ top: 0, behavior: 'auto' });
  }, []);

  useEffect(() => {
    async function fetchcommunity() {
      try {
        const bestdata = await getBestCommunity();
        let result;
        if (category === 'TOTAL') {
          result = await getCommunity(page, sortOption, 'TOTAL', keyword);
        }
        if (category === 'BOARD') {
          result = await getCommunity(page, sortOption, 'BOARD', keyword);
        }
        if (category === 'CODE_REVIEW') {
          result = await getCommunity(page, sortOption, 'CODE_REVIEW', keyword);
        }
        // const data = await getCommunity(0, sort, category, keyword);
        // setTechBook(data.data);
        setCommunityList(result?.data.content);
        setBestCommunity(bestdata.data.content);
        setCommunityPostList(result?.data.content);
        setCommunityCodeList(result?.data.content);
        setTotalPages(result?.data.totalPages);
      } catch (error) {
        console.error('Error fetching tech book:', error);
      }
    }
    fetchcommunity();
  }, [category, keyword, page, sortOption]);

  return (
    <Layout>
      <div className="w-[1246px] mx-auto mb-20 relative">
        {/* 커뮤니티 Rule 섹션 */}
        <CommunityRuleBanner />
        {/* 커뮤니티 베스트 섹션 */}
        <CommunityBestSection bestCommunity={bestCommunity} />
        {/* 커뮤니티 게시글 리스트 섹션 */}
        <CommunityPostList
          postData={{
            communityList,
            communityPostList,
            communityCodeList,
            currentTab: category,
          }}
          onTabChange={handleTabChange}
          searchProps={{
            value: keyword,
            onSearchChange: handleSearchChange,
          }}
          selectData={{
            selectList: sortName,
            placeholder: '최신순',
            customstyle: 'h-[46px]',
            onSortChange: handleSortChange,
            selectvalue: selectedSortLabel,
          }}
          paginationData={{
            totalPages: totalPages,
            currentPage: Number(page) + 1,
            onChangePage: handlepagination,
            style: 'mt-[67px]',
          }}
        />

        {/* 글쓰기 버튼 (페이지네이션 우측 고정) */}
        <button
          onClick={handlewrite}
          className="absolute bottom-1 right-8 w-[150px] h-[51px] bg-primary300 text-white font-semibold rounded-[10px] transition-all duration-200 flex items-center justify-center gap-2 hover:shadow-lg hover:scale-105"
        >
          <PencilSquareIcon className="w-6 h-6 text-white" />
          글쓰기
        </button>
      </div>
    </Layout>
  );
};

export default Community;
