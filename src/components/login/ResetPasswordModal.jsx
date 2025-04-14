import { useState, useRef, useEffect } from 'react';
import { EyeIcon, EyeSlashIcon, XMarkIcon } from '@heroicons/react/24/solid';
import postSignupEmail from '@/api/signup/postSignupEmail';
import postSignupEmailVerify from '@/api/signup/postSignupEmailVerify';
import { toast } from 'react-hot-toast';
import patchResetPassword from '@/api/login/patchResetPassword';

const ResetPasswordModal = ({ onClose }) => {
  const [email, setEmail] = useState('');
  const [emailCode, setEmailCode] = useState('');
  const [emailCodeSent, setEmailCodeSent] = useState(false);
  const [emailVerified, setEmailVerified] = useState(false);
  const [emailTimer, setEmailTimer] = useState(0);
  const emailTimerRef = useRef(null);
  const [verifyMsg, setVerifyMsg] = useState('');

  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');

  // 이메일 인증코드 전송
  const handleSendCode = async () => {
    try {
      const res = await postSignupEmail({ email });
      if (res.isSuccess) {
        toast.success('인증코드 전송 완료!');
        setEmailCodeSent(true);
        setEmailTimer(180);

        clearInterval(emailTimerRef.current);
        emailTimerRef.current = setInterval(() => {
          setEmailTimer((prev) => {
            if (prev <= 1) {
              clearInterval(emailTimerRef.current);
              setEmailCodeSent(false);
              toast.error('⏰ 인증 시간이 만료되었습니다. 다시 시도해주세요.');
              return 0;
            }
            return prev - 1;
          });
        }, 1000);
      }
    } catch (err) {
      toast.error('이메일 인증코드 전송 실패');
    }
  };

  // 이메일 인증 확인
  const handleVerifyCode = async () => {
    try {
      const res = await postSignupEmailVerify({ email, code: emailCode });
      if (res.isSuccess) {
        setEmailVerified(true);
        setVerifyMsg('✅ 이메일 인증 완료');
        clearInterval(emailTimerRef.current);
      } else {
        setVerifyMsg('❌ 인증 실패. 다시 확인해주세요.');
      }
    } catch {
      setVerifyMsg('❌ 인증 중 오류가 발생했습니다.');
    }
  };

  // 비밀번호 재설정
  const handleResetPassword = async () => {
    if (!emailVerified) {
      toast.error('이메일 인증을 먼저 완료해주세요.');
      return;
    }
    if (password.length < 6) {
      setPasswordError('비밀번호는 최소 6자 이상이어야 합니다.');
      return;
    }
    if (password !== confirmPassword) {
      setPasswordError('비밀번호가 일치하지 않습니다.');
      return;
    }

    try {
      const res = await patchResetPassword(email, password);
      toast.success('비밀번호가 성공적으로 변경되었습니다!');
      onClose();
    } catch (err) {
      toast.error('비밀번호 재설정 실패');
    }
  };

  useEffect(() => {
    return () => clearInterval(emailTimerRef.current);
  }, []);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
      <div className="bg-white w-[450px] p-8 rounded-xl shadow-lg relative">
        <button onClick={onClose} className="absolute top-3 right-3 text-gray-400 hover:text-black">
          <XMarkIcon className="w-5 h-5" />
        </button>

        <h2 className="text-xl font-bold text-gray-800 mb-4">비밀번호 재설정</h2>

        {/* 이메일 입력 */}
        <div className="flex gap-2 mb-3">
          <input
            type="email"
            placeholder="이메일을 입력해 주세요"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 px-4 h-[42px] rounded-[10px] border border-gray-300 text-sm focus:outline-none focus:border-primary300 focus:ring-1 focus:ring-primary300 transition-all duration-200 ease-in-out"
          />
          <button
            onClick={handleSendCode}
            className="w-[90px] h-[42px] bg-primary300 text-white rounded-[10px] text-sm"
          >
            인증하기
          </button>
        </div>

        {/* 인증코드 입력 */}
        {emailCodeSent && (
          <div className="mb-3 flex gap-2 items-center">
            <div className="relative flex-1">
              <input
                type="text"
                placeholder="인증코드를 입력해 주세요"
                value={emailCode}
                onChange={(e) => setEmailCode(e.target.value)}
                className="w-full px-4 h-[42px] rounded-[10px] border border-gray-300 text-sm focus:outline-none focus:border-primary300 focus:ring-1 focus:ring-primary300 transition-all duration-200 ease-in-out"
              />
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-red-500">
                {String(Math.floor(emailTimer / 60)).padStart(2, '0')}:
                {String(emailTimer % 60).padStart(2, '0')}
              </span>
            </div>
            <button
              onClick={handleVerifyCode}
              className="w-[90px] h-[42px] bg-primary300 text-white rounded-[10px] text-sm"
            >
              확인
            </button>
          </div>
        )}
        {verifyMsg && (
          <p className={`text-xs ${emailVerified ? 'text-green-600' : 'text-red-500'}`}>
            {verifyMsg}
          </p>
        )}

        {/* 새 비밀번호 입력 */}
        <div className="mt-5">
          {/* 비밀번호 */}
          <div className="relative mb-2">
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="새 비밀번호를 입력해 주세요"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setPasswordError(''); // 초기화
              }}
              className="w-full px-4 h-[42px] pr-10 rounded-[10px] border border-gray-300 text-sm focus:outline-none focus:border-primary300 focus:ring-1 focus:ring-primary300 transition-all duration-200 ease-in-out"
            />
            <span
              onClick={() => setShowPassword((prev) => !prev)}
              className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-400"
            >
              {showPassword ? (
                <EyeIcon className="w-5 h-5" />
              ) : (
                <EyeSlashIcon className="w-5 h-5" />
              )}
            </span>
          </div>

          {/* 비밀번호 확인 */}
          <div className="relative mb-2">
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="비밀번호를 한 번 더 입력해 주세요"
              value={confirmPassword}
              onChange={(e) => {
                setConfirmPassword(e.target.value);
                setPasswordError(''); // 초기화
              }}
              className="w-full px-4 h-[42px] pr-10 rounded-[10px] border border-gray-300 text-sm focus:outline-none focus:border-primary300 focus:ring-1 focus:ring-primary300 transition-all duration-200 ease-in-out"
            />
            <span
              onClick={() => setShowPassword((prev) => !prev)}
              className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-400"
            >
              {showPassword ? (
                <EyeIcon className="w-5 h-5" />
              ) : (
                <EyeSlashIcon className="w-5 h-5" />
              )}
            </span>
          </div>

          {passwordError && <p className="text-xs text-red-500 mb-2">{passwordError}</p>}

          {/* 제출 버튼 */}
          <button
            onClick={handleResetPassword}
            className="w-full h-[42px] bg-primary300 text-white rounded-[10px] text-sm font-semibold"
          >
            비밀번호 변경
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResetPasswordModal;
