import { useState } from 'react';
import { motion } from 'framer-motion';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/solid';
import ActionButton from '@/components/common/ActionButton';

const SignupFormContainer = () => {
  const [userType, setUserType] = useState('general');
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordConfirm, setShowPasswordConfirm] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
    >
      <div className="w-[480px] bg-[#EEF1EF] bg-opacity-20 rounded-[30px] shadow-lg shadow-gray-200 px-10 py-12 mx-auto mt-[30px] mb-[70px]">
        <div className="flex justify-center mb-8">
          <img src="/images/main-logo-no-space.svg" alt="logo" className="h-10" />
        </div>

        {/* 일반회원/헤드헌터 탭 */}
        <div className="flex justify-center mb-6">
          <div className="relative w-[275px] h-[48px] flex justify-center bg-white p-1 rounded-[10px] border border-gray-100 shadow-sm shadow-gray-200">
            {['general', 'headhunter'].map((tab) => (
              <button
                key={tab}
                onClick={() => setUserType(tab)}
                className={`relative w-full py-2 rounded-[8px] text-sm font-semibold transition-colors duration-150 z-10
                ${userType === tab ? 'text-white' : 'text-gray-600'}`}
              >
                {tab === 'general' ? '일반 회원' : '헤드헌터'}
                {userType === tab && (
                  <motion.div
                    layoutId="tab-highlight"
                    className="absolute inset-0 bg-primary300 rounded-[8px] z-[-1]"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* 이메일 */}
        <div className="text-sm text-grey700 font-medium mb-1">이메일</div>
        <div className="mb-3 flex gap-2">
          <input
            type="text"
            placeholder="이메일을 입력해 주세요."
            className="flex-1 h-[42px] px-4 rounded-[10px] border border-gray-200 focus:outline-none focus:border-primary300 focus:ring-1 focus:ring-primary300 transition-all duration-200 ease-in-out text-sm text-grey700"
          />
          <button
            className="w-[80px] h-[42px] bg-white border border-primary300 text-primary300 rounded-[10px] text-sm font-semibold hover:bg-primary300 hover:text-white transition-colors duration-150"
            onClick={() => alert('인증하기 버튼 클릭됨')}
          >
            인증하기
          </button>
        </div>
        <div className="mb-5">
          <input
            type="email"
            placeholder="인증 코드를 입력해 주세요."
            className="w-full h-[42px] px-4 rounded-[10px] border border-gray-200 focus:outline-none focus:border-primary300 focus:ring-1 focus:ring-primary300 transition-all duration-200 ease-in-out text-sm text-grey700"
          />
        </div>

        {/* 비밀번호 */}
        <div className="text-sm text-grey700 font-medium mb-1">비밀번호</div>
        <div className="mb-3 relative">
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder="비밀번호를 입력해 주세요."
            className="w-full h-[42px] px-4 pr-10 rounded-[10px] border border-gray-200 focus:outline-none focus:border-primary300 focus:ring-1 focus:ring-primary300 transition-all duration-200 ease-in-out text-sm text-grey700"
          />
          <span
            onClick={() => setShowPassword((prev) => !prev)}
            className="w-5 h-5 absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-400"
          >
            {showPassword ? <EyeIcon /> : <EyeSlashIcon />}
          </span>
        </div>

        {/* 비밀번호 확인 */}
        <div className="mb-5 relative">
          <input
            type={showPasswordConfirm ? 'text' : 'password'}
            placeholder="비밀번호를 한 번 더 입력해 주세요."
            className="w-full h-[42px] px-4 pr-10 rounded-[10px] border border-gray-200 focus:outline-none focus:border-primary300 focus:ring-1 focus:ring-primary300 transition-all duration-200 ease-in-out text-sm text-grey700"
          />
          <span
            onClick={() => setShowPasswordConfirm((prev) => !prev)}
            className="w-5 h-5 absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-400"
          >
            {showPasswordConfirm ? <EyeIcon /> : <EyeSlashIcon />}
          </span>
        </div>

        {/* 이름 */}
        <div className="text-sm text-grey700 font-medium mb-1">이름</div>
        <div className="mb-5">
          <input
            type="text"
            placeholder="이름을 입력해 주세요."
            className="w-full h-[42px] px-4 rounded-[10px] border border-gray-200 focus:outline-none focus:border-primary300 focus:ring-1 focus:ring-primary300 transition-all duration-200 ease-in-out text-sm text-grey700"
          />
        </div>

        {/* 닉네임 */}
        <div className="text-sm text-grey700 font-medium mb-1">닉네임</div>
        <div className="mb-5">
          <input
            type="text"
            placeholder="닉네임을 입력해 주세요."
            className="w-full h-[42px] px-4 rounded-[10px] border border-gray-200 focus:outline-none focus:border-primary300 focus:ring-1 focus:ring-primary300 transition-all duration-200 ease-in-out text-sm text-grey700"
          />
        </div>

        {/* 휴대폰 번호 */}
        <div className="text-sm text-grey700 font-medium mb-1">휴대폰 번호</div>
        <div className="mb-3 flex gap-2">
          <input
            type="text"
            placeholder="휴대폰 번호를 입력해 주세요. ( '-' 제외 )"
            className="flex-1 h-[42px] px-4 rounded-[10px] border border-gray-200 focus:outline-none focus:border-primary300 focus:ring-1 focus:ring-primary300 transition-all duration-200 ease-in-out text-sm text-grey700"
          />
          <button
            className="w-[80px] h-[42px] bg-white border border-primary300 text-primary300 rounded-[10px] text-sm font-semibold hover:bg-primary300 hover:text-white transition-colors duration-150"
            onClick={() => alert('인증하기 버튼 클릭됨')}
          >
            인증하기
          </button>
        </div>
        <div className="mb-6">
          <input
            type="text"
            placeholder="인증번호를 입력해 주세요."
            className="w-full h-[42px] px-4 rounded-[10px] border border-gray-200 focus:outline-none focus:border-primary300 focus:ring-1 focus:ring-primary300 transition-all duration-200 ease-in-out text-sm text-grey700"
          />
        </div>

        {/* 회원가입 버튼 */}
        <ActionButton
          text="회원가입"
          variant="auth"
          onClick={() => alert('회원가입 버튼 클릭됨')}
        />
      </div>
    </motion.div>
  );
};

export default SignupFormContainer;
