import Layout from '@/common/Layout/Layout';
import { useNavigate } from 'react-router-dom';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import React from 'react';

const PageNotFound = () => {
  const navigate = useNavigate();

  return (
    <Layout>
      <div className="flex flex-col items-center justify-center my-[150px]">
        <DotLottieReact
          src="https://lottie.host/6feb3f24-ef3f-4fc5-902a-23c66c0a1b02/Xypc1483mZ.lottie"
          loop
          autoplay
          className="w-[500px] h-[300px]"
        />

        <p className="font-esamanru text-3xl text-grey600 mb-12">
          요청하신 페이지를 찾을 수 없습니다.
        </p>
        <button
          onClick={() => navigate('/')}
          className="w-[300px] h-[50px] px-6 py-3 bg-white text-primary300 font-esamanru text-lg 
             rounded-[999px] border border-primary300
             hover:bg-primary300 hover:text-white
             hover:scale-105 hover:-translate-y-1 hover:shadow-lg
             transition-all duration-200"
        >
          메인으로 이동
        </button>
      </div>
    </Layout>
  );
};

export default PageNotFound;
