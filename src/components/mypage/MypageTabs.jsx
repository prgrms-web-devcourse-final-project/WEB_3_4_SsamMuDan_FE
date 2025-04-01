// TechTube & TechBook 탭

import React, { useState } from 'react';
import CategoryTab from '../common/CategoryTab';
import LectureCardSimple from '../common/LectureCardSimple';
import CustomPagination from '../common/CustomPagination';

const MypageTabs = ({ activeSection }) => {
  const tabs = ['TechTube', 'TechBook'];
  const [currentTab, setCurrentTab] = useState('TechTube');

  // 강의 카드 더미데이터
  const dummyLecture = {
    title: '한 입 크기로 잘라 먹는 리액트(React.js) : 기초부터 실전까지',
    instructor: '김코딩',
    likes: 304,
    price: 16800,
    imageUrl: '/images/dummy-lecture.png',
  };

  const dummyLectureList = Array.from({ length: 12 }, (_, index) => ({
    ...dummyLecture,
    id: index,
  }));

  return (
    <div className="bg-white border border-grey200 p-6 shadow-lg rounded-2xl mb-[90px] max-w-[1246px] mx-auto">
      {' '}
      <div className="mb-4">
        <CategoryTab tabs={tabs} currentTab={currentTab} onTabChange={setCurrentTab} />
      </div>
      <div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {dummyLectureList.map((lecture) => (
            <LectureCardSimple
              key={lecture.id}
              title={lecture.title}
              instructor={lecture.instructor}
              price={lecture.price}
              imageUrl={lecture.imageUrl}
              showPrice={false}
            />
          ))}
        </div>

        {/* 페이지네이션 */}
        <div className="my-[80px]">
          <CustomPagination />
        </div>
      </div>
    </div>
  );
};

export default MypageTabs;
