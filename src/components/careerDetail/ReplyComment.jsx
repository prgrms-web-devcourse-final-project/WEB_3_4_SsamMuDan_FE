import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';
import { useRef } from 'react';
import { Button } from '../ui/button';

const ReplyComment = () => {
  const editorRef = useRef(null);
  const handleRegister = () => {
    if (editorRef.current) {
      setContent(editorRef.current.getInstance().getMarkdown()); // 마크다운 저장
    }
  };
  return (
    <div className="mb-[27px]">
      <div className="flex ml-[20px] mt-[-20px]">
        <img src="/icons/reply-arrow.svg" alt="답글방향키" className="w-[20px]" />
        <div className=" h-[66px] flex flow-row items-end gap-5 ml-[15px] items-center mb-[10px]">
          <Avatar className="w-[50px] h-[50px]">
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className="flex flex-col ">
            <span className="text-[18px] font-semibold">밥밥띠라라</span>
            <span className="text-[18px] text-grey300 font-normal ">2024.11.15</span>
          </div>
        </div>
      </div>
      <div className="ml-[50px]">
        <Editor
          initialValue=" "
          previewStyle="vertical"
          height="300px"
          initialEditType="markdown"
          useCommandShortcut={true}
          ref={editorRef}
        />
        <div className="w-full mt-2 flex flex-row  justify-end gap-5">
          <Button onClick={handleRegister} className="bg-primary300 hover:bg-primary300 ">
            등록하기
          </Button>
          <Button
            onClick={() => setIsEditing(false)}
            className="bg-white text-black hover:bg-white  "
          >
            닫기
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ReplyComment;
