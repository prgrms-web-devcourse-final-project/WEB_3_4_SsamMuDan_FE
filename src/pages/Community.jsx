import Layout from '@/common/Layout/Layout';
import CustomPagination from '@/components/common/CustomPagination';
import CommunityBestSection from '@/components/community/CommunityBestSection';
import CommunityPostList from '@/components/community/CommunityPostList';
import CommunityRuleBanner from '@/components/community/CommunityRuleBanner';
import { useEffect } from 'react';

const Community = () => {
  // 스크롤 맨 위로 이동
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, []);

  return (
    <Layout>
      <div className="w-[1246px] mx-auto mb-20">
        {/* 커뮤니티 Rule 섹션 */}
        <CommunityRuleBanner />
        {/* 커뮤니티 베스트 섹션 */}
        <CommunityBestSection />
        {/* 커뮤니티 게시글 리스트 섹션 */}
        <CommunityPostList />
        {/* 페이지네이션 */}
        <CustomPagination />
      </div>
    </Layout>
  );
};

export default Community;
