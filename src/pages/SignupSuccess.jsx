// 회원가입 완료 페이지

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import Layout from '@/common/Layout/Layout';

const SignupSuccess = () => {
  const navigate = useNavigate();

  return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-[80vh] text-center px-3">
        <div className="w-[300px] h-[300px]">
          <DotLottieReact
            src="https://lottie.host/a67057f4-4d2f-4690-b598-3a1d93e402a9/0VLZsvkXXZ.lottie"
            loop
            autoplay
            speed={1.8}
          />
        </div>

        <h2 className="font-esamanru text-3xl text-primary300 mb-2">회원가입이 완료되었습니다!</h2>
        <p className="text-gray-700 text-medium mb-8">이제 CoTree와 함께 성장해 볼까요?</p>

        {/* 버튼 */}
        <div className="flex gap-4">
          <button
            onClick={() => navigate('/')}
            className="px-6 py-2 rounded-lg border border-primary300 text-primary300 font-semibold hover:bg-primary300 hover:text-white transition"
          >
            메인으로 가기
          </button>
          <button
            onClick={() => navigate('/login')}
            className="px-6 py-2 rounded-lg bg-primary300 text-white font-semibold hover:opacity-90 transition"
          >
            로그인 하러 가기
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default SignupSuccess;
