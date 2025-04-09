import getCommunity from '@/api/community/getcommunity';
import Layout from '@/common/Layout/Layout';
import CustomPagination from '@/components/common/CustomPagination';
import CommunityBestSection from '@/components/community/CommunityBestSection';
import CommunityPostList from '@/components/community/CommunityPostList';
import CommunityRuleBanner from '@/components/community/CommunityRuleBanner';
import { useEffect, useState } from 'react';
import getBestCommunity from '@/api/community/getBestCommunity';
import { useSearchParams } from 'react-router-dom';
import { PencilSquareIcon } from '@heroicons/react/24/outline';

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
  // const pagesize = 16; // 페이지안에 아이템 수
  const sortName = {
    최신순: 'LATEST',
    댓글순: 'COMMENT',
    좋아요순: 'LIKE',
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

  //정렬 핸들러
  const handleSortChange = (newSortValue) => {
    const newParams = new URLSearchParams(searchParams);
    newParams.set('sort', newSortValue);
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
        const data = await getCommunity(page, sortOption, 'TOTAL', keyword);
        const bestdata = await getBestCommunity();
        const postdata = await getCommunity(page, sortOption, 'BOARD', keyword);
        const codedata = await getCommunity(page, sortOption, 'CODE_REVIEW', keyword);
        // const data = await getCommunity(0, sort, category, keyword);
        // setTechBook(data.data);
        setCommunityList(data.data.content);
        setBestCommunity(bestdata.data.content);
        setCommunityPostList(postdata.data.content);
        setCommunityCodeList(codedata.data.content);
        setTotalPages();
        console.log('ㅇㅁㅇㄴ', data.data.content);
        console.log('rrrrrrr', postdata.data.content);
        console.log('코드리뷰', bestdata.data.content);
      } catch (error) {
        console.error('Error fetching tech book:', error);
      }
    }
    fetchcommunity();
  }, [category, keyword, page, sortOption]);

  return (
    <Layout>
      <div className="w-[1246px] mx-auto mb-20">
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
          onClick={() => navigate('/communityWrite')}
          className="absolute right-8 w-[150px] h-[51px] bg-primary300 text-white font-semibold rounded-[10px] transition-all duration-200 flex items-center justify-center gap-2 hover:shadow-lg hover:scale-105"
        >
          <PencilSquareIcon className="w-6 h-6 text-white" />
          글쓰기
        </button>
      </div>
    </Layout>
  );
};

export default Community;
