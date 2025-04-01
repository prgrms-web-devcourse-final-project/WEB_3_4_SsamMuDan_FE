import { UsersIcon, TrashIcon } from '@heroicons/react/24/outline';

const PositionUpdate = ({ text }) => {
  return (
    <div className="w-fit h-[44px] rounded-[12px] flex flex-row items-center gap-4 p-4 bg-grey100">
      {/* 포지션 */}
      <div className="flex flex-row items-center gap-2">
        <UsersIcon className="w-[26px]" />
        <div className="text-[18px]">{text}</div>
      </div>

      {/* 인원설정 */}
      <div className="rounded-[12px] flex flex-row items-center gap-2">
        {/* 마이너 */}
        <div className="w-[26px] h-[26px] hover:cursor-pointer">
          <img
            src="/public/images/projectJoinWrite/Minus.svg"
            alt=""
            className="w-full object-cover"
          />
        </div>
        {/* 인원수 */}
        <div className="font-bold text-[18px]">1</div>
        {/* 플러스 */}
        <div className="w-[26px] h-[26px] hover:cursor-pointer">
          <img
            src="/public/images/projectJoinWrite/Plus.svg"
            alt=""
            className="w-full object-cover"
          />
        </div>
        <div className="font-bold text-[18px]">명</div>
        <TrashIcon className="w-[26px]" />
      </div>
    </div>
  );
};

export default PositionUpdate;
