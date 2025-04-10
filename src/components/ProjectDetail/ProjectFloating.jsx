import { EyeIcon, HeartIcon } from '@heroicons/react/24/outline';

const ProjectFloating = ({ text, style, type }) => {
  const renderContent = () => {
    if (type === 'modify' || type === 'delete' || type === 'completed' || type === 'status') {
      return <div className="text-[16px] font-bold text-white">{text}</div>;
    }

    return (
      <>
        {type === 'viwer' ? (
          <EyeIcon className="w-[20px] text-grey400 mr-[10px]" />
        ) : (
          <HeartIcon className="w-[20px] text-grey400 mr-[10px]" />
        )}
        <div className="text-[16px] font-normal">{text}</div>
      </>
    );
  };

  return (
    <div
      className={`w-[101px] h-[49px] rounded-[10px] p-[16px] flex justify-center items-center shadow-custom-md mb-[8px] ${style}`}
    >
      {renderContent()}
    </div>
  );
};

export default ProjectFloating;
