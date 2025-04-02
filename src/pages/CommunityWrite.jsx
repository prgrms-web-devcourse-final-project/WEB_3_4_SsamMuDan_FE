import Layout from '@/common/Layout/Layout';
import { Editor } from '@toast-ui/react-editor';
import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const CommunityWrite = () => {
  const [category, setCategory] = useState('게시판');
  const editorRef = useRef(null);
  const [isEditing, setIsEditing] = useState(true);
  const [content, setContent] = useState(''); // 저장된 마크다운 내용
  const navigate = useNavigate();

  const handleRegister = () => {
    if (editorRef.current) {
      const markdown = editorRef.current.getInstance().getMarkdown();
      setContent(markdown);
      setIsEditing(false);
      console.log('게시글 저장된 내용 확인:', markdown);

      alert('게시글이 작성되었습니다.');
      navigate('/community');
    }
  };

  return (
    <Layout>
      <div className="w-[1246px] mx-auto mt-10 mb-20 flex">
        {/* 좌측 카테고리 탭 */}
        <div className="w-[220px] h-[100px] border border-grey100 rounded-[10px] flex flex-col justify-center items-center gap-2 mr-9">
          {['게시판', '코드리뷰'].map((item) => (
            <div
              key={item}
              onClick={() => setCategory(item)}
              className={`w-[200px] h-[38px] flex items-center justify-start px-4 rounded-[10px] cursor-pointer ${
                category === item
                  ? 'bg-[#E5F9F1] text-black font-semibold'
                  : 'bg-white text-grey400'
              }`}
            >
              {item}
            </div>
          ))}
        </div>

        <div className="flex-1 max-w-[880px] mr-9">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-1 max-w-[880px]"
          >
            {/* 제목 */}
            <input
              type="text"
              placeholder="제목을 입력해 주세요."
              className="w-full text-[40px] font-semibold mb-6 placeholder:text-gray-400 focus:outline-none focus:border-primary300 focus:ring-1 focus:ring-primary300 transition-all duration-200 ease-in-out"
            />

            <div className="text-sm text-gray-400 mb-4 leading-6">
              <p>• 마크다운, 단축키를 이용해서 편리하게 글을 작성할 수 있어요.</p>
              <p>• 먼저 유사한 질문이 있는지 검색해 보세요.</p>
              <p>• 서로 예의를 지키며 존중하는 문화를 만들어가요.</p>
            </div>

            {/* 마크다운 에디터 */}
            {isEditing && (
              <>
                <Editor
                  initialValue=""
                  previewStyle="vertical"
                  height="500px"
                  initialEditType="markdown"
                  useCommandShortcut={true}
                  ref={editorRef}
                />
              </>
            )}
          </motion.div>
        </div>

        {/* 수정할 예정 */}
        {/* 우측 아이콘 & 버튼 */}
        <div className="flex-col">
          <div className="w-[80px] h-[49px] rounded-[10px] border flex justify-center mb-1">
            <span className="flex items-center gap-3">
              <img src="/icons/community-like.svg" className="w-4 h-4" />0
            </span>
          </div>
          <div className="w-[80px] h-[49px] rounded-[10px] border flex justify-center mb-1">
            <span className="flex items-center gap-3">
              <img src="/icons/community-eye.svg" className="w-4 h-4" />0
            </span>
          </div>
          <Button
            onClick={handleRegister}
            className="w-[80px] h-[49px] rounded-[10px] border flex justify-center"
          >
            작성하기
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default CommunityWrite;
