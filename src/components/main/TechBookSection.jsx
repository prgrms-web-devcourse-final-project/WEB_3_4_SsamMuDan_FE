import CategoryTab from '../common/CategoryTab';
import TechBookList from './TechBookList';
import TechBookBest from './TechBookBest';
import { useState } from 'react';

const TechBookSection = () => {
  const tabs = ['프론트엔드', '백엔드', '풀스택'];
  const [currentTab, setCurrentTab] = useState('프론트엔드');

  return (
    <>
      <div className="w-full flex flex-row mt-[115px]">
        {/* 일반 TechBook */}
        <div className="flex flex-col">
          {/* 제목 */}
          <div className="flex flex-row  items-center">
            <div className="font-esamanru text-[25px] mr-[69px] ">TechTube</div>
            <CategoryTab tabs={tabs} currentTab={currentTab} onTabChange={setCurrentTab} />
          </div>
          <div className="mt-[75px]">
            <TechBookList />
          </div>
        </div>
        {/* TechBook 베스트 */}
        {/* 일반 TechBook */}
        <div className="flex flex-col ml-[18px]">
          {/* 제목 */}
          <div className="flex flex-row  items-center">
            <div className="font-esamanru text-[25px] mr-[69px] ">TechTube</div>
          </div>
          <div className="mt-[75px]">
            <TechBookBest />
          </div>
        </div>
      </div>
    </>
  );
};

export default TechBookSection;
