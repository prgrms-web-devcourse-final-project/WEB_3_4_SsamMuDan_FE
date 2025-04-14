import getTechTubeReview from '@/api/techbookDetail/techtubeReview';
import Badge from '@/common/Badge';
import { StarIcon, UserIcon } from '@heroicons/react/24/solid';
import { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';

const EducationDetailBanner = ({ techTubeInfo, code }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [reviewavg, setReviewAvg] = useState();
  const totalreviewAverage = Math.floor(reviewavg ? reviewavg : 0);

  const handleVideoClick = () => {
    setIsModalOpen(true);
  };

  // 결제시 보여주는 비디오
  const techTubeVideo = () => {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
        <div
          className="bg-white rounded-2xl p-8 w-[800px] h-[500px] text-center"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex justify-between items-start">
            <h2 className="text-left font-esamanru text-black text-2xl mb-8">강의 동영상</h2>
            <button
              onClick={() => setIsModalOpen(false)}
              className=" text-[#c6c6c6] text-2xl hover:scale-110 transition font-semibold"
            >
              ✕
            </button>
          </div>
          <ReactPlayer url={techTubeInfo.techTubeUrl} controls playing width="100%" height="80%" />
        </div>
      </div>
    );
  };

  // 리뷰 별점
  useEffect(() => {
    async function fetchReviewList() {
      try {
        const response = await getTechTubeReview(code, 0, 'LATEST');
        const avgreview = response.data.reviewAvgRating;

        setReviewAvg(avgreview);
      } catch (error) {
        console.error('Error fetching tech tube review:', error);
      }
    }

    fetchReviewList();
  }, []);
  return (
    <div
      className="relative w-full max-w-[1246px] mx-auto h-[334px] rounded-[30px] shadow-2xl bg-cover bg-center px-10"
      style={{ backgroundImage: "url('/images/education-bg.png')" }}
    >
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-between text-white px-6">
        <div className="flex flex-col justify-center max-w-[600px] ml-6">
          <div className="flex gap-2 mb-4 flex-nowrap">
            <Badge
              text={techTubeInfo?.educationLevel}
              className="px-[20px] h-[32px] bg-[#FFEBE9] text-primary400 whitespace-nowrap"
            />
            {techTubeInfo?.educationCategoryList.map((item) => (
              <Badge
                key={item}
                text={item}
                className="px-[20px] h-[32px] bg-[#DAF8E6] text-[#1A8245] whitespace-nowrap"
              />
            ))}
          </div>
          <h1 className="text-4xl font-semibold mb-2 line-clamp-1">{techTubeInfo?.title}</h1>
          <p className="text-lg text-gray-200 mb-10">{techTubeInfo?.description}</p>
          <div className="flex items-center gap-2 text-yellow-400 mb-2">
            <span className="text-lg">{totalreviewAverage}</span>
            <div className="flex items-center justify-center gap-1 mb-2">
              {Array(totalreviewAverage)
                .fill()
                .map((_, index) => (
                  <StarIcon key={index} className="w-5 h-5 text-yellow-400" />
                ))}
            </div>{' '}
          </div>
          <div className="flex items-center gap-2">
            <UserIcon className="w-5 h-5" />
            <span className="text-white text-lg">{techTubeInfo?.writer}</span>
          </div>
        </div>

        {/* 비디오 플레이어 */}
        <div className="w-[400px] h-[288px] rounded-[20px] overflow-hidden shadow-md relative">
          {techTubeInfo?.isPaymentDone ? (
            <div onClick={handleVideoClick} className="cursor-pointer">
              <img src={techTubeInfo?.thumbnailUrl} alt="techtube썸네일" className="w-full" />
              <img
                src="/icons/video-button.svg"
                alt="재생"
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[95px] h-[90px]"
              />
            </div>
          ) : (
            <img src={techTubeInfo?.thumbnailUrl} alt="techtube썸네일" className="w-full" />
          )}
        </div>
        {/*  결제시 보여줄 동영상 */}
        {techTubeInfo?.isPaymentDone && isModalOpen && techTubeVideo()}
      </div>
    </div>
  );
};

export default EducationDetailBanner;
