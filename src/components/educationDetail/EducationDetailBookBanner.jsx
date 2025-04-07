import Badge from '@/common/Badge';
import { StarIcon, UserIcon } from '@heroicons/react/24/solid';
import { useState } from 'react';
import ReactPlayer from 'react-player';
import { motion } from 'framer-motion';

const EducationDetailBookBanner = ({ techBookInfo }) => {
  return (
    <div
      className="relative w-full max-w-[1246px] mx-auto h-[334px] rounded-[30px] shadow-2xl bg-cover bg-center px-10"
      style={{ backgroundImage: "url('/images/education-bg.png')" }}
    >
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-between text-white px-6">
        <div className="flex flex-col justify-center max-w-[600px] ml-6">
          <div className="flex gap-2 mb-4">
            <Badge
              text={techBookInfo?.educationLevel}
              className="w-[64px] h-[32px] bg-[#FFEBE9] text-primary400"
            />
            {techBookInfo?.educationCategories.map((item) => (
              <Badge
                id={item}
                text={item}
                className="w-[84px] h-[32px] bg-[#DAF8E6] text-[#1A8245]"
              />
            ))}
          </div>
          <h1 className="text-4xl font-semibold mb-2">{techBookInfo?.title}</h1>
          <p className="text-lg text-gray-200 mb-10">{techBookInfo?.description}</p>
          <div className="flex items-center gap-2 text-yellow-400 mb-2">
            <span className="text-lg">{techBookInfo?.avgRating}</span>
            <div className="flex items-center justify-center gap-1 mb-2">
              {/* /techBookInfo.avgRating가 나온다면 저기에다가 array() 안에 넣어도 될것같다/ */}
              {Array(5)
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
      {/* 책이미지가 어떻게 나올지 몰라서 외곽을 잡았음 */}
      <div className="absolute   bottom-[-40px] right-[83px]">
        <motion.div
          whileHover={{ y: -4 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          className="w-[230.48px] h-[300.44px] overflow-hidden"
        >
          <img
            src={techBookInfo?.techBookThumbnailUrl}
            alt="테크북 이미지"
            className="!max-[120%] h-[100%]"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default EducationDetailBookBanner;
