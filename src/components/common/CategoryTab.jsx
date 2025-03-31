import * as motion from 'motion/react-client';
import { useState } from 'react';

const tabs = ['강의소개', '수강평', '커뮤니티'];

const CategoryTab = ({ cateColor, tabs }) => {
  const [currentTab, setCurrentTab] = useState(tabs[0]);

  return (
    <div className="flex flex-row h-[40px] ">
      {tabs.map((tab) => (
        <div
          key={tab}
          className="relative flex flex-col items-center justify-center px-4 cursor-pointer mr-[40px]"
          onClick={() => setCurrentTab(tab)}
        >
          <span
            className={`text-[20px] font-[500]  ${
              currentTab === tab ? `text-${cateColor}` : 'text-gray-400'
            }`}
          >
            {tab}
          </span>
          {currentTab === tab && (
            <motion.div
              layoutId="underline"
              className={`absolute bottom-0 h-[3px] w-full bg-${cateColor} rounded-full`}
              transition={{ type: 'spring', stiffness: 500, damping: 30 }}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default CategoryTab;
