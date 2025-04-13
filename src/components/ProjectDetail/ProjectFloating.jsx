import { EyeIcon, HeartIcon } from '@heroicons/react/24/outline';
import { HeartIcon as SolidHeartIcon } from '@heroicons/react/24/solid';

const ProjectFloating = ({ text, style, type, isLiked = false, onClick }) => {
  const renderContent = () => {
    if (['modify', 'delete', 'completed', 'status'].includes(type)) {
      return <div className="text-[16px] font-bold text-white">{text}</div>;
    }

    return (
      <>
        {type === 'viwer' ? (
          <EyeIcon className="w-[20px] text-grey400 mr-[10px]" />
        ) : isLiked ? (
          <SolidHeartIcon className="w-[20px] text-primary300 mr-[10px]" />
        ) : (
          <HeartIcon className="w-[20px] text-grey400 mr-[10px]" />
        )}
        <div className="text-[16px] font-normal">{text}</div>
      </>
    );
  };

  return (
    <div
      onClick={onClick}
      className={`w-[101px] h-[49px] rounded-[10px] p-[16px] flex justify-center items-center shadow-custom-md mb-[8px] cursor-pointer ${style}`}
    >
      {renderContent()}
    </div>
  );
};

export default ProjectFloating;
