import { useEffect, useRef, useState } from 'react';
import CategoryTab from '../common/CategoryTab';
import { StarIcon } from '@heroicons/react/24/solid';
import PrimarySelect from '@/components/common/PrimarySelect';
import EducationDetailReview from './EducationDetailReview';
import PrimaryButton from '../common/PrimaryButton';
import EducationDetailIntro from './EducationDetailIntro';
import { useNavigate, useSearchParams } from 'react-router-dom';
import getTechBookReview from '@/api/techbookDetail/techbookReview';
import getTechTubeReview from '@/api/techbookDetail/techtubeReview';
import { Editor } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor.css';

const EducationDetailContent = ({ techTubeInfo, code }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const tabs = [
    { label: '강의소개', value: '강의소개' },
    { label: '수강평', value: '수강평' },
  ];
  const [currentTab, setCurrentTab] = useState('강의소개');
  const sortName = { 최신순: 'LATEST', 평점수: 'RATING' };
  const [hasMore, setHasMore] = useState(true);
  const [reviewList, setReviewList] = useState([]);
  const reviewAverage = Math.floor(
    reviewList.length > 0
      ? reviewList.reduce((sum, item) => sum + item.rating, 0) / reviewList.length
      : 0,
  );
  const category = searchParams.get('category') || '강의소개';
  const sortOption = searchParams.get('sort') || 'LATEST';
  const page = Number(searchParams.get('page')) || 0;
  const [isEditing, setIsEditing] = useState(true);
  const editorRef = useRef(null);

  // 탭 변경 핸들러
  const handleTabChange = (tabValue) => {
    const newParams = new URLSearchParams(searchParams);
    newParams.set('category', tabValue);
    newParams.set('page', '0');
    newParams.delete('keyword');
    setReviewList([]);
    setHasMore(true);
    navigate({ search: newParams.toString() }, { replace: true });
  };

  //정렬 핸들러
  const handleSortChange = (newSortValue) => {
    const newParams = new URLSearchParams(searchParams);
    newParams.set('sort', newSortValue);
    newParams.set('page', '0');
    setReviewList([]);
    setHasMore(true);
    navigate({ search: newParams.toString() }, { replace: true });
  };

  // 더보기 핸들러
  const handleLoadMore = () => {
    const newParams = new URLSearchParams(searchParams);
    newParams.set('page', String(page + 1));
    navigate({ search: newParams.toString() }, { replace: true });
  };

  //  초기 진입 시 기본값 세팅
  useEffect(() => {
    const newParams = new URLSearchParams(searchParams);
    let changed = false;

    if (!searchParams.get('category')) {
      newParams.set('category', '강의소개');
      changed = true;
    }
    if (!searchParams.get('page')) {
      newParams.set('page', '0');
      changed = true;
    }
    if (!searchParams.get('sort')) {
      newParams.set('sort', 'LATEST');
      changed = true;
    }

    if (changed) {
      navigate({ search: newParams.toString() }, { replace: true }); // ✅ 이걸로 히스토리 덮기
    }
  }, []);

  useEffect(() => {
    async function fetchReviewList() {
      try {
        console.log('코오오오드', code);
        const response = await getTechTubeReview(code, page, sortOption);
        const newReviews = response.data.content || [];
        const totlaList = response.data.totalElements || [];

        console.log('response', response.data);
        if (page === 0) {
          setReviewList(newReviews);
        } else {
          setReviewList((prev) => [...prev, ...newReviews]);
        }

        const currentCount = page === 0 ? newReviews.length : reviewList.length + newReviews.length;
        if (currentCount >= totlaList || newReviews.length < 10) {
          setHasMore(false);
        }
      } catch (error) {
        console.error('Error fetching tech tube review:', error);
        setReviewList([]);
        setHasMore(false);
      }
    }
    fetchReviewList();
  }, [code, page, sortOption, category]);

  return (
    <div className="w-[870px]  py-10">
      <CategoryTab
        tabs={tabs}
        currentTab={category}
        onTabChange={handleTabChange}
        cateColor="#00be7b"
      />
      {category === '강의소개' && (
        <EducationDetailIntro introduction={techTubeInfo?.introduction} />
      )}{' '}
      {category === '수강평' && (
        <div className="bg-white rounded-[15px] border p-4">
          {/* 수강평 별점 요약 배너 */}
          <div className="bg-[#FAFAFA] w-[760px] h-[248px] rounded-[15px] border mb-6 mx-auto flex items-center justify-center relative">
            <div className="text-center">
              <p className="text-4xl font-bold mb-2">{reviewList.length > 0 ? reviewAverage : 0}</p>
              <div className="flex items-center justify-center gap-1 mb-2">
                {Array(reviewAverage)
                  .fill()
                  .map((_, index) => (
                    <StarIcon key={index} className="w-[32px] h-[32px] text-yellow-400" />
                  ))}
              </div>
              <p className="text-lg text-gray-400">{reviewList.length}개의 수강평</p>
            </div>
            <img
              src="/images/review-avatar.svg"
              alt="리뷰"
              className="absolute right-24 h-[188px]"
            />
          </div>

          {/* 정렬 드롭다운 */}
          <div className="flex justify-end mb-4">
            <PrimarySelect
              selectList={sortName}
              placeholder="최신순"
              customstyle="h-[46px]"
              onSortChange={handleSortChange}
            />
          </div>
          {/* 수강평쓰기 */}
          {isEditing && (
            <Editor
              // plugins={[[codeSyntaxHighlight, { highlighter: Prism }]]}
              initialValue=""
              previewStyle="none"
              height="300px"
              initialEditType="markdown"
              useCommandShortcut={true}
              ref={editorRef}
              hideModeSwitch={true} // 🔥 위에 모드 선택 탭 숨김
              // hooks={{
              //   addImageBlobHook: async (blob, callback) => {
              //     const imageUrl = await handleImageUpload(blob);
              //     if (imageUrl) {
              //       callback(imageUrl, '');
              //     }
              //   },
              // }}
            />
          )}

          {/* 수강평 리스트 */}
          <div className=" text-sm text-gray-700 min-h-[500.5px]">
            {reviewList.map((item, index) => (
              <EducationDetailReview key={index} reviewinfo={item} />
            ))}
          </div>

          {/* 더보기 버튼 */}
          {hasMore && (
            <div className="flex justify-center mt-6">
              <PrimaryButton text="더보기" width="760px" height="47px" onClick={handleLoadMore} />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default EducationDetailContent;
