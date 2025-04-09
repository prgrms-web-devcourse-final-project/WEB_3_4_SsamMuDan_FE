import { UsersIcon } from '@heroicons/react/24/solid';

const PositionChip = ({ text, count }) => {
  return (
    <span className="w-fit h-[44px] rounded-[12px] bg-grey100 inline-flex justify-center items-center p-4">
      {/* 포지션 */}
      <span className="flex flex-row gap-2 items-center">
        <UsersIcon className="w-[26px] text-primary300" />
        <span className="text-[18px]">{text}</span>
        {/* 인원설정 */}
        <span className="text-[18px]">{count}명</span>
      </span>
    </span>
  );
};

export default PositionChip;
