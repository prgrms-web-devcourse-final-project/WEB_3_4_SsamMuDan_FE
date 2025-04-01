import * as motion from 'motion/react-client';


const CategoryTab = ({ tabs, currentTab, onTabChange }) => {
  return (
    <div className="flex flex-row h-[40px] ">
      {tabs.map((tab) => (
        <div
          key={tab}
          className="relative flex flex-col items-center justify-center px-4 cursor-pointer"
          onClick={() => onTabChange(tab)}
        >
          <span
            className={`text-[20px] font-[500] ${
              currentTab === tab ? 'text-primary300' : 'text-gray-400'
            }`}
          >
            {tab}
          </span>
          {currentTab === tab && (
            <motion.div
              layoutId="underline"
              className="absolute bottom-0 h-[3px] w-full bg-primary300 rounded-full"
              transition={{ type: 'spring', stiffness: 500, damping: 30 }}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default CategoryTab;
