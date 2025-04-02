import { NavLink } from 'react-router-dom';
import { ChevronRightIcon } from '@heroicons/react/24/solid';
import { ChevronLeftIcon } from '@heroicons/react/24/solid';

const SlideButton = () => {
  return (
    <div className="flex items-center ">
      <NavLink to="/education" className="text-[#8D8D8D] text-[18px] font-semibold mr-[27px]">
        모두 보기
      </NavLink>
      <div className="w-[74.98px] h-[33px] rounded-[8px] border border-[#D6D6D6] flex items-center justify-center">
        <ChevronLeftIcon
          className=" w-[18px] text-[#BCBCBC]  mr-[5px] cursor-pointer"
          strokeWidth={3}
        />
        <ChevronRightIcon
          className=" w-[18px] text-[#7C7C7C]  ml-[5px] cursor-pointer"
          strokeWidth={3}
        />
      </div>
    </div>
  );
};

export default SlideButton;
