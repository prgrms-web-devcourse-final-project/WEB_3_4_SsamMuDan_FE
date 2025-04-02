import { UsersIcon, TrashIcon } from '@heroicons/react/24/solid';

const PositionChip = ({ text }) => {
  return (
    <span className="w-fit h-[44px] rounded-[12px] bg-grey100 inline-flex justify-center items-center p-4">
      <span className="flex flex-row gap-2">
        {/* 포지션 */}
        <span className="flex flex-row items-center gap-2">
          <UsersIcon className="w-[26px] text-primary300" />
          <span className="text-[18px]">{text}</span>
        </span>

        {/* 인원설정 */}
        <span className="rounded-[12px] flex flex-row items-center gap-2">
          <span className="text-[18px]">1명</span>
        </span>
      </span>
    </span>
  );
};

export default PositionChip;
