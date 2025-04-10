import React, { useState } from 'react';
import ActionButton from '../common/ActionButton';
import useAuthStore from '@/store/useAuthStore';
import uploadProfileImage from '@/api/mypage/uploadProfileImage';
import editUserInfo from '@/api/mypage/editUserInfo';

const EditProfileModal = ({ onClose }) => {
  const { userInfo, loginWithUserInfo } = useAuthStore();
  const [username, setUsername] = useState(userInfo?.username || '');
  const [nickname, setNickname] = useState(userInfo?.nickname || '');
  const [preview, setPreview] = useState(userInfo?.profileImageUrl || '/images/mypage-user.png');
  const [selectedFile, setSelectedFile] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let imageUrl = userInfo.profileImageUrl;

      if (selectedFile) {
        imageUrl = await uploadProfileImage(selectedFile);
      }

      const updatedInfo = {
        username,
        nickname,
        profileImageUrl: imageUrl,
      };

      await editUserInfo(updatedInfo);
      loginWithUserInfo({ ...userInfo, ...updatedInfo });

      alert('수정이 완료되었습니다!');
      onClose();
    } catch (err) {
      console.error('회원정보 수정 실패:', err);
      alert('수정 중 오류가 발생했습니다.');
    }
  };

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
              src={preview}
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
                if (file) {
                  setSelectedFile(file);
                  setPreview(URL.createObjectURL(file));
                }
              }}
            />
          </div>

          {/* 닉네임 */}
          <span className="font-semibold text-xl">{nickname}</span>
        </div>

        {/* 회원정보 수정 폼 */}
        <form className="space-y-4 text-left" onSubmit={handleSubmit}>
          <div>
            <div className="text-sm text-grey700 font-medium mb-1">이메일</div>
            <input
              type="email"
              value={userInfo?.email}
              disabled
              className="bg-gray-100 w-full h-[42px] px-4 rounded-[10px] border border-gray-200 text-sm text-grey400"
            />
          </div>

          <div>
            <div className="text-sm text-grey700 font-medium mb-1">이름</div>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="변경할 이름을 입력해 주세요."
              className="w-full h-[42px] px-4 rounded-[10px] border border-gray-200 text-sm text-grey700 focus:outline-none focus:border-primary300 focus:ring-1 focus:ring-primary300 transition-all duration-200 ease-in-out"
            />
          </div>

          <div>
            <div className="text-sm text-grey700 font-medium mb-1">닉네임</div>
            <input
              type="text"
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
              placeholder="변경할 닉네임을 입력해 주세요."
              className="w-full h-[42px] px-4 rounded-[10px] border border-gray-200 text-sm text-grey700 mb-5 focus:outline-none focus:border-primary300 focus:ring-1 focus:ring-primary300 transition-all duration-200 ease-in-out"
            />
          </div>

          <ActionButton
            type="submit"
            text="수정완료"
            customeStyle="w-[203px] h-[42px] font-semibold text-primary300 border border-primary300"
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
