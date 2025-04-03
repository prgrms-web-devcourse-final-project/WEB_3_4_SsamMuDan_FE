import { EyeIcon, HeartIcon, ChatBubbleOvalLeftEllipsisIcon } from '@heroicons/react/24/outline';

const CommunityCard = ({ title, content, viewCount, commentCount, likeCount }) => {
  return (
    <div className="w-[600px] h-[254px] border rounded-[20px] bg-white p-[20px] flex flex-col justify-between ml-2">
      <div className="flex flex-col gap-3">
        {/* 제목 */}
        <div className="text-[21px] font-bold line-clamp-2">{title}</div>
        {/* 내용 */}
        <div className="text-[18px] text-[#333] line-clamp-4 whitespace-pre-wrap">{content}</div>
      </div>

      {/* 댓글수, 좋아요수, 조회수 */}
      <div className="flex flex-row items-center gap-4 mt-4 bg-white rounded-[999px] px-4 py-2 w-fit shadow-md">
        <div className="flex flex-row items-center gap-2">
          <ChatBubbleOvalLeftEllipsisIcon className="w-[20px] text-primary300" />
          <div className="text-[15px]">{commentCount}</div>
        </div>
        <div className="flex flex-row items-center gap-2">
          <HeartIcon className="w-[20px] text-secondary200" />
          <div className="text-[15px]">{likeCount}</div>
        </div>
        <div className="flex flex-row items-center gap-2">
          <EyeIcon className="w-[20px] text-black" />
          <div className="text-[15px]">{viewCount}</div>
        </div>
      </div>
    </div>
  );
};

export default CommunityCard;
