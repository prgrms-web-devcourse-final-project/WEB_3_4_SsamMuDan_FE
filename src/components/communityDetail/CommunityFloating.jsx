import { EyeIcon } from '@heroicons/react/24/outline';
import { HeartIcon } from '@heroicons/react/24/outline';

const CommunityFloating = ({ image, text, style, type, eventhandler }) => {
  return (
    <div
      className={`w-[101px] h-[49px] rounded-[10px] bg-white border border-[#EEEEEE] p-[16px] flex justify-center items-center shadow-custom-md mb-[8px] ${style}`}
      onClick={eventhandler}
    >
      {type == 'modify' || type == 'delete' || type == 'completed' || type == 'cancel' ? (
        <div className="text-[16px] font-bold">{text}</div>
      ) : (
        <>
          {type == 'viwer' ? (
            <EyeIcon className="w-[20px] text-grey400  mr-[10px]" />
          ) : (
            <HeartIcon className="w-[20px] text-grey400  mr-[10px]" />
          )}
          <div className="text-[16px] font-normal">{text}</div>
        </>
      )}
    </div>
  );
};

export default CommunityFloating;
