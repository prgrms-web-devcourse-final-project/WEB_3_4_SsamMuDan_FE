import Badge from '@/common/Badge';
import { UserIcon } from '@heroicons/react/24/solid';
import StackIcon from '../projectJoin/StackIcon';

const MyProjectCard = ({ item }) => {
  return (
    <div className="w-[285px] h-[230px] p-3 rounded-[10px] bg-white flex flex-col justify-center items-start gap-6 border cursor-pointer hover:shadow-lg transition-shadow">
      {/* 모집 상태 & 모집인원 */}
      <div className="w-full flex flex-row justify-between items-center">
        <Badge
          text={item.isOpen ? '모집중' : '모집완료'}
          className={`w-[72px] h-[27px] text-white text-[13px] font-bold ${
            item.isOpen ? 'bg-[#3FC22E]' : 'bg-gray-400'
          }`}
        />
        <div className="h-[27px] flex flex-row items-center ">
          <UserIcon className="w-[16px]" />
          <div className="text-[14px]">모집인원 : {item.recruitmentCount}</div>
        </div>
      </div>
      {/* 제목 */}
      <div className="text-[20px] w-[265px]">{item.title}</div>
      {/* 날짜 */}
      <div className="w-[265px] text-[13px] flex flex-row gap-2 ">
        <div>
          시작일자 <span className="text-grey300 ">{item.startDate}</span>
        </div>
        {item.endDate && (
          <>
            <div>-</div>
            <div>
              마감일자 <span className="text-grey300 ">{item.endDate}</span>
            </div>
          </>
        )}
      </div>
      {/* 아이콘 */}
      <div className="w-[269px] flex flex-wrap gap-4">
        {Array.isArray(item.techStacksImageUrl) &&
          item.techStacksImageUrl.map((tech) => <StackIcon key={tech.id} item={tech} />)}
      </div>
    </div>
  );
};

export default MyProjectCard;
