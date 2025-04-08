import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/solid';
import ActionButton from '@/components/common/ActionButton';
import postSignup from '@/api/signup/postSignup';
import postSignupPhone from '@/api/signup/postSignupPhone';
import postSignupPhoneVerify from '@/api/signup/postSignupPhoneVerify';
import postSignupEmail from '@/api/signup/postSignupEmail';
import postSignupEmailVerify from '@/api/signup/postSignupEmailVerify';

const SignupFormContainer = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: '',
    password: '',
    passwordConfirm: '',
    username: '',
    nickname: '',
    phoneNumber: '',
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordConfirm, setShowPasswordConfirm] = useState(false);
  const [userType, setUserType] = useState('general');

  const [verificationCode, setVerificationCode] = useState(''); // 휴대폰 인증번호 입력값
  const [isVerified, setIsVerified] = useState(false); // 휴대폰 인증 성공 여부
  const [verifyMessage, setVerifyMessage] = useState(''); // 휴대폰 인증 메시지
  const [codeSent, setCodeSent] = useState(false); // 휴대폰 인증 요청 여부

  const [emailCodeSent, setEmailCodeSent] = useState(false); // 이메일 인증 요청 여부
  const [emailCode, setEmailCode] = useState(''); // 이메일 인증번호 입력값
  const [emailVerified, setEmailVerified] = useState(false); // 이메일 인증 여부
  const [emailVerifyMsg, setEmailVerifyMsg] = useState(''); // 이메일 인증 메시지

  // 유효성 검사
  const validateField = (name, value) => {
    let error = '';

    switch (name) {
      case 'email':
        if (!value.trim()) error = '이메일을 입력해주세요.';
        else if (!/\S+@\S+\.\S+/.test(value)) error = '올바른 이메일 형식이 아닙니다.';

        break;

      case 'password':
        if (!value.trim()) error = '비밀번호를 입력해주세요.';
        else if (value.length < 6) error = '비밀번호는 최소 6자 이상이어야 합니다.';

        break;

      case 'passwordConfirm':
        if (value !== form.password) error = '비밀번호가 일치하지 않습니다.';

        break;

      case 'username':
        if (!value.trim()) error = '이름을 입력해주세요.';

        break;

      case 'nickname':
        if (!value.trim()) error = '닉네임을 입력해주세요.';

        break;

      case 'phoneNumber':
        if (!/^\d{10,11}$/.test(value.replace(/-/g, '')))
          error = '올바른 휴대폰 번호를 입력해주세요.';

        break;

      default:
        break;
    }

    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({ ...prev, [name]: value }));

    validateField(name, value);
  };

  // 회원가입 함수
  const handleSignup = async () => {
    const { email, password, passwordConfirm, username, nickname, phoneNumber } = form;

    const hasErrors = Object.values(errors).some((e) => e);

    if (hasErrors) {
      alert('입력한 정보에 오류가 있습니다. 다시 확인해주세요.');

      return;
    }

    // 휴대폰 인증 여부 확인
    if (!isVerified) {
      alert('휴대폰 인증을 완료해주세요!');
      return;
    }

    // 이메일 인증 여부 확인
    if (!emailVerified) {
      alert('이메일 인증을 완료해주세요!');
      return;
    }

    try {
      const res = await postSignup({ email, password, username, nickname, phoneNumber });

      if (res.isSuccess) {
        alert('회원가입이 완료되었습니다!');

        navigate('/');
      } else {
        alert(`회원가입 실패: ${res.message}`);
      }
    } catch (error) {
      console.error('회원가입 실패:', error);

      if (error.response?.data?.message) {
        alert(`회원가입 실패: ${error.response.data.message}`);
      } else {
        alert('회원가입 중 오류가 발생했습니다.');
      }
    }
  };

  // 휴대폰번호 인증코드 전송 함수
  const handleSendCode = async () => {
    if (!form.phoneNumber || errors.phoneNumber) {
      alert('올바른 휴대폰 번호를 입력해주세요.');
      return;
    }

    try {
      const res = await postSignupPhone({ receiverNumber: form.phoneNumber });
      if (res.isSuccess) {
        alert('인증코드가 전송되었습니다!');
        setCodeSent(true);
      }
    } catch (err) {
      console.error('인증코드 전송 실패:', err);
      alert('인증코드 전송 실패! 유효한 번호인지 확인해주세요.');
    }
  };

  // 휴대폰번호 인증코드 확인 함수
  const handleVerifyCode = async () => {
    try {
      const res = await postSignupPhoneVerify({
        receiverNumber: form.phoneNumber,
        code: verificationCode,
      });

      if (res.isSuccess) {
        setIsVerified(true);
        setVerifyMessage('✅ 인증 성공!');
      } else {
        setIsVerified(false);
        setVerifyMessage('❌ 인증 실패. 다시 시도해주세요.');
      }
    } catch (err) {
      setIsVerified(false);
      setVerifyMessage('❌ 인증 중 오류 발생.');
    }
  };

  // 이메일 인증코드 전송 함수
  const handleSendEmailCode = async () => {
    if (!form.email || errors.email) {
      alert('올바른 이메일을 입력해주세요.');
      return;
    }
    try {
      const res = await postSignupEmail({ email: form.email });
      if (res.isSuccess) {
        alert('이메일로 인증코드가 전송되었습니다.');
        setEmailCodeSent(true);
      }
    } catch (err) {
      console.error('이메일 인증코드 전송 실패:', err);
      alert('이메일 인증코드 전송 실패!');
    }
  };

  // 이메일 인증코드 확인 함수
  const handleVerifyEmailCode = async () => {
    try {
      const res = await postSignupEmailVerify({ email: form.email, code: emailCode });
      if (res.isSuccess) {
        setEmailVerified(true);
        setEmailVerifyMsg('✅ 이메일 인증 성공!');
      } else {
        setEmailVerified(false);
        setEmailVerifyMsg('❌ 이메일 인증 실패. 다시 시도해주세요.');
      }
    } catch (err) {
      setEmailVerified(false);
      setEmailVerifyMsg('❌ 이메일 인증 중 오류 발생.');
    }
  };

  // 기존 handleSignup 내에서 이메일 인증도 확인 필요 시 아래 추가:
  // if (!emailVerified) {
  //   alert('이메일 인증을 완료해주세요!');
  //   return;
  // }

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

        {/* 회원 유형 */}
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
            name="email"
            value={form.email}
            onChange={handleChange}
            type="text"
            placeholder="이메일을 입력해 주세요."
            className="flex-1 h-[42px] px-4 rounded-[10px] border border-gray-200 focus:outline-none focus:border-primary300 focus:ring-1 focus:ring-primary300 transition-all text-sm text-grey700"
          />
          <button
            className="w-[80px] h-[42px] bg-white border border-primary300 text-primary300 rounded-[10px] text-sm font-semibold hover:bg-primary300 hover:text-white"
            onClick={handleSendEmailCode}
          >
            인증하기
          </button>
        </div>
        {errors.email && <p className="text-red-500 text-xs mb-2">{errors.email}</p>}

        {/* 이메일 인증코드 입력창 */}
        {emailCodeSent && (
          <div className="mb-4">
            <div className="flex gap-2 mb-2">
              <input
                type="text"
                value={emailCode}
                onChange={(e) => setEmailCode(e.target.value)}
                placeholder="인증코드를 입력해 주세요."
                className="flex-1 h-[42px] px-4 rounded-[10px] border border-gray-200 text-sm text-grey700 focus:outline-none focus:border-primary300 focus:ring-1 focus:ring-primary300 transition-all"
              />
              <button
                className="w-[80px] h-[42px] bg-white border border-primary300 text-primary300 rounded-[10px] text-sm font-semibold hover:bg-primary300 hover:text-white"
                onClick={handleVerifyEmailCode}
              >
                확인
              </button>
            </div>
            {emailVerifyMsg && (
              <p className={`text-xs ${emailVerified ? 'text-green-600' : 'text-red-500'}`}>
                {emailVerifyMsg}
              </p>
            )}
          </div>
        )}

        {/* 비밀번호 */}
        <div className="text-sm text-grey700 font-medium mb-1">비밀번호</div>
        <div className="mb-3 relative">
          <input
            name="password"
            value={form.password}
            onChange={handleChange}
            type={showPassword ? 'text' : 'password'}
            placeholder="비밀번호를 입력해 주세요."
            className="w-full h-[42px] px-4 pr-10 rounded-[10px] border border-gray-200 text-sm text-grey700 focus:outline-none focus:border-primary300 focus:ring-1 focus:ring-primary300 transition-all"
          />
          <span
            onClick={() => setShowPassword((prev) => !prev)}
            className="w-5 h-5 absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-400"
          >
            {showPassword ? <EyeIcon /> : <EyeSlashIcon />}
          </span>
        </div>
        {errors.password && <p className="text-red-500 text-xs mb-3">{errors.password}</p>}

        {/* 비밀번호 확인 */}
        <div className="mb-3 relative">
          <input
            name="passwordConfirm"
            value={form.passwordConfirm}
            onChange={handleChange}
            type={showPasswordConfirm ? 'text' : 'password'}
            placeholder="비밀번호를 한 번 더 입력해 주세요."
            className="w-full h-[42px] px-4 pr-10 rounded-[10px] border border-gray-200 text-sm text-grey700 focus:outline-none focus:border-primary300 focus:ring-1 focus:ring-primary300 transition-all"
          />
          <span
            onClick={() => setShowPasswordConfirm((prev) => !prev)}
            className="w-5 h-5 absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-400"
          >
            {showPasswordConfirm ? <EyeIcon /> : <EyeSlashIcon />}
          </span>
        </div>
        {errors.passwordConfirm && (
          <p className="text-red-500 text-xs mb-3">{errors.passwordConfirm}</p>
        )}

        {/* 이름 */}
        <div className="text-sm text-grey700 font-medium mb-1">이름</div>
        <div className="mb-3">
          <input
            name="username"
            value={form.username}
            onChange={handleChange}
            type="text"
            placeholder="이름을 입력해 주세요."
            className="w-full h-[42px] px-4 rounded-[10px] border border-gray-200 text-sm text-grey700 focus:outline-none focus:border-primary300 focus:ring-1 focus:ring-primary300 transition-all"
          />
        </div>
        {errors.username && <p className="text-red-500 text-xs mb-3">{errors.username}</p>}

        {/* 닉네임 */}
        <div className="text-sm text-grey700 font-medium mb-1">닉네임</div>
        <div className="mb-3">
          <input
            name="nickname"
            value={form.nickname}
            onChange={handleChange}
            type="text"
            placeholder="닉네임을 입력해 주세요."
            className="w-full h-[42px] px-4 rounded-[10px] border border-gray-200 text-sm text-grey700 focus:outline-none focus:border-primary300 focus:ring-1 focus:ring-primary300 transition-all"
          />
        </div>
        {errors.nickname && <p className="text-red-500 text-xs mb-3">{errors.nickname}</p>}

        {/* 휴대폰 번호 */}
        <div className="text-sm text-grey700 font-medium mb-1">휴대폰 번호</div>
        <div className="mb-3 flex gap-2">
          <input
            name="phoneNumber"
            value={form.phoneNumber}
            onChange={handleChange}
            type="text"
            placeholder="휴대폰 번호를 입력해 주세요. ( '-' 제외 )"
            className="flex-1 h-[42px] px-4 rounded-[10px] border border-gray-200 text-sm text-grey700 focus:outline-none focus:border-primary300 focus:ring-1 focus:ring-primary300 transition-all"
          />
          <button
            className="w-[80px] h-[42px] bg-white border border-primary300 text-primary300 rounded-[10px] text-sm font-semibold hover:bg-primary300 hover:text-white"
            onClick={handleSendCode}
          >
            인증하기
          </button>
        </div>
        {errors.phoneNumber && <p className="text-red-500 text-xs mb-2">{errors.phoneNumber}</p>}

        {/* 인증번호 입력창 -> 인증 요청 후에만 보여짐 */}
        {codeSent && (
          <div className="mb-4">
            <div className="flex gap-2 mb-2">
              <input
                type="text"
                value={verificationCode}
                onChange={(e) => setVerificationCode(e.target.value)}
                placeholder="인증번호를 입력해 주세요."
                className="flex-1 h-[42px] px-4 rounded-[10px] border border-gray-200 text-sm text-grey700 focus:outline-none focus:border-primary300 focus:ring-1 focus:ring-primary300 transition-all"
              />
              <button
                className="w-[80px] h-[42px] bg-white border border-primary300 text-primary300 rounded-[10px] text-sm font-semibold hover:bg-primary300 hover:text-white"
                onClick={handleVerifyCode}
              >
                확인
              </button>
            </div>
            {verifyMessage && (
              <p className={`text-xs ${isVerified ? 'text-green-600' : 'text-red-500'}`}>
                {verifyMessage}
              </p>
            )}
          </div>
        )}

        {/* 회원가입 버튼 */}
        <ActionButton text="회원가입" variant="auth" onClick={handleSignup} />
      </div>
    </motion.div>
  );
};

export default SignupFormContainer;
