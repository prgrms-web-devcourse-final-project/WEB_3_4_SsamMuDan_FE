import { UsersIcon } from '@heroicons/react/24/outline';

const PositionSetting = () => {
  return (
    <>
      <div className="w-[300px] h-[44px] flex flow-row items-center gap-4 ">
        {/* 포지션 */}
        <div className="text-[18px]">프론트엔드</div>
        {/* 인원설정 */}
        <div className=" w-[150px] px-3 rounded-[12px] flex flex-row justify-betweens  items-center gap-3 bg-grey100">
          <UsersIcon className="w-[26px]" />
          <div className="w-[85px] h-[44px]  flex flex-row justify-around items-center gap-1">
            <div className="w-[26px] h-[26px] hover:cursor-pointer">
              <img
                src="/public/images/projectJoinWrite/Minus.svg"
                alt=""
                className="w-full object-cover"
              />
            </div>
            <div>1</div>
            <div className="w-[26px] h-[26px] hover:cursor-pointer">
              <img
                src="/public/images/projectJoinWrite/Plus.svg "
                alt=""
                className="w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PositionSetting;
