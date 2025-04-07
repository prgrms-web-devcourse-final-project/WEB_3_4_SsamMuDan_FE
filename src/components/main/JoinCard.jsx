import Badge from '@/common/Badge';
import { EyeIcon, HeartIcon } from '@heroicons/react/24/outline';

const JoinCard = ({ project }) => {
  const {
    title,
    description,
    imageUrl,
    viewCount,
    likeCount,
    startDate,
    endDate,
    techStacksImageUrl,
    username,
    userProfileImageUrl,
  } = project;

  // 시작일자와 마감일자 총 몇 개월인지 계산
  const monthCalc = (start, end) => {
    const s = new Date(start);
    const e = new Date(end);
    const years = e.getFullYear() - s.getFullYear();
    const months = e.getMonth() - s.getMonth();
    return years * 12 + months;
  };

  const totalMonths = monthCalc(startDate, endDate);

  return (
    <div className="w-[1240px] h-[125px] rounded-[10px] flex items-center border bg-white">
      <div className="w-[95%] h-[80%] flex flex-col justify-between mx-auto my-auto ">
        <div className="flex flex-row justify-between">
          <div className="flex flex-row gap-[30px] items-center">
            {/* 모집중 뱃지 */}
            <Badge text="모집중" className="w-[72px] h-[33px] bg-[#3FC22E] text-white text-sm" />
            {/* 제목 */}
            <div className="text-[21px] font-bold">{title}</div>
            <div className="flex flex-row gap-4">
              {/* 시작일자 */}
              <div className="flex flex-row items-center gap-2">
                <span className="text-[20px] font-medium">시작일자</span>
                <span className="text-[16px] text-grey400 font-semibold">{startDate}</span>
              </div>
              {/* 마감일자 */}
              <div className="flex flex-row items-center gap-2">
                <span className="text-[20px] font-medium">마감일자</span>
                <span className="text-[16px] text-grey400 font-semibold">
                  {endDate} (총 {totalMonths}개월)
                </span>
              </div>
            </div>
          </div>
          {/* 조회수 & 좋아요 수 */}
          <div className="flex flex-row items-center gap-4">
            <div className="flex flex-row items-center gap-2 ">
              <EyeIcon className="w-[20px] text-grey200 " />
              <div className="text-[15px]">{viewCount}</div>
            </div>
            <div className="flex flex-row items-center gap-2 ">
              <HeartIcon className="w-[20px] text-grey200 " />
              <div className="text-[15px]">{likeCount}</div>
            </div>
          </div>
        </div>
        {/* 설명 */}
        <div className="text-[16px]">{description}</div>
        {/* 기술스택 아이콘 */}
        <div className="flex flex-row gap-2">
          {Array.isArray(techStacksImageUrl) &&
            techStacksImageUrl.length > 0 &&
            techStacksImageUrl.map((img, i) => (
              <img
                key={`${img}-${i}`}
                src={img}
                alt={`기술스택 아이콘 ${i}`}
                className="w-8 h-8 object-contain border rounded"
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default JoinCard;
