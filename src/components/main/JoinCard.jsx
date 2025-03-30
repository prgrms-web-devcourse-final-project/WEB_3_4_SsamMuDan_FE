import Badge from '@/common/Badge';
import { EyeIcon, HeartIcon } from '@heroicons/react/24/outline';

const JoinCard = () => {
  return (
    <div className="w-[1240px] h-[125px] rounded-[10px] flex items-center border bg-white">
      <div className="w-[95%] h-[80%] flex flex-col justify-between mx-auto my-auto ">
        {/* 맨 윗 문장 */}
        <div className="flex flex-row justify-between">
          {/* 왼쪽 */}
          <div className="flex flex-row gap-[30px] items-center">
            <Badge text="모집중" className="w-[72px] h-[33px] bg-[#3FC22E] text-white text-sm" />
            <div className="text-[21px] font-bold">풀스택으로 공부 같이 하실분</div>
            <div className="flex flex-row gap-4">
              <div className="flex flex-row items-center gap-2">
                <span className="text-[20px] font-medium">시작일자</span>
                <span className="text-[16px] text-grey400 font-semibold">2025-03-24</span>
              </div>
              <div className="flex flex-row items-center gap-2">
                <span className="text-[20px] font-medium">마감일자</span>
                <span className="text-[16px] text-grey400 font-semibold">
                  2025-03-24 (총 10개월)
                </span>
              </div>
            </div>
          </div>
          {/* 오른쪽 */}
          <div className="flex flex-row items-center gap-4">
            <div className="flex flex-row items-center gap-2 ">
              <EyeIcon className="w-[20px] text-grey200 " />
              <div className="text-[15px]">12</div>
            </div>
            <div className="flex flex-row items-center gap-2 ">
              <HeartIcon className="w-[20px] text-grey200 " />
              <div className="text-[15px]">12</div>
            </div>
          </div>
        </div>
        {/* 중간 문장 */}
        <div className="text-[14px]">
          안녕하세요🙋🏻‍♀️ 매장내 QR 기반 결제 서비스 팀에서 백엔드, 프론트엔드 직군 모집합니다.
        </div>
        {/* 마지막 문장 */}
        <div className="flex flex-row justify-between items-center">
          {/* 왼쪽 */}
          <div className="flex flex-row items-center gap-5">
            <Badge
              text="4년차"
              className="w-[68px] h-[20px] bg-[#F0FFE1] text-primary300 text-[10px]"
            />
            <Badge
              text="4년차"
              className="w-[68px] h-[20px] bg-[#F0FFE1] text-primary300 text-[10px]"
            />
            <Badge
              text="4년차"
              className="w-[68px] h-[20px] bg-[#F0FFE1] text-primary300 text-[10px]"
            />
            <Badge
              text="4년차"
              className="w-[68px] h-[20px] bg-[#F0FFE1] text-primary300 text-[10px]"
            />
          </div>
          {/* 오른쪽 */}
          <Badge
            text="4년차"
            className="w-[68px] h-[20px] bg-[#F0FFE1] text-primary300 text-[10px]"
          />
        </div>
      </div>
    </div>
  );
};

export default JoinCard;
