import Badge from '@/common/Badge';
import { StarIcon, UserIcon } from '@heroicons/react/24/solid';
import { useState } from 'react';
import ReactPlayer from 'react-player';

const EducationDetailBookBanner = () => {
  return (
    <div
      className="relative w-full max-w-[1246px] mx-auto h-[334px] rounded-[30px] shadow-2xl bg-cover bg-center px-10"
      style={{ backgroundImage: "url('/images/education-bg.png')" }}
    >
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-between text-white px-6">
        <div className="flex flex-col justify-center max-w-[600px] ml-6">
          <div className="flex gap-2 mb-4">
            <Badge text="중급" className="w-[64px] h-[32px] bg-[#FFEBE9] text-primary400" />
            <Badge text="개발도구" className="w-[84px] h-[32px] bg-[#DAF8E6] text-[#1A8245]" />
          </div>
          <h1 className="text-4xl font-semibold mb-2">Git에 대한 모든 것(영문)</h1>
          <p className="text-lg text-gray-200 mb-10">
            강의 부가 설명 강의 부가 설명 강의 부가 설명
          </p>
          <div className="flex items-center gap-2 text-yellow-400 mb-2">
            <span className="text-lg">4.0</span>
            <div className="flex items-center justify-center gap-1 mb-2">
              {Array(5)
                .fill()
                .map((_, index) => (
                  <StarIcon key={index} className="w-5 h-5 text-yellow-400" />
                ))}
            </div>{' '}
          </div>
          <div className="flex items-center gap-2">
            <UserIcon className="w-5 h-5" />
            <span className="text-white text-lg">쌈무단</span>
          </div>
        </div>
      </div>
      {/* 책이미지가 어떻게 나올지 몰라서 외곽을 잡았음 */}
      <div className="absolute w-[254.48px] h-[340.44px] overflow-hidden bg-purple-400 bottom-[-40px] right-[83px]">
        <img src="/images/techbook-image.svg" alt="테크북 이미지" />
      </div>
    </div>
  );
};

export default EducationDetailBookBanner;
