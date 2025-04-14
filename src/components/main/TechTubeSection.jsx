import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import SlideButton from './SlideButton';
import TechTubeList from './TechTubeList';
import Badge from '@/common/Badge';

import getTechtubeMain from '@/api/main/getTechtubeMain';
import getEducationCategory from '@/api/main/getEducationCategory';
import Loading from '../common/Loading';

const TechTubeSection = () => {
  const [categoryList, setCategoryList] = useState([]); // getEducationCategory로 불러온 카테고리
  const [currentCategoryId, setCurrentCategoryId] = useState(null); // 선택된 카테고리 id
  const [techTubeList, setTechTubeList] = useState([]);
  const swiperRef = useRef(null);
  const [loading, setLoading] = useState(true); // 로딩 상태

  // 카테고리 가져오기
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await getEducationCategory();
        // id가 5 이하인 카테고리만 필터링 (프로그래밍 언어 카테고리까지)
        const filteredCategories = res.data.filter((category) => category.id <= 5);
        setCategoryList(filteredCategories);
        if (filteredCategories.length > 0) {
          setCurrentCategoryId(filteredCategories[0].id); // 첫번째 카테고리(백엔드) default
        }
      } catch (err) {
        console.error('카테고리 조회 실패:', err);
      }
    };

    fetchCategories();
  }, []);

  // 카테고리가 바뀔 때마다 테크튜브 불러오기
  useEffect(() => {
    if (!currentCategoryId) return;

    const fetchTechTube = async () => {
      try {
        setLoading(true);
        const data = await getTechtubeMain({ categoryId: currentCategoryId });
        setTechTubeList(data);
      } catch (err) {
        console.error('TechTube 불러오기 실패:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchTechTube();
  }, [currentCategoryId]);

  return (
    <div className="flex flex-col">
      <div className="font-esamanru text-[25px] mt-[70px]"> 지금 HOT한 TechTube</div>

      <div className="mt-[33px] flex justify-between items-center">
        <div className="flex flex-row gap-4 relative">
          {categoryList.map((category) => (
            <div
              key={category.id}
              onClick={() => setCurrentCategoryId(category.id)}
              className="relative hover:cursor-pointer"
            >
              <Badge
                text={category.name}
                className={`p-[20px] h-[40px] text-[20px] ${
                  currentCategoryId === category.id ? 'text-white' : 'text-black'
                }`}
              />
              {currentCategoryId === category.id && (
                <motion.div
                  layoutId="categoryHighlight"
                  className="absolute top-0 left-0 w-full h-full bg-primary300 rounded-[999px] -z-10"
                  transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                />
              )}
            </div>
          ))}
        </div>

        <SlideButton
          onPrev={() => swiperRef.current?.slidePrev()}
          onNext={() => swiperRef.current?.slideNext()}
          linkTo="/education"
        />
      </div>

      <div className="mt-[54px]">
        {loading ? (
          <div className="h-[300px] flex items-center justify-center">
            <Loading />
          </div>
        ) : (
          <TechTubeList data={techTubeList} swiperRef={swiperRef} />
        )}
      </div>
    </div>
  );
};

export default TechTubeSection;
