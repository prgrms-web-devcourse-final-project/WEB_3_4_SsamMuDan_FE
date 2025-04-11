// 데이터 없을 때 보여주는 로티 애니메이션

import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const LottieEmpty = ({ message }) => {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-center text-gray-700">
      <div className="w-[300px] h-[300px] mb-4">
        <DotLottieReact
          src="https://lottie.host/9781eae8-0556-49b6-9199-954678c54437/qoCIGxADwO.lottie"
          loop
          autoplay
        />
      </div>
      <p className="text-xl font-medium whitespace-pre-line ml-8">{message}</p>
    </div>
  );
};

export default LottieEmpty;
