import React, { useState } from 'react';
import ActionButton from '../common/ActionButton';
import EditProfileModal from './EditProfileModal';
import useAuthStore from '@/store/useAuthStore';

const MypageInfo = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { userInfo } = useAuthStore();

  return (
    <div className="h-[291px] w-full px-[49px] py-[46px] border border-grey200 rounded-[20px] mt-10 mb-24">
      <div className="flex">
        <div className="rounded-full w-[180px] h-[180px] overflow-hidden border">
          <img
            src={userInfo?.profileImageUrl || '/images/default-avatar.svg'}
            alt="유저썸네일"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="pt-[15px] ml-[55px] flex-1">
          {userInfo?.role === 'USER' ? (
            <div className="w-[105.74px] h-[29.18px] rounded-[30px] mb-[15px] bg-[#DAF8E6] flex items-center justify-center text-[14px] font-semibold text-[#1A8245]">
              일반 회원
            </div>
          ) : userInfo?.role === 'HUNTER' ? (
            <div className="w-[105.74px] h-[29.18px] rounded-[30px] mb-[15px] bg-[#FFEBE9] flex items-center justify-center text-[14px] font-semibold text-primary400">
              헤드헌터
            </div>
          ) : null}
          <div className="text-[36px] font-medium">{userInfo?.nickname}</div>
          <div className="text-[20px] font-light text-grey400">{userInfo?.email}</div>
        </div>

        <div className="mt-[80px]">
          <button
            className="w-[201px] h-[50px] font-semibold text-primary300 border border-primary300 rounded-[10px] text-center transition-transform duration-200 hover:scale-105"
            onClick={() => setIsModalOpen(true)}
          >
            회원정보 수정
          </button>
        </div>
      </div>

      {/* 회원정보 수정 모달 */}
      {isModalOpen && <EditProfileModal onClose={() => setIsModalOpen(false)} />}
    </div>
  );
};

export default MypageInfo;
