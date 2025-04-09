import { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import useAuthStore from '@/store/useAuthStore';
import getUserInfo from '@/api/login/getUserInfo';

const LoginKakaoCallback = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { login } = useAuthStore();

  useEffect(() => {
    const error = searchParams.get('error');

    if (error) {
      alert('카카오 로그인 중 오류가 발생했습니다.');
      navigate('/login');
      return;
    }

    // 쿠키 기반 인증이므로 유저 정보 조회로 로그인 처리
    const fetchUser = async () => {
      try {
        const res = await getUserInfo();
        login(res.data);
        alert('카카오 로그인 성공!');
        navigate('/');
      } catch (err) {
        alert('카카오 로그인 실패! 다시 시도해주세요.');
        navigate('/login');
      }
    };

    fetchUser();
  }, [searchParams, navigate, login]);

  return (
    <div className="text-center mt-40 text-xl font-bold text-gray-700">
      카카오 로그인 처리 중입니다...
    </div>
  );
};

export default LoginKakaoCallback;
