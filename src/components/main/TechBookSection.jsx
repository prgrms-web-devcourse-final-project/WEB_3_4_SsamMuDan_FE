import { useEffect, useState } from 'react';
import CategoryTab from '../common/CategoryTab';
import TechBookList from './TechBookList';
import TechBookBest from './TechBookBest';
import getEducationCategory from '@/api/main/getEducationCategory';

const TechBookSection = () => {
  const [categoryList, setCategoryList] = useState([]);
  const [currentCategoryId, setCurrentCategoryId] = useState(null);
  const [currentCategoryName, setCurrentCategoryName] = useState('');

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const res = await getEducationCategory();
        const filtered = res.data.filter((category) => category.id <= 3);
        setCategoryList(filtered);
        if (filtered.length > 0) {
          setCurrentCategoryId(filtered[0].id);
          setCurrentCategoryName(filtered[0].name);
        }
      } catch (err) {
        console.error('TechBook 카테고리 조회 실패:', err);
      }
    };

    fetchCategory();
  }, []);

  const handleTabChange = (tabName) => {
    const selected = categoryList.find((cat) => cat.name === tabName);
    if (selected) {
      setCurrentCategoryId(selected.id);
      setCurrentCategoryName(selected.name);
    }
  };

  return (
    <div className="w-full flex flex-row mt-[115px]">
      {/* 일반 TechBook */}
      <div className="flex flex-col">
        {/* 제목 */}
        <div className="flex flex-row items-center">
          <div className="font-esamanru text-[25px] mr-[69px]">TechBook</div>
          <CategoryTab
            tabs={categoryList.map((cat) => ({
              label: cat.name,
              value: cat.id,
            }))}
            currentTab={currentCategoryId}
            onTabChange={(id) => {
              const selected = categoryList.find((cat) => cat.id === id);
              if (selected) {
                setCurrentCategoryId(selected.id);
                setCurrentCategoryName(selected.name);
              }
            }}
            cateColor="#00be7b"
          />
        </div>
        <div className="mt-[75px]">
          <TechBookList categoryId={currentCategoryId} />
        </div>
      </div>

      {/* TechBook 베스트 */}
      {/* 일반 TechBook */}
      <div className="flex flex-col ml-[18px]">
        {/* 제목 */}
        <div className="flex flex-row items-center">
          <div className="font-esamanru text-[25px] mr-[69px]">지금 HOT한 TechBook</div>
        </div>
        <div className="mt-[75px]">
          <TechBookBest />
        </div>
      </div>
    </div>
  );
};

export default TechBookSection;
