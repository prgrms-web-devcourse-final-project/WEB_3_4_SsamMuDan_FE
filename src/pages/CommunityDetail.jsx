import deleteCommunityLike from '@/api/community/deleteCommunityLike';
import deleteCommunityPost from '@/api/community/deleteCommunityPost';
import getCommunityDetail from '@/api/community/getCommunityDetail';
import postCommunityLike from '@/api/community/postCommunityLike';
import Layout from '@/common/Layout/Layout';
import CommentSection from '@/components/careerDetail/CommentSection';
import FloatingButton from '@/components/common/FloatingButton';
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
  const category = 'COMMUNITY';
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

  const [isLiked, setIsLiked] = useState(false); // 좋아요 여부
  const [likeCount, setLikeCount] = useState(0);

  const isLoggedIn = useAuthStore((state) => state.isLoggedIn); // 로그인 여부

  // 좋아요 토글 함수
  const handleLikeToggle = async () => {
    if (!isLoggedIn) {
      alert('로그인이 필요합니다.');
      navigate('/login');
      return;
    }

    try {
      if (isLiked) {
        await deleteCommunityLike({ itemId: Number(id) });
        setIsLiked(false);
        setLikeCount((prev) => prev - 1);
      } else {
        await postCommunityLike({ itemId: Number(id) });
        setIsLiked(true);
        setLikeCount((prev) => prev + 1);
      }
    } catch (err) {
      alert('좋아요 처리 중 오류가 발생했습니다.');
      console.error(err);
    }
  };

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
        setLikeCount(res.likeCount);
        setIsLiked(res.isLike ?? false); // undefined 방지
      } catch (err) {
        console.error('상세 조회 실패:', err);
      }
    };

    fetchDetail();
  }, [id]);

  if (!postData) {
    return <div>로딩 중...</div>;
  }

  const toTop = () => {
    window.scrollTo({ top: 0, behavior: 'auto' });
    console.log('클릭');
  };

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
        <CommentSection id={id} category={category} />
        <div className="fixed top-[300px] right-[100px] max-w-[800px] ">
          <CommunityFloating text={postData.viewCount} type="viwer" />
          <CommunityFloating
            text={likeCount}
            type="like"
            image={isLiked ? 'solid' : 'outline'}
            eventhandler={handleLikeToggle}
          />
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
        {/* 플로팅 버튼 */}
        <FloatingButton
          style="!fixed bottom-[100px] right-[150px] bg-transparent"
          scrollTop={toTop}
        />
      </div>
    </Layout>
  );
};

export default CommunityDetail;
