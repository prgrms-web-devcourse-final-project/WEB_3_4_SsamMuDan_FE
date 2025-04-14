import getTechBookReview from '@/api/techbookDetail/techbookReview';
import Badge from '@/common/Badge';
import { StarIcon, UserIcon } from '@heroicons/react/24/solid';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const EducationDetailBookBanner = ({ techBookInfo, code }) => {
  const [reviewavg, setReviewAvg] = useState();
  const totalreviewAverage = Math.floor(reviewavg ? reviewavg : 0);
  const handleOpenPdf = () => {
    window.open(techBookInfo.techBookUrl, '_blank');
  };
  const rawRating = techBookInfo?.avgRating;
  console.log('ratingsssssssssssssss', techBookInfo);

  useEffect(() => {
    async function fetchReviewList() {
      try {
        const response = await getTechBookReview(code, 0, 'LATEST');
        const avgreview = response.data.reviewAvgRating;
        setReviewAvg(avgreview);
      } catch (error) {
        console.error('Error fetching tech book review:', error);
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
        <div className="flex flex-col justify-center max-w-[800px] ml-6 line-clamp-1">
          <div className="flex gap-4 mb-4">
            <Badge
              text={techBookInfo?.educationLevel}
              className="px-[20px] h-[32px] bg-[#FFEBE9] text-primary400"
            />
            {techBookInfo?.educationCategoryList.map((item) => (
              <Badge
                key={item}
                text={item}
                className="px-[20px] h-[32px] bg-[#DAF8E6] text-[#1A8245]"
              />
            ))}
          </div>
          <h1 className="text-4xl font-semibold mb-2">{techBookInfo?.title}</h1>
          <p className="text-lg text-gray-200 mb-10">{techBookInfo?.description}</p>
          <div className="flex items-center gap-2 text-yellow-400 mb-2">
            <span className="text-lg">{totalreviewAverage}</span>
            <div className="flex items-center justify-center gap-1 ">
              {/* /techBookInfo.avgRating가 나온다면 저기에다가 array() 안에 넣어도 될것같다/ */}
              {Array(totalreviewAverage)
                .fill()
                .map((_, index) => (
                  <StarIcon key={index} className="w-5 h-5 text-yellow-400" />
                ))}
            </div>{' '}
          </div>
          <div className="flex items-center gap-2">
            <UserIcon className="w-5 h-5" />
            <span className="text-white text-lg">{techBookInfo?.writer}</span>
          </div>
        </div>
      </div>
      {/* techBookPreviewUrl */}
      <div className="absolute   bottom-[-40px] right-[83px]">
        <motion.div
          whileHover={{ y: -4 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          className="w-[230.48px] h-[300.44px] overflow-hidden"
        >
          {techBookInfo?.isPaymentDone ? (
            <div onClick={handleOpenPdf} className="!max-[120%] h-[100%] cursor-pointer">
              <img
                src={techBookInfo?.techBookThumbnailUrl}
                alt="테크북 이미지"
                className=" cursor-pointer max-[120%] h-[100%] "
              />
              <img
                src="/icons/video-button.svg"
                alt="재생"
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[95px] h-[90px]"
              />
            </div>
          ) : (
            <img
              src={techBookInfo?.techBookThumbnailUrl}
              alt="테크북 이미지"
              className="!max-[120%] h-[100%] cursor-pointer"
              // onClick={handleOpenPdf}
            />
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default EducationDetailBookBanner;
