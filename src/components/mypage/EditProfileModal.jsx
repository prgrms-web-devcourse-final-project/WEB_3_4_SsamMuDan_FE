import React from 'react';
import ActionButton from '../common/ActionButton';

const EditProfileModal = ({ onClose }) => {
  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl p-8 w-[521px] text-center"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="font-esamanru text-2xl mb-6">회원정보 수정</h2>

        <div className="flex flex-col items-center mb-6 relative">
          <div className="relative w-24 h-24 rounded-full mb-3">
            {/* 프로필 이미지 */}
            <img
              src="/images/mypage-user.png"
              alt="유저 썸네일"
              className="w-full h-full object-cover rounded-full"
            />

            {/* 프로필 이미지 수정 아이콘 */}
            <label
              htmlFor="profileUpload"
              className="absolute bottom-0 right-0 w-7 h-7 rounded-full flex items-center justify-center cursor-pointer"
            >
              <img src="/icons/edit-profile.svg" alt="프로필 이미지 수정" className="w-7 h-7" />
            </label>

            {/* 파일업로드 input */}
            <input
              type="file"
              id="profileUpload"
              accept="image/*"
              className="hidden"
              onChange={(e) => {
                const file = e.target.files[0];
              }}
            />
          </div>

          {/* 닉네임 */}
          <span className="font-semibold text-xl">코트리</span>
        </div>

        {/* 회원정보 수정 폼 */}
        <form className="space-y-4 text-left">
          <div>
            <div className="text-sm text-grey700 font-medium mb-1">이메일</div>
            <input
              type="email"
              value="cotree@gamil.com"
              readOnly
              className="bg-gray-100 w-full h-[42px] px-4 rounded-[10px] border border-gray-200 focus:outline-none focus:border-primary300 focus:ring-1 focus:ring-primary300 transition-all duration-200 ease-in-out text-sm text-grey400"
            />
          </div>

          <div>
            <div className="text-sm text-grey700 font-medium mb-1">이름</div>
            <input
              type="text"
              placeholder="변경할 이름을 입력해 주세요."
              className="w-full h-[42px] px-4 rounded-[10px] border border-gray-200 focus:outline-none focus:border-primary300 focus:ring-1 focus:ring-primary300 transition-all duration-200 ease-in-out text-sm text-grey700"
            />
          </div>

          <div>
            <div className="text-sm text-grey700 font-medium mb-1">닉네임</div>
            <input
              type="text"
              placeholder="변경할 닉네임을 입력해 주세요."
              className="w-full h-[42px] px-4 rounded-[10px] border border-gray-200 focus:outline-none focus:border-primary300 focus:ring-1 focus:ring-primary300 transition-all duration-200 ease-in-out text-sm text-grey700 mb-5"
            />
          </div>

          <ActionButton
            text="수정완료"
            customeStyle="w-[203px] h-[42px] font-semibold text-primary300 border border-primary300"
            onClick={() => {
              alert('수정이 완료되었습니다!');
              onClose();
            }}
          />
        </form>

        <button className="mt-4 text-sm font-semibold text-gray-400" onClick={onClose}>
          닫기
        </button>
      </div>
    </div>
  );
};

export default EditProfileModal;
