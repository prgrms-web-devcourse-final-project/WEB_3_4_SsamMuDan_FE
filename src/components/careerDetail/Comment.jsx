import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { ChatBubbleOvalLeftIcon } from '@heroicons/react/24/solid';
import { Button } from '../ui/button';

const Comment = () => {
  return (
    <>
      <div className="w-[1246px] mx-auto flex flex-col gap-9 border-b mt-[50px]">
        {/* 프로필 */}
        <div className=" h-[66px] flex flow-row items-end gap-5 ">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className="flex flex-col ">
            <span className="text-[20px] font-semibold">밥밥띠라라</span>
            <span className="text-[20px] text-grey300 font-medium ">2024.11.15</span>
          </div>
        </div>

        {/* 댓글 */}
        <div>인정하는 부분이라고 생각합니다~~!!!!</div>

        <div className="mb-[27px]">
          <Button className="bg-white rounded-[20px] hover:bg-white">
            <ChatBubbleOvalLeftIcon className="w-[24px] text-primary300  " />{' '}
            <span className="text-[16px] text-black">댓글쓰기</span>
          </Button>
        </div>
      </div>
    </>
  );
};

export default Comment;
