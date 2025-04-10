import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { ChatBubbleOvalLeftIcon } from '@heroicons/react/24/solid';
import { Button } from '../ui/button';
import { useState } from 'react';
import ReplyComment from './ReplyComment';
import { Viewer } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor-viewer.css';

const Comment = ({ data, isSubComment = false, whereId, fetchComments }) => {
  const [reply, setReply] = useState(false);
  const [showSubComments, setShowSubComments] = useState(false);

  const toggleReply = () => setReply(!reply);
  const toggleSubComments = () => setShowSubComments(!showSubComments);

  const formatDate = (dateString) => {
    const [date, time] = dateString.split('T');
    const postTime = new Date(dateString);
    const currentTime = new Date();
    const diffInMinutes = Math.floor((currentTime - postTime) / (1000 * 60));

    if (diffInMinutes < 60) {
      return `${date} ${diffInMinutes}분 전`;
    } else if (diffInMinutes < 1440) {
      // 24시간 = 1440분
      const diffInHours = Math.floor(diffInMinutes / 60);
      return `${date} ${diffInHours}시간 전`;
    } else {
      const diffInDays = Math.floor(diffInMinutes / 1440);
      return `${date} ${diffInDays}일 전`;
    }
  };

  return (
    <div className={`${isSubComment ? 'ml-10' : ''} w-full`}>
      <div className={`flex flex-col gap-9  mt-[50px]`}>
        {/* 프로필 */}
        <div className="h-[66px] flex flow-row items-end gap-5">
          <Avatar>
            {/* https://github.com/shadcn.png */}
            <AvatarImage
              src={data.profileImageUrl || 'https://github.com/shadcn.png'}
              alt="@shadcn"
            />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <span className="text-[20px] font-semibold">{data.author}</span>
            <span className="text-[20px] text-grey300 font-normal">
              {formatDate(data.createdAt)}
            </span>
          </div>
        </div>

        {/* 댓글 내용 */}
        <div className="prose max-w-none">
          <Viewer initialValue={data.content} />
        </div>

        {/* 댓글 액션 버튼들 */}
        {!isSubComment && (
          <div className={`flex gap-4 ${reply ? 'mb-[27px]' : ''}`}>
            {data.subComment && data.subComment.length > 0 && (
              <Button
                className="bg-white rounded-[20px] hover:bg-white border border-grey100"
                onClick={toggleSubComments}
              >
                <ChatBubbleOvalLeftIcon className="w-[24px] text-primary300" />
                <span className="text-[16px] text-black">
                  {showSubComments ? '답글 숨기기' : `답글 보기 (${data.subComment.length})`}
                </span>
              </Button>
            )}
            <Button
              className="bg-white rounded-[20px] hover:bg-white border border-grey100"
              onClick={toggleReply}
            >
              <ChatBubbleOvalLeftIcon className="w-[24px] text-primary300" />
              <span className="text-[16px] text-black">댓글쓰기</span>
            </Button>
          </div>
        )}

        {/* 대댓글 목록 */}
        {showSubComments && data.subComment && data.subComment.length > 0 && (
          <div className="mt-4">
            {data.subComment.map((subComment) => (
              <Comment key={subComment.id} data={subComment} isSubComment />
            ))}
          </div>
        )}

        {/* 대댓글 입력 폼 */}
        {!isSubComment && reply && (
          <ReplyComment
            reply={reply}
            parentId={data.id}
            whereId={whereId}
            fetchComments={fetchComments}
          />
        )}
      </div>
    </div>
  );
};

export default Comment;
