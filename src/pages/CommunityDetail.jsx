import deleteCommunityPost from '@/api/community/deleteCommunityPost';
import getCommunityDetail from '@/api/community/getCommunityDetail';
import Layout from '@/common/Layout/Layout';
import CommentSection from '@/components/careerDetail/CommentSection';
import CommunityDetailContens from '@/components/communityDetail/CommunityDetailContens';
import CommunityDetailInfo from '@/components/communityDetail/CommunityDetailInfo';
import CommunityFloating from '@/components/communityDetail/CommunityFloating';
import useAuthStore from '@/store/useAuthStore';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const CommunityDetail = () => {
  const { id } = useParams();
  const [postData, setPostData] = useState(null);
  const { userInfo } = useAuthStore();
  const navigate = useNavigate();

  const [floatingBadge, setFloatingBadge] = useState({
    viwer: { text: 0 },
    like: { text: 0 },
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

  const handleDelete = async () => {
    const confirm = window.confirm('게시글을 삭제할까요?');

    if (!confirm) return;

    try {
      await deleteCommunityPost(id);
      alert('게시글이 삭제되었습니다.');
      navigate('/community');
    } catch (error) {
      alert('삭제에 실패했습니다. 다시 시도해주세요.');
    }
  };

  useEffect(() => {
    const fetchDetail = async () => {
      try {
        const res = await getCommunityDetail(id);
        setPostData(res);
      } catch (err) {
        console.error('상세 조회 실패:', err);
      }
    };

    fetchDetail();
  }, [id]);

  if (!postData) {
    return <div>로딩 중...</div>;
  }

  return (
    <Layout>
      <div className="w-[1246px] mx-auto relative">
        <CommunityDetailInfo
          title={postData.title}
          user={postData.author}
          date={postData.createdAt}
          className="mb-[10px]"
        />
        <CommunityDetailContens content={postData.content} image={postData.imageUrl} />
        {/* 댓글 영역*/}
        <CommentSection />
        <div className="fixed top-[300px] right-[100px] max-w-[800px] ">
          <CommunityFloating text={postData.viewCount} type="viwer" />
          <CommunityFloating text={postData.likeCount} type="like" />
          {userInfo?.nickname === postData.author && (
            <>
              <CommunityFloating
                text={floatingBadge.modify.text}
                type="modify"
                style={floatingBadge.modify.style}
                eventhandler={() => navigate(`/communityWrite?id=${id}`)}
              />
              <CommunityFloating
                text={floatingBadge.delete.text}
                type="delete"
                style={floatingBadge.delete.style}
                eventhandler={handleDelete}
              />
            </>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default CommunityDetail;
