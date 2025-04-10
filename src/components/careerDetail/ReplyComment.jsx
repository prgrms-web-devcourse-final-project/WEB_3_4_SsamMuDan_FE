import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';
import { useRef, useState, useCallback } from 'react';
import { Button } from '../ui/button';
import { COTREE_ENDPOINT } from '@/api/endpoint';
import coTreeAPI from '@/config/cotree';
import postComment from '@/api/careerDetail/postComment';

const ReplyComment = ({ parentId, whereId, fetchComments }) => {
  const editorRef = useRef(null);
  const [content, setContent] = useState('');
  const [isEditing, setIsEditing] = useState(true);

  const handleEditorClose = useCallback(() => {
    setIsEditing(false);
  }, []);

  const handleImageUpload = async (file) => {
    const formData = new FormData();
    formData.append('directory', 'COMMUNITY_BOARD');
    formData.append('file', file);

    try {
      const response = await coTreeAPI.post(COTREE_ENDPOINT.postImg, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response.data.isSuccess) {
        return response.data.data.saveUrl;
      }
      console.error('파일 업로드 실패');
      return null;
    } catch (error) {
      console.error('업로드 중 오류 발생:', error);
      return null;
    }
  };

  const handleRegister = async () => {
    if (!editorRef.current) return;

    const markdownContent = editorRef.current.getInstance().getMarkdown();
    setContent(markdownContent);

    try {
      const response = await postComment({
        whereId: Number(whereId),
        category: 'RESUME',
        content: markdownContent,
        commentId: parentId,
      });
      console.log(response);

      if (response.isSuccess) {
        console.log('대댓글 등록 성공');
        fetchComments();
        setIsEditing(false);
      }
    } catch (error) {
      console.error('대댓글 등록 실패:', error);
    }
  };

  if (!isEditing) {
    return null;
  }

  return (
    <div className="mb-[27px]">
      <div className="flex ml-[20px] mt-[-20px]">
        <img src="/icons/reply-arrow.svg" alt="답글방향키" className="w-[20px]" />
        <div className="h-[66px] flex flow-row items-end gap-5 ml-[15px] items-center mb-[10px]">
          <Avatar className="w-[50px] h-[50px]">
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <span className="text-[18px] font-semibold">밥밥띠라라</span>
            <span className="text-[18px] text-grey300 font-normal">2024.11.15</span>
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
          hooks={{
            addImageBlobHook: async (blob, callback) => {
              const imageUrl = await handleImageUpload(blob);
              if (imageUrl) {
                callback(imageUrl, '');
              }
            },
          }}
        />
        <div className="w-full mt-2 flex flex-row justify-end gap-5">
          <Button onClick={handleRegister} className="bg-primary300 hover:bg-primary300">
            등록하기
          </Button>
          <Button onClick={handleEditorClose} className="bg-white text-black hover:bg-white">
            닫기
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ReplyComment;
