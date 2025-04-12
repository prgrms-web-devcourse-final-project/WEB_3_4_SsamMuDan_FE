import { UsersIcon } from '@heroicons/react/24/outline';

const PositionSetting = ({ positionName, count, onIncrement, onDecrement }) => {
  return (
    <>
      <div className="w-[300px] h-[44px] flex flex-row items-center">
        {/* 포지션 */}
        <div className="text-[18px] pr-5 ">{positionName}</div>
        {/* 인원설정 */}
        <div className="w-[160px] px-3 rounded-[12px] flex flex-row justify-between items-center bg-grey100">
          <UsersIcon className="w-[26px] text-grey400" />
          <div className="w-[95px] h-[44px] flex flex-row justify-around items-center gap-1">
            <button
              onClick={onDecrement}
              className="w-[26px] h-[26px] hover:cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={count <= 1}
            >
              <img
                src="/images/projectJoinWrite/Minus.svg"
                alt="Decrement"
                className="w-full object-cover"
              />
            </button>
            <div className="text-[16px] font-medium">{count}</div>
            <button onClick={onIncrement} className="w-[26px] h-[26px] hover:cursor-pointer">
              <img
                src="/images/projectJoinWrite/Plus.svg"
                alt="Increment"
                className="w-full object-cover"
              />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PositionSetting;
