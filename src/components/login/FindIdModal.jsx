import postFindIdCode from '@/api/login/postFindIdCode';
import postFindIdCodeVerify from '@/api/login/postFindIdCodeVerify';
import { useState, useRef, useEffect } from 'react';
import { toast } from 'react-hot-toast';

const FindIdModal = ({ onClose }) => {
  const [username, setUsername] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [code, setCode] = useState('');
  const [isCodeSent, setIsCodeSent] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const [foundEmail, setFoundEmail] = useState('');

  const [timer, setTimer] = useState(0);
  const timerRef = useRef(null);

  const handleSendCode = async () => {
    if (!username || !phoneNumber) {
      toast.error('이름과 전화번호를 모두 입력해주세요.');
      return;
    }
    try {
      const res = await postFindIdCode({ username, receiverNumber: phoneNumber });
      if (res.isSuccess) {
        toast.success('인증번호가 전송되었습니다.');
        setIsCodeSent(true);
        setTimer(180);
        clearInterval(timerRef.current);
        timerRef.current = setInterval(() => {
          setTimer((prev) => {
            if (prev <= 1) {
              clearInterval(timerRef.current);
              setIsCodeSent(false);
              toast.error('⏰ 인증 시간이 만료되었습니다. 다시 인증해주세요.');
              return 0;
            }
            return prev - 1;
          });
        }, 1000);
      }
    } catch (err) {
      toast.error('인증번호 전송에 실패했습니다.');
    }
  };

  const handleVerifyCode = async () => {
    try {
      const res = await postFindIdCodeVerify({ username, receiverNumber: phoneNumber, code });
      if (res.isSuccess) {
        toast.success('인증 성공!');
        clearInterval(timerRef.current);
        setIsVerified(true);
        setFoundEmail(res.data.email);
      } else {
        toast.error('인증에 실패했습니다.');
      }
    } catch (err) {
      toast.error('인증 중 오류가 발생했습니다.');
    }
  };

  useEffect(() => {
    return () => clearInterval(timerRef.current);
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
      <div className="bg-white p-6 rounded-[20px] w-[400px] relative">
        <h2 className="text-xl font-bold mb-4">아이디 찾기</h2>

        {isVerified && foundEmail ? (
          <div className="text-center py-6">
            <p className="text-sm mb-2">회원님의 이메일은</p>
            <p className="text-primary300 font-semibold text-lg">{foundEmail}</p>
          </div>
        ) : (
          <>
            <div className="mb-3">
              <label className="text-sm font-medium">이름</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="이름을 입력해 주세요."
                className="w-full mt-1 h-[40px] px-3 border rounded-lg text-sm focus:outline-none focus:border-primary300 focus:ring-1 focus:ring-primary300 transition-all duration-200 ease-in-out"
              />
            </div>
            <div className="mb-3">
              <label className="text-sm font-medium">휴대폰 번호</label>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  placeholder="'-' 제외하고 입력"
                  className="flex-1 mt-1 h-[40px] px-3 border rounded-lg text-sm focus:outline-none focus:border-primary300 focus:ring-1 focus:ring-primary300 transition-all duration-200 ease-in-out"
                />
                <button
                  onClick={handleSendCode}
                  className="mt-1 w-[80px] h-[40px] bg-white border border-primary300 text-primary300 rounded-lg text-sm font-semibold hover:bg-primary300 hover:text-white"
                >
                  인증하기
                </button>
              </div>
            </div>

            {isCodeSent && (
              <div className="mb-3">
                <label className="text-sm font-medium">인증번호</label>
                <div className="flex gap-2 items-center">
                  <div className="relative w-full">
                    <input
                      type="text"
                      value={code}
                      onChange={(e) => setCode(e.target.value)}
                      placeholder="인증번호 입력"
                      className="mt-1 w-full h-[40px] pl-3 pr-12 border rounded-lg text-sm focus:outline-none focus:border-primary300 focus:ring-1 focus:ring-primary300 transition-all duration-200 ease-in-out"
                    />
                    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-red-500 text-sm">
                      {String(Math.floor(timer / 60)).padStart(2, '0')}:
                      {String(timer % 60).padStart(2, '0')}
                    </span>
                  </div>
                  <button
                    onClick={handleVerifyCode}
                    className="mt-1 w-[80px] h-[40px] bg-white border border-primary300 text-primary300 rounded-lg text-sm font-semibold hover:bg-primary300 hover:text-white"
                  >
                    확인
                  </button>
                </div>
              </div>
            )}
          </>
        )}

        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-gray-400 hover:text-black text-xl"
        >
          ×
        </button>
      </div>
    </div>
  );
};

export default FindIdModal;
