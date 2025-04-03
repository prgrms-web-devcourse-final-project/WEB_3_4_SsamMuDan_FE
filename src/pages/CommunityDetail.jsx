import Layout from '@/common/Layout/Layout';
import CommentSection from '@/components/careerDetail/CommentSection';
import CommunityDetailContens from '@/components/communityDetail/CommunityDetailContens';
import CommunityDetailInfo from '@/components/communityDetail/CommunityDetailInfo';
import CommunityFloating from '@/components/communityDetail/CommunityFloating';
import { useState } from 'react';

const CommunityDetail = () => {
  const [floatingBadge, setFloatingBadge] = useState({
    viwer: {
      text: 0,
    },
    like: {
      text: 0,
    },
    delete: {
      style: '!border-[#9E3131] !bg-primary400 text-white cursor-pointer',
      text: '삭제하기',
    },
    modify: {
      style: '!border-[#0C8C5F] !bg-primary300 text-white cursor-pointer',
      text: '수정하기',
    },
    completed: {
      style: '!border-[#4A4747] !bg-[#393838] text-white cursor-pointer',
      text: '완료하기',
    },
  });

  return (
    <Layout>
      <div className="w-[1246px] mx-auto relative">
        <CommunityDetailInfo
          title="제목입니다"
          user="똑또기"
          date="2025.02.12"
          className="mb-[10px]"
        />
        <CommunityDetailContens />
        {/* 댓글 영역*/}
        <CommentSection />

        <div className="fixed top-[300px] right-[100px] max-w-[800px] ">
          <CommunityFloating
            text={floatingBadge.viwer.text}
            type="viwer"
            // image={floatingBadge.viwer.image}
          />
          <CommunityFloating
            text={floatingBadge.like.text}
            type="like"
            // image={floatingBadge.like.image}
          />
          <CommunityFloating
            text={floatingBadge.modify.text}
            type="modify"
            style={floatingBadge.modify.style}
          />
          <CommunityFloating
            text={floatingBadge.delete.text}
            type="delete"
            style={floatingBadge.delete.style}
          />
          <CommunityFloating
            text={floatingBadge.completed.text}
            type="completed"
            style={floatingBadge.completed.style}
          />
        </div>
      </div>
    </Layout>
  );
};

export default CommunityDetail;
