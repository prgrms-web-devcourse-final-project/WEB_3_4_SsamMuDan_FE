import { ChatBubbleOvalLeftEllipsisIcon, EyeIcon, HeartIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';

const CommunityBestSection = () => {
  // 커뮤니티 베스트 게시글 더미데이터
  const dummyBestPosts = [
    {
      title: 'Data-Driven Digital Marketing',
      thumbnail: '/images/dummy-community.png',
      likes: 22,
      comments: 10,
      views: 10,
      author: '미어캣 광인',
      authorProfile: '/images/dummy-user-avatar.svg',
    },
    {
      title:
        '공부와는 다른 얘기지만 제 귀여운 미어캣 공부와는 다른 얘기지만 제 귀여운 미어캣공부와는 다른 얘기지만 제 귀여운 미어캣',
      thumbnail: '/images/dummy-community.png',
      likes: 35,
      comments: 8,
      views: 22,
      author: '뚜뚜',
      authorProfile: '/images/dummy-user-avatar.svg',
    },
    {
      title: '개발할 때 커피 말고 추천 음료 있나요?',
      thumbnail: '/images/dummy-community.png',
      likes: 12,
      comments: 4,
      views: 40,
      author: '깃헙정글',
      authorProfile: '/images/dummy-user-avatar.svg',
    },
  ];

  return (
    <div className="mb-24">
      <div className="font-esamanru text-2xl mb-10">👑 커뮤니티 Best</div>
      <div className="flex gap-4">
        {dummyBestPosts.map((post, idx) => (
          <motion.div
            key={idx}
            className="w-[431px] cursor-pointer"
            whileHover={{ scale: 1.03, y: -6 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          >
            {' '}
            {/* 썸네일 이미지 */}
            <div className="relative w-full h-[244px] rounded-[20px] overflow-hidden">
              <img src={post.thumbnail} alt={post.title} className="w-full h-full object-cover" />
              {/* 조회수, 댓글수, 좋아요수 뱃지 */}
              <div
                className="w-[185px] h-[34px] absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-lg font-semibold flex justify-center items-center gap-3"
                style={{
                  boxShadow: '0 15px 25px rgba(0,0,0,0.12)',
                }}
              >
                <span className="flex items-center gap-1">
                  <ChatBubbleOvalLeftEllipsisIcon className="w-[22px] text-primary300" />
                  {post.comments}
                </span>
                <span className="flex items-center gap-1">
                  <HeartIcon className="w-[22px] text-red-500" />
                  {post.likes}
                </span>
                <span className="flex items-center gap-1">
                  <EyeIcon className="w-[22px] text-grey700" />
                  {post.views}
                </span>
              </div>
            </div>
            {/* 작성자 & 제목 */}
            <div className="flex items-center mt-3 gap-2">
              <img
                src={post.authorProfile}
                alt={post.author}
                className="w-[30px] h-[30px] rounded-full object-cover"
              />
              <span className="text-base font-semibold">{post.author}</span>
            </div>
            <div className="mt-2 text-xl font-semibold line-clamp-1">{post.title}</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CommunityBestSection;
