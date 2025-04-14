import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/solid';
import ActionButton from '@/components/common/ActionButton';
import loginUser from '@/api/login/loginUser';
import useAuthStore from '@/store/useAuthStore';
import getUserInfo from '@/api/login/getUserInfo';
import { Toaster, toast } from 'react-hot-toast';
import FindIdModal from './FindIdModal';
import ResetPasswordModal from './ResetPasswordModal';

const LoginFormContainer = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuthStore();
  const navigate = useNavigate();
  const [isFindIdOpen, setIsFindIdOpen] = useState(false); // 아이디찾기 모달 상태
  const [isResetPwOpen, setIsResetPwOpen] = useState(false); // 비밀번호 재설정 모달 상태

  const handleLogin = async (e) => {
    e?.preventDefault();

    try {
      await loginUser({ email, password }); // 로그인 성공 ->  쿠키 저장
      const res = await getUserInfo(); // 유저 정보 조회
      login(res.data); // 스토어에 저장

      toast.success('로그인 성공!', {
        duration: 5000,
      });
      setTimeout(() => {
        navigate('/');
      }, 2000); // navigate가 너무 빨라 로그인 성공 toast가 안 보여서 속도 조절함
    } catch (err) {
      toast.error('이메일 또는 비밀번호가 올바르지 않습니다.');
    }
  };

  // 카카오 로그인
  const handleKakaoLogin = () => {
    window.location.href = 'https://api.cotree.site/oauth2/authorization/kakao';
  };

  return (
    <>
      <Toaster />
      <form
        onSubmit={handleLogin}
        className="w-[655px] h-[685px] bg-[#EEF1EF] bg-opacity-20 rounded-r-[30px] flex flex-col items-center justify-center px-[110px] gap-3 shadow-lg shadow-gray-200"
      >
        <p className="text-4xl font-esamanru font-bold text-primary300 mb-[70px]">LOGIN</p>

        {/* 이메일 */}
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="이메일을 입력해 주세요."
          className="w-full h-[42px] px-4 rounded-[10px] border border-gray-200 focus:outline-none focus:border-primary300 focus:ring-1 focus:ring-primary300 transition-all duration-200 ease-in-out text-sm text-grey700"
          required
        />

        {/* 비밀번호 */}
        <div className="w-full relative mb-4">
          <input
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="비밀번호를 입력해 주세요."
            className="w-full h-[42px] px-4 pr-10 rounded-[10px] border border-gray-200 focus:outline-none focus:border-primary300 focus:ring-1 focus:ring-primary300 transition-all duration-200 ease-in-out text-sm text-grey700"
            required
          />
          <span
            onClick={() => setShowPassword((prev) => !prev)}
            className="w-5 h-5 absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-400"
          >
            {showPassword ? <EyeIcon /> : <EyeSlashIcon />}
          </span>
        </div>

        {/* 로그인 버튼 */}
        <ActionButton text="로그인" variant="default" />

        {/* 회원가입 버튼 */}
        <ActionButton text="회원가입" variant="auth" onClick={() => navigate('/signup')} />

        {/* 아이디 찾기 & 비밀번호 재설정 */}
        <div className="flex justify-end gap-4 text-sm text-gray-400 mb-6 w-full">
          <button
            type="button"
            onClick={() => setIsFindIdOpen(true)}
            className="underline hover:text-primary300 transition-colors"
          >
            아이디 찾기
          </button>
          <button
            type="button"
            onClick={() => setIsResetPwOpen(true)}
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
          type="button"
          className="w-full h-[45px] bg-[#FEE500] text-black rounded-[10px] font-semibold relative"
          onClick={handleKakaoLogin}
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
      </form>

      {/* 아이디 찾기 모달 */}
      {isFindIdOpen && <FindIdModal onClose={() => setIsFindIdOpen(false)} />}
      {/* 비밀번호 재설정 모달 */}
      {isResetPwOpen && <ResetPasswordModal onClose={() => setIsResetPwOpen(false)} />}
    </>
  );
};

export default LoginFormContainer;
