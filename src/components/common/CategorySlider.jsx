import { AnimatePresence } from 'motion/react';
import * as motion from 'motion/react-client';
import { useState } from 'react';

const tabs = ['강의소개', '수강평', '커뮤니티'];

export default function CategorySlider() {
  const [currentTab, setCurrentTab] = useState('강의소개');

  return (
    <div className="flex flex-row justify-around w-[365px] h-[60px]">
      {tabs.map((tab) => (
        <div
          key={tab}
          className="relative flex flex-col items-center justify-center px-4 cursor-pointer"
          onClick={() => setCurrentTab(tab)}
        >
          <span
            className={`text-[20px] font-[500] ${
              currentTab === tab ? 'text-primary200' : 'text-gray-400'
            }`}
          >
            {tab}
          </span>
          {currentTab === tab && (
            <motion.div
              layoutId="underline"
              className="absolute bottom-0 h-[3px] w-full bg-primary200 rounded-full"
              transition={{ type: 'spring', stiffness: 500, damping: 30 }}
            />
          )}
        </div>
      ))}
    </div>
  );
}
