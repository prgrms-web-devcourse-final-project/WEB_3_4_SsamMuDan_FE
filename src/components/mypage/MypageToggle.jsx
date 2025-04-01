// 구매목록 & 관심목록 토글

import React from 'react';

const MypageToggle = ({ active, setActive }) => {
  const isInterest = active === 'interest';

  const handleToggle = () => {
    setActive(isInterest ? 'purchase' : 'interest');
  };

  return (
    <div className="flex items-center gap-4 mb-4">
      {/* 토글 스위치 */}
      <div
        className={`w-[68px] h-[35px] flex items-center bg-gray-300 rounded-full p-1 cursor-pointer transition-all ${
          isInterest ? 'bg-red-500' : 'bg-green-500'
        }`}
        onClick={handleToggle}
      >
        <div
          className={`w-[27px] h-[27px] rounded-full shadow-md transform transition-transform duration-300 ${
            isInterest ? 'translate-x-8 bg-white' : 'translate-x-0 bg-white'
          }`}
        />
      </div>

      {/* 라벨 텍스트 */}
      <div className="flex gap-5 text-[25px] font-semibold">
        <span className={isInterest ? 'text-gray-400' : 'text-gray-700'}>구매목록</span>
        <span className="text-[#E9E9E9]">|</span>
        <span className={isInterest ? 'text-black' : 'text-gray-400'}>관심목록</span>
      </div>
    </div>
  );
};

export default MypageToggle;
