import Layout from '@/common/Layout/Layout';
import { Editor } from '@toast-ui/react-editor';
import codeSyntaxHighlight from '@toast-ui/editor-plugin-code-syntax-highlight';
import Prism from 'prismjs';
import 'prismjs/themes/prism.css';
import { useEffect, useRef, useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { useNavigate, useSearchParams } from 'react-router-dom';
import PrimarySelect from '@/components/common/PrimarySelect';
import CommunityFloating from '@/components/communityDetail/CommunityFloating';
import postCreateCommunity from '@/api/community/postCreateCommunity';
import getCommunityCategory from '@/api/community/getCommunityCategory';
import EditProfileModal from '@/components/mypage/EditProfileModal';
import ActionButton from '@/components/common/ActionButton';
import useAuthStore from '@/store/useAuthStore';
import getCommunityDetail from '@/api/community/getCommunityDetail';
import editCommunityPost from '@/api/community/editCommunityPost';
import { COTREE_ENDPOINT } from '@/api/endpoint';
import coTreeAPI from '@/config/cotree';

const CommunityWrite = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [categoryItem, setCategoryItem] = useState({});
  const [searchParams, setSearchParams] = useSearchParams();
  const [isEditing, setIsEditing] = useState(true);
  const [title, setTitle] = useState();
  const [content, setContent] = useState('');
  const [selectedCategoryName, setSelectedCategoryName] = useState('');
  const selectList = ['게시판', '코드 리뷰'];
  const editorRef = useRef(null);
  const IsLogin = useAuthStore((state) => state.isLoggedIn);
  const navigate = useNavigate();
  const [postId, setPostId] = useState(null);

  //  초기 진입 시 기본값 세팅
  useEffect(() => {
    const newParams = new URLSearchParams(searchParams);
    let changed = false;

    if (!searchParams.get('category')) {
      newParams.set('category', '게시판');
      changed = true;
    }

    if (changed) setSearchParams(newParams);

    if (!IsLogin) {
      alert('로그인 후 이용가능한 서비스입니다.');
      navigate('/login');
    }
  }, [IsLogin]);

  //정렬 핸들러
  const handleCateChange = (categoryId) => {
    const categoryName = Object.entries(categoryItem).find(
      ([_, value]) => value === Number(categoryId),
    )?.[0];

    if (categoryName) {
      setSearchParams({ category: categoryName });
      setSelectedCategoryName(categoryName);
      console.log('선택된 카테고리 이름:', categoryName);
    } else {
      console.warn('유효하지 않은 카테고리 ID입니다:', categoryId);
    }
  };

  // 타이틀

  // 카테고리 가져오기
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
    const apiCategory = async () => {
      try {
        const response = await getCommunityCategory();
        // console.log('response', response);
        const map = {};
        response.data.forEach((item) => {
          map[item.name] = item.id;
        });
        setCategoryItem(map);
        console.log(map);

        // URL에 category 없으면 기본값 추가
        const currentCategory = searchParams.get('category');
        if (!currentCategory) {
          setSearchParams({ category: Object.keys(map)[0] }); // '게시판' 등
          setSelectedCategoryName(Object.keys(map)[0]);
        } else {
          setSelectedCategoryName(currentCategory);
        }
      } catch (error) {
        console.error('Error fetching career info:', error);
        throw error;
      }
    };
    apiCategory();
  }, []);

  // 완료

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

  const handleComplete = async () => {
    const categoryId = categoryItem[selectedCategoryName];
    const markdown = editorRef.current?.getInstance().getMarkdown();

    if (!title || !markdown) {
      alert('제목과 내용을 모두 입력해주세요!');
      return;
    }

    try {
      if (postId) {
        await editCommunityPost(postId, {
          communityCategoryId: categoryId,
          title,
          content: markdown,
        });
        alert('게시글이 수정되었습니다!');
        navigate(`/communityDetail/${postId}`); // 게시글 수정 후 해당 상세페이지로 이동
      } else {
        const response = await postCreateCommunity({
          communityCategoryId: categoryId,
          title,
          content: markdown,
        });

        const newPostId = response?.data?.boardId;
        alert('게시글이 성공적으로 작성되었습니다!');
        if (newPostId) {
          navigate(`/communityDetail/${newPostId}`); // 새로운 게시글 작성 후 해당 상세페이지로 이동
        } else {
          navigate('/community');
        }
      }
    } catch (error) {
      console.error('게시글 처리 실패:', error);
    }
  };

  const floatingBadge = {
    completed: {
      style: '!border-[#4A4747] !bg-[#393838] text-white cursor-pointer',
      text: '완료하기',
    },
    cancel: {
      text: '취소',
    },
  };

  // 게시글 수정 모드일 때 기존 데이터 가져오기
  useEffect(() => {
    const boardId = searchParams.get('id'); // URL에서 id 추출
    if (boardId) {
      setPostId(boardId); // 저장해두기
      const fetchDetail = async () => {
        try {
          const res = await getCommunityDetail(boardId);
          setTitle(res.title);
          setSelectedCategoryName(res.categoryName);
          editorRef.current?.getInstance().setMarkdown(res.content);
        } catch (error) {
          console.error('수정용 게시글 불러오기 실패:', error);
        }
      };
      fetchDetail();
    }
  }, []);

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
              selectList={categoryItem}
              placeholder="게시판"
              customstyle="h-[35px] font-medium mb-7"
              onSortChange={handleCateChange}
            />

            {/* 제목 */}
            <input
              type="text"
              placeholder="제목을 입력해 주세요."
              className="w-full text-[40px] font-semibold mb-6 placeholder:text-gray-400 focus:outline-none focus:border-primary300 focus:ring-1 focus:ring-primary300 transition-all duration-200 ease-in-out"
              value={title || ''}
              onChange={(e) => setTitle(e.target.value)}
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
                plugins={[[codeSyntaxHighlight, { highlighter: Prism }]]}
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
              text={floatingBadge.completed.text}
              type="completed"
              style={floatingBadge.completed.style}
              eventhandler={handleComplete}
            />
            <CommunityFloating
              text={floatingBadge.cancel.text}
              type="cancel"
              eventhandler={() => setIsModalOpen(true)}
            />
          </div>
        </div>
      </div>
      {/* 나가기 모달 */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
          <div
            className="bg-white rounded-2xl p-8 w-[521px] text-center"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="font-esamanru text-2xl mb-2">작성 취소</h2>

            <div className="text-sm text-grey700 font-medium mb-8">
              앗! 작성 중인 글이 있어요. 정말 이동하시겠어요?
            </div>
            <div className="flex justify-between">
              <ActionButton
                text="나가기"
                customeStyle="!w-[220px] h-[42px] font-semibold !text-grey300 !border-black bg-white"
                onClick={() => {
                  navigate('/community');
                }}
              />
              <ActionButton
                text="취소"
                customeStyle="!w-[220px] h-[42px] font-semibold text-primary300 border border-primary300"
                onClick={() => {
                  setIsModalOpen(false);
                }}
              />
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default CommunityWrite;
