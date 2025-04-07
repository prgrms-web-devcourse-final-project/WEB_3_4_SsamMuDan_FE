import * as motion from 'motion/react-client';

const CategoryTab = ({ tabs, currentTab, onTabChange, cateColor }) => {
  return (
    <div className="flex flex-row h-[40px]">
      {tabs.map(({ label, value }) => {
        const isActive = currentTab === value;

        return (
          <div
            key={value}
            className="relative flex flex-col items-center justify-center px-4 cursor-pointer"
            onClick={() => onTabChange(value)}
          >
            <span
              className="text-[20px] font-[500]"
              style={{ color: isActive ? cateColor : '#9ca3af' }}
            >
              {label}
            </span>
            {isActive && (
              <motion.div
                layoutId="underline"
                style={{ backgroundColor: cateColor }}
                className="absolute bottom-0 h-[3px] w-full rounded-full"
                transition={{ type: 'spring', stiffness: 500, damping: 30 }}
              />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default CategoryTab;
