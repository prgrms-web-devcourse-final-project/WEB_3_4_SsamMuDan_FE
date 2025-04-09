import { Button } from '@/components/ui/button';
import { useState, useRef } from 'react';
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';
import Comment from '@/components/careerDetail/Comment';
import CustomPagination from '../common/CustomPagination';
import getComment from '@/api/careerDetail/getComment';
import { useEffect } from 'react';
import postComment from '@/api/careerDetail/postComment';
import axios from 'axios';

const CommentSection = ({ id, data }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [content, setContent] = useState(''); // 저장된 내용
  const editorRef = useRef(null);

  const [postData, setPostData] = useState({
    content: content,
    category: 'RESUME',
    whereId: 9007199254740991,
    commentId: 9007199254740991,
  });

  // console.log(data);

  // 이미지 업로드
  const handleImageUpload = async (blob) => {
    const formData = new FormData();
    formData.append('directory', 'COMMUNITY_BOARD');
    formData.append('file', blob);

    try {
      const response = await axios.post('', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response.data.isSuccess) {
        const imageUrl = response.data.data.saveUrl;
        console.log('Uploaded image URL:', imageUrl);
        return imageUrl;
      } else {
        console.error('이미지 업로드 실패');
        return null;
      }
    } catch (error) {
      console.error('이미지 업로드 중 오류 발생:', error);
      return null;
    }
  };

  const handleRegister = () => {
    if (editorRef.current) {
      const markdownContent = editorRef.current.getInstance().getMarkdown();
      setContent(markdownContent); // 마크다운 저장
      console.log('Registered markdown content:', markdownContent); // 콘솔에 마크다운 내용 출력
      setIsEditing(false); // 에디터 닫기
    }
  };

  return (
    <>
      {/* 댓글 */}
      <div className="w-[1246px] mx-auto">
        {/* 제목 */}
        <div className="flex items-center border-b border-[#CFCFCF] pb-[15px] mt-[100px]">
          <div className="text-[20px] font-medium mr-[8px]">댓글</div>
          <div className="text-[22px] text-primary300 font-semibold">10</div>
        </div>
        {/* 댓글 */}
        <div className="mt-[40px]">
          {/* 클릭 시 Editor 표시 */}
          {!isEditing ? (
            <div
              className="w-[1246px] h-[57px] rounded-[10px] border flex flex-col justify-center mt-2 cursor-pointer mb-[100px]"
              onClick={() => setIsEditing(true)}
            >
              <span className="ml-7 text-grey400 text-[16px]">내용을 입력해주세요</span>
            </div>
          ) : (
            <div>
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
          )}

          {/* 저장된 내용 표시 */}
          {/* {content && (
            <div className="mt-4 p-4 border rounded">
              <h3 className="font-bold">등록된 내용:</h3>
              <p>{content}</p>
            </div>
          )} */}
          {/* 댓글 */}
          <Comment />
          <Comment />

          {/* 페이지네이션 */}
          <div className="my-[80px]">
            <CustomPagination />
          </div>
        </div>
      </div>
    </>
  );
};

export default CommentSection;
