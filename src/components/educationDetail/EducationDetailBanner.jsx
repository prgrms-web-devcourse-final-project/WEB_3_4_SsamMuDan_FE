import Badge from '@/common/Badge';
import { StarIcon, UserIcon } from '@heroicons/react/24/solid';
import { useState } from 'react';
import ReactPlayer from 'react-player';

const EducationDetailBanner = ({ techTubeInfo }) => {
  const [openVideo, setOpenVideo] = useState(false); // 비디오 모달 열림 상태

  console.log('Dasdsads', techTubeInfo);
  const rawRating = techTubeInfo?.avgRating;
  const rating = Number.isFinite(rawRating) ? Math.floor(rawRating) : 0;
  console.log('rating', rating);
  return (
    <div
      className="relative w-full max-w-[1246px] mx-auto h-[334px] rounded-[30px] shadow-2xl bg-cover bg-center px-10"
      style={{ backgroundImage: "url('/images/education-bg.png')" }}
    >
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-between text-white px-6">
        <div className="flex flex-col justify-center max-w-[600px] ml-6">
          <div className="flex gap-2 mb-4">
            {/* <Badge text="입문" className="w-[64px] h-[32px] bg-[#FFEBE9] text-primary400" />
            <Badge text="웹 개발" className="w-[84px] h-[32px] bg-[#DAF8E6] text-[#1A8245]" />
            <Badge text="프론트엔드" className="w-[105px] h-[32px] bg-[#DAF8E6] text-[#1A8245]" />
            <Badge
              text="프로그래밍 언어"
              className="w-[135px] h-[32px] bg-[#DAF8E6] text-[#1A8245]"
            /> */}
            <Badge
              text={techTubeInfo?.educationLevel}
              className="px-[20px] h-[32px] bg-[#FFEBE9] text-primary400"
            />
            {techTubeInfo?.educationCategoryList.map((item) => (
              <Badge
                key={item.title}
                id={item}
                text={item}
                className="px-[20px] h-[32px] bg-[#DAF8E6] text-[#1A8245]"
              />
            ))}
          </div>
          <h1 className="text-4xl font-semibold mb-2 line-clamp-1">{techTubeInfo?.title}</h1>
          <p className="text-lg text-gray-200 mb-10">{techTubeInfo?.description}</p>
          <div className="flex items-center gap-2 text-yellow-400 mb-2">
            <span className="text-lg">{rating}</span>
            <div className="flex items-center justify-center gap-1 mb-2">
              {Array(rating)
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
        <div
          onClick={() => setOpenVideo(true)}
          className="w-[400px] h-[288px] rounded-[20px] overflow-hidden shadow-md relative cursor-pointer"
        >
          <img src={techTubeInfo?.thumbnailUrl} alt="techtube썸네일" className="h-full" />
          <img
            src="/icons/video-button.svg"
            alt="재생"
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[95px] h-[90px]"
          />
        </div>
        <div className="">{/* <ReactPlayer url={techTubeInfo?.thumbnailUrl} controls /> */}</div>
        {openVideo && (
          <div
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center"
            onClick={() => setOpenVideo(false)} // -> 모달 밖을 클릭 했을 때도 닫힘
          >
            {/* 닫기 버튼 */}
            <button
              onClick={() => setOpenVideo(false)}
              className="absolute top-6 right-6 text-white text-4xl hover:scale-110 transition"
            >
              ✕
            </button>

            {/* 모달 */}
            <div
              className="w-[90vw] max-w-[960px] aspect-video rounded-xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <ReactPlayer
                url="https://www.youtube.com/watch?v=4ezXhCuT2mw"
                controls
                playing
                width="100%"
                height="100%"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default EducationDetailBanner;
