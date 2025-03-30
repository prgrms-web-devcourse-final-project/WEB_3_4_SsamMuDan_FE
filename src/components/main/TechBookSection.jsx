import CategoryTab from '../common/CategoryTab';
import TechBookList from './TechBookList';
import TechBookBest from './TechBookBest';

const TechBookSection = () => {
  return (
    <>
      <div className="w-full flex flex-row mt-[115px]">
        {/* 일반 TechBook */}
        <div className="flex flex-col">
          {/* 제목 */}
          <div className="flex flex-row  items-center">
            <div className="font-esamanru text-[25px] mr-[69px] ">TechTube</div>
            <CategoryTab />
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
