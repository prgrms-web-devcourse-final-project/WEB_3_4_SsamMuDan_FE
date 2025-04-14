import CommunityFloating from './CommunityFloating';

const CommunityDetailInfo = ({ title, user, date, viewfloating, onLike, isLiked, likeCount }) => {
  // 날짜 형식 변하기
  const formatDate = (isoString) => {
    const date = new Date(isoString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // 0부터 시작하므로 +1
    const day = String(date.getDate()).padStart(2, '0');

    return `${year}.${month}.${day}`;
  };

  return (
    <div className="border-b border-[#CFCFCF] mt-[92px]">
      <div className="text-[50px] truncate ">{title}</div>
      <div className="mb-[18px] flex justify-between items-center">
        <div className="flex items-center ">
          <span className="wd-[35px] h-[35px] rounded-full overflow-hidden mr-[14px]">
            <img src="/images/community-user.png" alt="유저썸네일" />
          </span>
          <span className="text-[16px] font-medium text-grey300">{user}</span>
          <div className="w-[4px] h-[4px] rounded-full bg-grey300 mx-[8px]"></div>
          <span className="text-[16px]  text-grey300">{formatDate(date)}</span>
        </div>
        <div className="flex items-center gap-3">
          <CommunityFloating text={viewfloating} type="viwer" />
          <CommunityFloating
            text={likeCount}
            type="like"
            image={isLiked ? 'solid' : 'outline'}
            eventhandler={onLike}
          />
        </div>
      </div>
    </div>
  );
};

export default CommunityDetailInfo;
