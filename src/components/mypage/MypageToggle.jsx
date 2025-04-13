// 구매목록 & 관심목록 토글
import React from 'react';

const MypageToggle = ({ active, setActive }) => {
  return (
    <div className="flex items-center gap-4 mb-7">
      {/* 토글 스위치 */}
      <div
        className={`w-[60px] h-[28px] flex items-center bg-gray-300 rounded-full p-1 cursor-pointer transition-all ${
          active === 'interest' ? 'bg-red-500' : 'bg-green-500'
        }`}
        onClick={() => setActive(active === 'interest' ? 'purchase' : 'interest')}
      >
        <div
          className={`w-[20px] h-[20px] rounded-full shadow-md transform transition-transform duration-300 ${
            active === 'interest' ? 'translate-x-8 bg-white' : 'translate-x-0 bg-white'
          }`}
        />
      </div>

      {/* 라벨 텍스트 */}
      <div className="flex gap-3 text-[22px] font-semibold">
        <span className={active === 'interest' ? 'text-gray-300' : 'text-black'}>구매목록</span>
        <span className="text-[#E9E9E9]">|</span>
        <span className={active === 'interest' ? 'text-black' : 'text-gray-300'}>관심목록</span>
      </div>
    </div>
  );
};

export default MypageToggle;
