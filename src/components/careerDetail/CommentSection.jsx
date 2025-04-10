import { Button } from '@/components/ui/button';
import { useState, useRef, useCallback, useEffect } from 'react';
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';
import Comment from '@/components/careerDetail/Comment';
import CustomPagination from '../common/CustomPagination';
import { COTREE_ENDPOINT } from '@/api/endpoint';
import coTreeAPI from '@/config/cotree';
import getComment from '@/api/careerDetail/getComment';
import { useParams } from 'react-router-dom';
import postComment from '@/api/careerDetail/postComment';

const CommentSection = ({ id }) => {
  const { id: whereId } = useParams();
  const [isEditing, setIsEditing] = useState(false);
  const editorRef = useRef(null);
  const [commentData, setCommentData] = useState([]);
  const [commentPage, setCommentPage] = useState(0);
  const [commentTotalElements, setCommentTotalElements] = useState(0);
  const [commentTotalPages, setCommentTotalPages] = useState(0);
  const [commentState, setCommentState] = useState({
    content: '',
    category: 'RESUME',
    whereId,
    commentId: '',
  });

  const commentFetchData = async () => {
    try {
      const getData = await getComment(whereId, commentPage);
      setCommentData(getData.content);
      setCommentTotalElements(getData.totalElements);
      setCommentTotalPages(getData.totalPages);
      console.log(getData.totalPages);
    } catch (error) {
      console.error('Error fetching tech stack options:', error);
    }
  };

  const handlePageChange = (newPage) => {
    setCommentPage(newPage - 1);
  };

  useEffect(() => {
    commentFetchData();
  }, [commentPage]);

  const handleImageUpload = useCallback(async (file) => {
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
  }, []);

  const handleRegister = async (index) => {
    if (!editorRef.current) return;

    const markdownContent = editorRef.current.getInstance().getMarkdown();

    try {
      const response = await postComment({
        content: markdownContent,
        category: 'RESUME',
        whereId: Number(whereId),
        commentId: '',
      });

      if (response.isSuccess) {
        console.log('댓글 등록 성공');
        // 댓글 등록 후 목록 새로고침
        commentFetchData();
      }
    } catch (error) {
      console.error('댓글 등록 실패:', error);
    }

    setIsEditing(false);
  };

  const handleEditorOpen = useCallback(() => setIsEditing(true), []);
  const handleEditorClose = useCallback(() => setIsEditing(false), []);

  const handleEditorChange = useCallback(() => {
    if (editorRef.current) {
      const markdownContent = editorRef.current.getInstance().getMarkdown();
      setCommentState((prevState) => ({
        ...prevState,
        content: markdownContent,
      }));
    }
  }, []);

  const renderEditor = () => {
    if (!isEditing) {
      return (
        <div
          className="w-[1246px] h-[57px] rounded-[10px] border flex flex-col justify-center mt-2 cursor-pointer"
          onClick={handleEditorOpen}
        >
          <span className="ml-7">내용을 입력해주세요</span>
        </div>
      );
    }

    return (
      <div>
        <Editor
          initialValue=" "
          previewStyle="vertical"
          height="300px"
          initialEditType="markdown"
          useCommandShortcut={true}
          ref={editorRef}
          onChange={handleEditorChange}
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
          <Button
            onClick={() => handleRegister(commentPage)}
            className="bg-primary300 hover:bg-primary300"
          >
            등록하기
          </Button>
          <Button onClick={handleEditorClose} className="bg-white text-black hover:bg-white">
            닫기
          </Button>
        </div>
      </div>
    );
  };

  const renderComments = () => {
    if (!commentData || commentData.length === 0) return null;

    return commentData.map((comment, index) => (
      <div key={comment.id} className="w-full">
        <Comment data={comment} whereId={whereId} fetchComments={commentFetchData} />
      </div>
    ));
  };

  return (
    <div className="w-[1246px] mx-auto">
      <div className="w-full border-b border-black h-[50px]">
        <div className="text-[20px] font-[500]">
          댓글 <span className="text-primary300 font-semibold">{commentTotalElements || 0}</span>
        </div>
      </div>

      <div className="mt-[40px]">
        {renderEditor()}
        {renderComments()}

        <div className="my-[80px]">
          <CustomPagination
            totalPages={commentTotalPages}
            currentPage={commentPage + 1}
            onChangePage={handlePageChange}
          />
        </div>
      </div>
    </div>
  );
};

export default CommentSection;
