import Layout from '@/common/Layout/Layout';
import { Editor } from '@toast-ui/react-editor';
import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import PrimarySelect from '@/components/common/PrimarySelect';
import CommunityFloating from '@/components/communityDetail/CommunityFloating';
import getImgUrl from '@/api/careerDetail/getImgUrl';

const CommunityWrite = () => {
  const [category, setCategory] = useState('게시판');
  const [isEditing, setIsEditing] = useState(true);
  const [content, setContent] = useState('');
  const editorRef = useRef(null);
  const navigate = useNavigate();

  // 스크롤 맨 위로 이동
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, []);

  const handleRegister = () => {
    if (editorRef.current) {
      const markdown = editorRef.current.getInstance().getMarkdown();
      setContent(markdown);
      setIsEditing(false);

      alert('게시글이 작성되었습니다.');
      navigate('/community');
    }
  };

  const selectList = ['게시판', '코드 리뷰'];

  const floatingBadge = {
    delete: {
      style: '!border-[#9E3131] !bg-primary400 text-white cursor-pointer',
      text: '삭제하기',
    },
    modify: {
      style: '!border-[#0C8C5F] !bg-primary300 text-white cursor-pointer',
      text: '수정하기',
    },
    completed: {
      style: '!border-[#4A4747] !bg-[#393838] text-white cursor-pointer',
      text: '완료하기',
    },
  };

  // 이미지 업로드 핸들러
  const handleImageUpload = async (blob) => {
    try {
      const imageUrl = await getImgUrl(blob);
      return imageUrl;
    } catch (error) {
      console.error('이미지 업로드 중 오류 발생:', error);
      return null;
    }
  };

  return (
    <Layout>
      <div className="w-[1246px] mx-auto mt-10 mb-20 flex">
        <div className="flex-1 mr-9">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* 카테고리 선택 */}
            <PrimarySelect
              selectList={selectList}
              placeholder="게시판"
              customstyle="h-[35px] font-medium mb-7"
            />

            {/* 제목 */}
            <input
              type="text"
              placeholder="제목을 입력해 주세요."
              className="w-full text-[40px] font-semibold mb-6 placeholder:text-gray-400 focus:outline-none focus:border-primary300 focus:ring-1 focus:ring-primary300 transition-all duration-200 ease-in-out"
            />

            {/* 안내 문구(?) */}
            <div className="text-sm text-gray-400 mb-4 leading-6">
              <p>• 마크다운, 단축키를 이용해서 편리하게 글을 작성할 수 있어요.</p>
              <p>• 먼저 유사한 질문이 있는지 검색해 보세요.</p>
              <p>• 서로 예의를 지키며 존중하는 문화를 만들어가요.</p>
            </div>

            {/* 마크다운 에디터 */}
            {isEditing && (
              <Editor
                initialValue=""
                previewStyle="vertical"
                height="500px"
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
            )}
          </motion.div>
        </div>

        {/* 우측 플로팅 버튼 */}
        <div className="flex-col">
          <div className="fixed top-[300px] right-[100px] max-w-[800px] space-y-3">
            <CommunityFloating
              text={floatingBadge.modify.text}
              type="modify"
              style={floatingBadge.modify.style}
            />
            <CommunityFloating
              text={floatingBadge.delete.text}
              type="delete"
              style={floatingBadge.delete.style}
            />
            <CommunityFloating
              text={floatingBadge.completed.text}
              type="completed"
              style={floatingBadge.completed.style}
              onClick={handleRegister}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CommunityWrite;
