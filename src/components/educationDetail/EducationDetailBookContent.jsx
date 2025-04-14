import { useEffect, useState } from 'react';
import EducationDetailIntro from './EducationDetailIntro';
import CategoryTab from '../common/CategoryTab';
import { StarIcon } from 'lucide-react';
import PrimarySelect from '../common/PrimarySelect';
import EducationDetailReview from './EducationDetailReview';
import PrimaryButton from '../common/PrimaryButton';
import EducationBookDetailIntro from './EducationBookDetailIntro';
import getTechBookReview from '@/api/techbookDetail/techbookReview';
import { useNavigate, useSearchParams } from 'react-router-dom';
import LottieEmpty from '../common/LottieEmpty';
import { Skeleton } from '../ui/skeleton';

const EducationDetailBookContent = ({ techBookInfo, code }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const tabs = [
    { label: '강의소개', value: '강의소개' },
    { label: '수강평', value: '수강평' },
  ];
  const [hasMore, setHasMore] = useState(true);
  const [totalList, setTotalList] = useState();
  const [currentTab, setCurrentTab] = useState('강의소개');
  const sortName = { 최신순: 'LATEST', 평점수: 'RATING' };
  const [reviewList, setReviewList] = useState([]);
  const [reviewavg, setReviewAvg] = useState();
  const totalreviewAverage = Math.floor(reviewList.length > 0 ? reviewavg : 0);
  const [totalReviewNum, setTotalReviewNum] = useState(0);
  const category = searchParams.get('category') || '강의소개';
  const sortOption = searchParams.get('sort') || 'LATEST';
  const page = Number(searchParams.get('page')) || 0;
  const [isLoading, setIsLoading] = useState(false);

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
        setIsLoading(true);
        const response = await getTechBookReview(code, page, sortOption);
        const newReviews = response.data.content || [];
        const totalList = response.data.totalElements || [];
        const avgreview = response.data.reviewAvgRating;

        setReviewAvg(avgreview);
        setTotalReviewNum(totalList);
        setReviewList((prev) => {
          const updatedList = page === 0 ? newReviews : [...prev, ...newReviews];
          const currentCount = updatedList.length;
          const hasMoreReviews = currentCount < totalList;

          setHasMore(hasMoreReviews);
          return updatedList;
        });
      } catch (error) {
        console.error('Error fetching tech book review:', error);
        setReviewList([]);
        setHasMore(false);
      } finally {
        setIsLoading(false);
      }
    }
    fetchReviewList();
  }, [code, page, sortOption, category]);

  // 로딩 만들엇다
  const loadingRender = () => {
    return (
      <div className="w-[760px] ">
        {Array.from({ length: 10 }).map((_, index) => (
          <div key={index} className="flex flex-col space-y-3 mb-[37px]">
            <Skeleton className="h-[100px] w-full rounded-xl" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-[250px]" />
              <Skeleton className="h-4 w-[200px]" />
            </div>
          </div>
        ))}
      </div>
    );
  };

  // 아무것도 없을때
  const noneRender = () => {
    return (
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <LottieEmpty message={'리뷰가 없어요. \n 리뷰를 기다리고 있어요!'} />
      </div>
    );
  };

  return (
    <div className="w-[870px]  py-10">
      <div className="mb-3">
        <CategoryTab
          tabs={tabs}
          currentTab={category}
          onTabChange={handleTabChange}
          cateColor="#00be7b"
        />
      </div>
      {category === '강의소개' && (
        <div>
          <EducationBookDetailIntro
            content={techBookInfo?.techBookPreviewUrl}
            introduction={techBookInfo?.introduction}
            totalpage={techBookInfo?.techBookPage}
          />
        </div>
      )}{' '}
      {category === '수강평' && (
        <div className="bg-white rounded-[15px] border p-4">
          {/* 수강평 별점 요약 배너 */}
          <div className="bg-[#FAFAFA] w-[760px] h-[248px] rounded-[15px] border mb-6 mx-auto flex items-center justify-center relative">
            <div className="text-center">
              <p className="text-4xl font-bold mb-2">
                {reviewList.length > 0 ? totalreviewAverage : 0}
              </p>
              <div className="flex items-center justify-center gap-1 mb-2">
                {Array(totalreviewAverage)
                  .fill()
                  .map((_, index) => (
                    <StarIcon key={index} className="w-[32px] h-[32px] text-yellow-400" />
                  ))}
              </div>
              <p className="text-lg text-gray-400">{totalReviewNum}개의 수강평</p>
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

          {/* 수강평 리스트 */}
          <div className=" text-sm text-gray-700 min-h-[500.5px]">
            {/* {reviewList.map((item, index) => (
              <EducationDetailReview key={index} reviewinfo={item} />
            ))} */}
            {isLoading
              ? loadingRender()
              : totalReviewNum === 0
                ? noneRender()
                : reviewList.map((item, index) => (
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

export default EducationDetailBookContent;
