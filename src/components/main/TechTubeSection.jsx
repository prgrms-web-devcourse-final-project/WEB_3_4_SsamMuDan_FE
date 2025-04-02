import Badge from '@/common/Badge';
import { useState } from 'react';
import { motion } from 'framer-motion';
import TechTubeList from './TechTubeList';
import SlideButton from './SlideButton';

const TechTubeSection = () => {
  const categoryList = ['프론트엔드', '백엔드', '풀스택'];

  const [currentCategory, setCurrentCategory] = useState(categoryList[0]);

  const handleCategory = (index) => {
    setCurrentCategory(categoryList[index]);
  };

  return (
    <>
      <div className="flex flex-col">
        {/* 제목 */}
        <div className="font-esamanru text-[25px] mt-[70px]"> 지금 HOT한 TechTube</div>
        {/* 카테고리 섹션*/}
        <div className="mt-[33px] flex justify-between items-center">
          {/* 카테고라 */}
          <div className="flex flex-row gap-4 relative">
            {categoryList.map((item, index) => (
              <div
                key={item}
                onClick={() => handleCategory(index)}
                className="relative hover:cursor-pointer"
              >
                <Badge
                  text={item}
                  className={`p-[20px] h-[40px] text-[20px]  ${
                    item === currentCategory ? 'text-white' : 'text-black'
                  }`}
                />
                {/* 애니메이션 백그라운드 */}
                {item === currentCategory && (
                  <motion.div
                    layoutId="categoryHighlight"
                    className="absolute top-0 left-0 w-full h-full bg-primary300 rounded-[999px] -z-10 "
                    transition={{ type: 'spring', stiffness: 500, damping: 30 }}

                    /*스프링 애니메이션 효과 
                    stiffness가 높을수록 더 빠르고 단단한 느낌 
                    damping이 높을수록 덜 튐 (너무 낮으면 튕기는 느낌 남) 
                  */
                  />
                )}
              </div>
            ))}
          </div>
          <div className="">
            <SlideButton />
          </div>
        </div>
        {/* 리스트 */}
        <div className="mt-[54px]">
          <TechTubeList />
        </div>
      </div>
    </>
  );
};

export default TechTubeSection;
