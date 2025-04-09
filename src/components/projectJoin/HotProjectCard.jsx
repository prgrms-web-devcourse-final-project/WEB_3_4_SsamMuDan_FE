import Badge from '@/common/Badge';
import { UserIcon } from '@heroicons/react/24/solid';
import StackIcon from './StackIcon';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { EyeIcon, HeartIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

const HotProjectCard = ({ item }) => {
  return (
    <Link to={`/projectJoinDetail/${item.id}`}>
      <div className="w-[610px] h-[405px] rounded-[30px] bg-grey100 flex flex-col justify-center gap-2 cursor-pointer">
        {/* 상단 => 뱃지, 모집인원  */}
        <div className="w-[540px] h-[44px] mx-auto">
          {' '}
          <div className="w-[269px] h-[44px] flex flex-row justify-between items-center">
            <Badge
              text="HOT"
              className="w-[72px] h-[27px] bg-primary400 text-white text-[13px] font-bold"
            />
            <div className="w-[88px] h-[27px] flex flex-row items-center ">
              <UserIcon className="w-[16px]" />
              <div className="text-[14px]">모집인원 : {item.recruitmentCount}</div>
            </div>
          </div>
        </div>

        {/* 중간 */}

        <div className="w-[540px] mx-auto flex flow-row justify-between items-start">
          {/* 왼쪽 */}
          <div className="flex flex-col gap-4">
            {/* 제목 */}
            <div className="text-[24px] w-[265px]">{item.title}</div>
            {/* 날짜 */}
            <div className="w-[265px] text-[13px] flex flex-row gap-2 ">
              <div>
                시작일자 <span className="text-grey300 ">{item.startDate}</span>
              </div>
              <div>-</div>
              <div>
                마감일자 <span className="text-grey300 ">{item.endDate}</span>
              </div>
            </div>
            {/* 내용 */}
            <div className="text-[14px] w-[265px] line-clamp-4">{item.description}</div>
            {/* 아이콘 */}
            <div className="w-[265px] flex flex-wrap gap-4">
              {item.techStacksImageUrl.map((item) => (
                <StackIcon key={item.id} item={item} />
              ))}
            </div>
          </div>

          {/* 오른쪽 */}
          <div className="w-[261px] h-[210px] ">
            <img
              src={item.imageUrl}
              alt="강의 카드 이미지"
              className="h-full object-cover rounded-[15px]"
            />
          </div>
        </div>

        {/* 하단 */}
        <div className="w-[540px] h-[44px] mx-auto">
          {' '}
          <div className="w-[269px] flex flex-row justify-between">
            {/* 왼쪽 */}
            <div className=" h-[44px] flex flex-row items-center gap-2">
              {/* 뱃지 */}
              <Avatar className="w-[35px] h-[35px]">
                <AvatarImage src={item.userProfileImageUrl} alt="@shadcn" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div>{item.username}</div>
            </div>
            {/* 오른쪽 */}
            <div className=" h-[44px] flex flex-row items-center">
              <div className="flex flex-row items-center gap-3 ">
                <div className="flex flex-row items-center gap-2 ">
                  <EyeIcon className="w-[20px] text-black " />
                  <div className="text-[15px]">{item.viewCount}</div>
                </div>
                <div className="flex flex-row items-center gap-2 ">
                  <HeartIcon className="w-[20px] text-primary400  " />
                  <div className="text-[15px]">{item.likeCount}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default HotProjectCard;
