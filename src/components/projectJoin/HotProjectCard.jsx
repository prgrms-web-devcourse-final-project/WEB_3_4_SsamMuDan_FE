import Badge from '@/common/Badge';
import { UserIcon } from '@heroicons/react/24/solid';
import StackIcon from './StackIcon';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { EyeIcon, HeartIcon } from '@heroicons/react/24/outline';

const HotProjectCard = () => {
  return (
    <>
      <div className="w-[615px] h-[386px] rounded-[30px] bg-grey100 flex flex-col">
        {/* 상단 => 뱃지, 모집인원  */}
        <div className="w-[540px] h-[44px] mx-auto mt-[5px]">
          {' '}
          <div className="w-[269px] h-[44px] flex flex-row justify-between items-end">
            <Badge
              text="HOT"
              className="w-[72px] h-[27px] bg-primary400 text-white text-[13px] font-bold"
            />
            <div className="w-[88px] h-[27px] flex flex-row items-center ">
              <UserIcon className="w-[16px]" />
              <div className="text-[14px]">모집인원 : 7</div>
            </div>
          </div>
        </div>

        {/* 중간 */}

        <div className="w-[540px] mx-auto flex flow-row justify-between items-start mt-[18px]">
          {/* 왼쪽 */}
          <div className="flex flex-col gap-3">
            {/* 제목 */}
            <div className="text-[24px] w-[265px]">AI 교육 도메인 웹앱 React 개발자 구인</div>
            {/* 날짜 */}
            <div className="w-[265px] text-[13px] flex flex-row gap-2 ">
              <div>
                시작일자 <span className="text-grey300 ">2025.03.25</span>
              </div>
              <div>-</div>
              <div>
                마감일자 <span className="text-grey300 ">2025.03.25</span>
              </div>
            </div>
            {/* 내용 */}
            <div className="text-[14px] w-[265px] line-clamp-4">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia natus eius ipsam
              sint incidunt assumenda ratione ad doloribus modi, in nisi, inventore rem ipsa commodi
              tempore quas dolorem. Aspernatur, et!
            </div>
            {/* 아이콘 */}
            <div className="w-[265px] flex flex-wrap gap-4">
              <StackIcon />
              <StackIcon />
            </div>
          </div>

          {/* 오른쪽 */}
          <div className="w-[261px] h-[210px] ">
            <img
              src="/public/images/dummy-lecture.png"
              alt="강의 카드 이미지"
              className="h-full object-cover rounded-[15px]"
            />
          </div>
        </div>

        {/* 하단 */}
        <div className="w-[540px] h-[44px] mx-auto mt-[12px]">
          {' '}
          <div className="w-[269px] flex flex-row justify-between">
            {/* 왼쪽 */}
            <div className="w-[100px] h-[44px] flex flex-row items-center gap-2">
              {/* 뱃지 */}
              <Avatar className="w-[35px] h-[35px]">
                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div>코트리</div>
            </div>
            {/* 오른쪽 */}
            <div className="w-[100px] h-[44px] flex flex-row items-center">
              <div className="flex flex-row items-center gap-3">
                <div className="flex flex-row items-center gap-2 ">
                  <EyeIcon className="w-[20px] text-black " />
                  <div className="text-[15px]">12</div>
                </div>
                <div className="flex flex-row items-center gap-2 ">
                  <HeartIcon className="w-[20px] text-primary400  " />
                  <div className="text-[15px]">12</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HotProjectCard;
