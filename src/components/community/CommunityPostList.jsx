import { motion } from 'framer-motion';
import { useState } from 'react';
import SearchBar from '../common/SearchBar';
import PrimarySelect from '../common/PrimarySelect';

const CommunityPostList = () => {
  const categoryList = ['전체', '게시글', '코드리뷰'];
  const [currentCategory, setCurrentCategory] = useState(categoryList[0]);
  const selectList = ['최신순', '좋아요 순', '리뷰 많은 순'];

  const handleCategory = (index) => {
    setCurrentCategory(categoryList[index]);
  };

  // 게시글 더미데이터 (여기서 반복)
  const dummyPostList = Array.from({ length: 5 }, (_, i) => ({
    id: i + 1,
    author: `작성자 ${i + 1}`,
    date: '2025.04.01',
    title: `이건 더미 게시글 제목입니다 ${i + 1}`,
    preview:
      '이곳은 게시글 미리보기 내용입니다. 여러 줄일 수도 있고, 실제 컨텐츠 요약이 들어갑니다.',
    profileImage: '/images/dummy-user-avatar.svg',
    thumbnail: '/images/dummy-thumbnail.jpg',
    likes: 10 + i * 2,
    comments: 5 + i,
    views: 100 + i * 10,
    isNew: i === 0,
  }));

  return (
    <div className="mb-20">
      <div className="flex justify-between items-center mt-[33px] mb-6">
        {/* 카테고리 탭 */}
        <div className="flex gap-4 relative">
          {categoryList.map((item, index) => (
            <div key={item} onClick={() => handleCategory(index)} className="relative z-10">
              <div
                className={`w-[100px] h-[40px] flex items-center justify-center text-base font-medium rounded-full transition-colors duration-200 ${
                  item === currentCategory ? 'text-white' : 'text-black'
                }`}
              >
                {item}
              </div>
              {item === currentCategory && (
                <motion.div
                  layoutId="categoryHighlight"
                  className="absolute top-0 left-0 w-full h-full bg-primary300 rounded-full -z-10"
                  transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                />
              )}
            </div>
          ))}
        </div>
        <div className="flex gap-4 items-center">
          {/* 검색바 */}
          <SearchBar />
          {/* 정렬 드롭다운 */}
          <PrimarySelect selectList={selectList} placeholder={'최신순'} />
        </div>
      </div>

      {/* 게시글 카드 리스트 */}
      <div className="">
        {dummyPostList.map((post, index) => (
          <div
            key={post.id}
            className={`w-[1251px] h-[236px] flex items-center justify-between px-6 border-gray-200 ${
              index === 0 ? 'border-t border-b' : 'border-b'
            }`}
          >
            <div className="w-full pr-6 flex flex-col justify-center">
              {/* 작성자 프로필 */}
              <div className="flex items-center mb-3">
                <img
                  src={post.profileImage}
                  alt={post.author}
                  className="w-[50px] h-[50px] rounded-full object-cover mr-3"
                />
                <div>
                  <div className="text-base font-semibold">{post.author}</div>
                  <div className="text-sm text-gray-400">{post.date}</div>
                </div>
              </div>

              {/* 제목 */}
              <div className="text-lg font-bold mb-2">{post.title}</div>

              {/* 내용 */}
              <div className="text-sm text-gray-700 mb-2">{post.preview}</div>

              {/* 댓글수, 좋아요수, 조회수 */}
              <div className="flex items-center gap-5 text-sm text-gray-600 mt-2">
                <span className="flex items-center gap-1">
                  <img src="/icons/community-comment.svg" className="w-5 h-5" />
                  {post.comments}
                </span>
                <span className="flex items-center gap-1">
                  <img src="/icons/community-like.svg" className="w-5 h-5" />
                  {post.likes}
                </span>
                <span className="flex items-center gap-1">
                  <img src="/icons/community-eye.svg" className="w-5 h-5" />
                  {post.views}
                </span>
              </div>
            </div>

            {/* 썸네일 */}
            <div className="flex-shrink-0 w-[310px] h-[174px] rounded-[10px] overflow-hidden bg-gray-100">
              <img src={post.thumbnail} alt="썸네일" className="w-[381px] h-[227px] object-cover" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommunityPostList;
