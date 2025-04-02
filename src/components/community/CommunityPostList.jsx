import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ChatBubbleOvalLeftEllipsisIcon,
  EyeIcon,
  HeartIcon,
  PencilSquareIcon,
} from '@heroicons/react/24/outline';

import SearchBar from '../common/SearchBar';
import PrimarySelect from '../common/PrimarySelect';

const CommunityPostList = () => {
  const categoryList = ['전체', '게시글', '코드리뷰'];
  const selectList = ['최신순', '좋아요 순', '리뷰 많은 순'];
  const [currentCategory, setCurrentCategory] = useState(categoryList[0]);
  const navigate = useNavigate();

  const handleCategory = (index) => setCurrentCategory(categoryList[index]);

  // 게시글 더미데이터 (테스트용)
  const dummyPostList = Array.from({ length: 5 }, (_, i) => ({
    id: i + 1,
    author: `작성자 ${i + 1}`,
    date: '2025.04.01',
    title: `게시글 제목입니다 ${i + 1}`,
    content: '게시글 내용 '.repeat(30), // line-clamp-2 (테스트용)
    profileImage: '/images/dummy-user-avatar.svg',
    thumbnail: i % 2 === 0 ? '/images/dummy-thumbnail.jpg' : '', // 짝수만 기본이미지 (테스트용)
    likes: 10 + i * 2,
    comments: 5 + i,
    views: 100 + i * 10,
    isNew: i === 0,
  }));

  return (
    <div className="relative">
      <div className="mb-20">
        <div className="flex justify-between items-center mt-[33px] mb-3">
          {/* 카테고리 탭 */}
          <div className="flex gap-4 relative">
            {categoryList.map((item, index) => (
              <div key={item} onClick={() => handleCategory(index)} className="relative z-10">
                <div
                  className={`w-[100px] h-[40px] flex items-center justify-center text-base font-semibold rounded-full transition-colors duration-200 ${
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

          {/* 검색바 & 정렬 드롭다운 */}
          <div className="flex gap-10 items-center">
            <SearchBar />
            <PrimarySelect selectList={selectList} placeholder="최신순" customstyle="h-[46px]" />
          </div>
        </div>

        {/* 게시글 카드 리스트 */}
        <div>
          {dummyPostList.map((post, index) => (
            <div
              key={post.id}
              className={`w-[1251px] h-[250px] flex items-center border-gray-200 ${
                index === 0 ? 'border-t border-b' : 'border-b'
              }`}
            >
              <div className="w-[872px] h-[180px] ml-2">
                {/* 프로필사진 */}
                <div className="flex">
                  <img
                    src={post.profileImage}
                    alt={post.author}
                    className="w-[55px] h-[55px] rounded-full object-cover mr-3"
                  />
                  <div>
                    {/* 작성자 & 작성일 */}
                    <div className="flex items-center gap-4 text-base text-gray-400 mb-1">
                      <span className="font-semibold text-black">{post.author}</span>
                      <span>{post.date}</span>
                    </div>
                    {/* 제목 */}
                    <div className="text-xl font-bold text-black mb-2 line-clamp-1">
                      {post.title}
                    </div>
                  </div>
                </div>
                {/* 내용 */}
                <div className="text-lg text-gray-700 mb-1 line-clamp-2 mt-2">{post.content}</div>
                {/* 댓글수, 좋아요수, 조회수 */}
                <div className="flex items-center gap-5 text-gray-600 mt-5">
                  <span className="flex items-center gap-1">
                    <ChatBubbleOvalLeftEllipsisIcon className="w-5 h-5 text-primary300" />
                    {post.comments}
                  </span>
                  <span className="flex items-center gap-1">
                    <HeartIcon className="w-5 h-5 text-red-500" />
                    {post.likes}
                  </span>
                  <span className="flex items-center gap-1">
                    <EyeIcon className="w-5 h-5 text-grey700" />
                    {post.views}
                  </span>
                </div>
              </div>

              {/* 썸네일 이미지 */}
              <div className="w-[300px] h-[180px] rounded-[15px] overflow-hidden ml-9">
                <img
                  src={post.thumbnail || '/images/default-image.svg'}
                  alt="썸네일"
                  className={`w-full h-full object-fill ${
                    !post.thumbnail ? 'border border-gray-300 rounded-[15px]' : ''
                  }`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 글쓰기 버튼 (페이지네이션 우측 고정) */}
      <button
        onClick={() => navigate('/communityWrite')}
        className="absolute right-8 w-[150px] h-[51px] bg-primary300 text-white font-semibold rounded-[10px] transition-all duration-200 flex items-center justify-center gap-2 hover:shadow-lg hover:scale-105"
      >
        <PencilSquareIcon className="w-6 h-6 text-white" />
        글쓰기
      </button>
    </div>
  );
};

export default CommunityPostList;
