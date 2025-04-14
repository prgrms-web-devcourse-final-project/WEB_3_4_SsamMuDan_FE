import { useState } from 'react';
import { motion } from 'framer-motion';

import SearchBar from '../common/SearchBar';
import PrimarySelect from '../common/PrimarySelect';
import CommunityList from './CommunityList';
import CustomPagination from '../common/CustomPagination';
import LottieEmpty from '../common/LottieEmpty';
import { Skeleton } from '../ui/skeleton';

const CommunityPostList = ({ postData, onTabChange, searchProps, selectData, paginationData }) => {
  // const categoryList = ['전체', '게시글', '코드리뷰'];
  const { communityList, communityPostList, communityCodeList, currentTab, isLoading } = postData;
  const { value, onSearchChange } = searchProps;
  const { selectList, placeholder, customstyle, onSortChange, selectvalue } = selectData;
  const { totalPages, currentPage, onChangePage, style } = paginationData;

  const categorytabs = [
    { label: '전체', value: 'TOTAL' },
    { label: '게시글', value: 'BOARD' },
    { label: '코드리뷰', value: 'CODE_REVIEW' },
  ];
  let currentList = [];

  if (currentTab === 'TOTAL') currentList = communityList;
  else if (currentTab === 'BOARD') currentList = communityPostList;
  else if (currentTab === 'CODE_REVIEW') currentList = communityCodeList;

  // 아무것도 없을때
  const noneRender = () => {
    return (
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <LottieEmpty message={'커뮤니티글이 없어요 \n 다같이 소통해요!'} />
      </div>
    );
  };

  // 로딩 만들엇다
  const loadingRender = () => {
    return (
      <div className="w-[760px] ">
        {Array.from({ length: 5 }).map((_, index) => (
          <div key={index} className="flex flex-col space-y-3 mb-[37px]">
            <Skeleton className="h-[100px] w-full rounded-xl" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-[250px]" />
              <Skeleton className="h-4 w-[200px]" />
            </div>
          </div>
        ))}
      </div>
    );
  };
  return (
    <div className="relative pb-[80px]">
      <div className="">
        <div className="flex justify-between items-center mt-[33px] mb-3">
          {/* 카테고리 탭 */}
          <div className="flex gap-4 relative">
            {categorytabs.map(({ label, value }) => {
              const isActive = currentTab === value;
              return (
                <div key={value} onClick={() => onTabChange(value)} className="relative z-10">
                  <div
                    className={`w-[100px] h-[40px] flex items-center justify-center text-base font-semibold rounded-full transition-colors duration-200 hover:cursor-pointer ${
                      isActive ? 'text-white' : 'text-black'
                    }`}
                  >
                    {label}
                  </div>
                  {isActive && (
                    <motion.div
                      layoutId="categoryHighlight"
                      className="absolute top-0 left-0 w-full h-full bg-primary300 rounded-full -z-10 "
                      transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                    />
                  )}
                </div>
              );
            })}
          </div>

          {/* 검색바 & 정렬 드롭다운 */}
          <div className="flex gap-10 items-center">
            <SearchBar value={value} onSearchChange={onSearchChange} />
            <PrimarySelect
              selectList={selectList}
              placeholder={placeholder}
              customstyle={customstyle}
              onSortChange={onSortChange}
              value={selectvalue}
            />
          </div>
        </div>

        {/* 게시글 카드 리스트 */}
        {currentList.length > 0 ? (
          <CommunityList communityinfo={currentList} />
        ) : (
          <div className="min-h-[600px] relative">{noneRender()}</div>
        )}
        {/* {isLoading ? (
          loadingRender()
        ) : currentList.length > 0 ? (
          <CommunityList communityinfo={currentList} />
        ) : (
          <div className="min-h-[600px] relative">{noneRender()}</div>
        )} */}
      </div>
      <CustomPagination
        totalPages={totalPages}
        currentPage={currentPage}
        onChangePage={onChangePage}
        style={style}
      />
    </div>
  );
};

export default CommunityPostList;
