import { useState } from 'react';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/solid';
import ActionButton from '@/components/common/ActionButton';

const LoginFormContainer = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="w-[655px] h-[685px] bg-[#EEF1EF] bg-opacity-20 rounded-r-[30px] flex flex-col items-center justify-center px-[110px] gap-3 shadow-lg shadow-gray-200">
      <p className="text-4xl font-esamanru font-bold text-primary300 mb-[70px]">LOGIN</p>
      {/* 이메일 */}
      <input
        type="email"
        placeholder="이메일을 입력해 주세요."
        className="w-full h-[42px] px-4 rounded-[10px] border border-gray-200 focus:outline-none focus:border-primary300 focus:ring-1 focus:ring-primary300 transition-all duration-200 ease-in-out text-sm text-grey700"
      />

      {/* 비밀번호 */}
      <div className="w-full relative mb-4">
        <input
          type={showPassword ? 'text' : 'password'}
          placeholder="비밀번호를 입력해 주세요."
          className="w-full h-[42px] px-4 rounded-[10px] border border-gray-200 focus:outline-none focus:border-primary300 focus:ring-1 focus:ring-primary300 transition-all duration-200 ease-in-out text-sm text-grey700"
        />
        <span
          onClick={() => setShowPassword((prev) => !prev)}
          className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-500"
        >
          {showPassword ? <EyeIcon className="w-5 h-5" /> : <EyeSlashIcon className="w-5 h-5" />}
        </span>
      </div>

      {/* 로그인 버튼 */}
      <ActionButton
        text="로그인"
        variant="default"
        type="submit"
        onClick={() => alert('로그인 버튼 클릭됨')}
      />

      {/* 회원가입 버튼 */}
      <ActionButton text="회원가입" variant="auth" onClick={() => alert('회원가입 버튼 클릭됨')} />

      {/* 아이디 찾기 & 비밀번호 재설정 */}
      <div className="flex justify-end gap-4 text-sm text-gray-400 mb-6 w-full">
        <button
          onClick={() => alert('아이디 찾기 클릭됨')}
          className="underline hover:text-primary300 transition-colors"
        >
          아이디 찾기
        </button>
        <button
          onClick={() => alert('비밀번호 재설정 클릭됨')}
          className="underline hover:text-primary300 transition-colors"
        >
          비밀번호 재설정
        </button>
      </div>

      {/* '또는' 구분선 */}
      <div className="flex items-center w-full mb-10">
        <div className="flex-1 h-px bg-gray-300" />
        <span className="mx-4 text-gray-400 text-sm">또는</span>
        <div className="flex-1 h-px bg-gray-300" />
      </div>

      {/* 카카오 로그인 버튼 */}
      <button
        className="w-full h-[45px] bg-[#FEE500] text-black rounded-[10px] font-semibold relative"
        onClick={() => alert('카카오 로그인 버튼 클릭됨')}
      >
        <img
          src="/icons/login-kakao.svg"
          alt="카카오 아이콘"
          className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5"
        />
        <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          카카오 로그인
        </span>
      </button>
    </div>
  );
};

export default LoginFormContainer;
