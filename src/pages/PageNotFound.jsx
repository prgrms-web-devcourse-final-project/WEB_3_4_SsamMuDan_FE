import Layout from '@/common/Layout/Layout';
import PrimaryButton from '@/components/common/PrimaryButton';
import { useNavigate } from 'react-router-dom';

const PageNotFound = () => {
  const navigate = useNavigate();

  return (
    <Layout>
      <div className="flex flex-col items-center justify-center py-16">
        <img
          src="/images/page-not-found.svg"
          alt="404 페이지"
          className="w-[500px] h-[300px] object-contain mb-10"
        />

        <p className="font-esamanru text-3xl text-grey600 mb-20">
          요청하신 페이지를 찾을 수 없습니다.
        </p>
        <button
          onClick={() => navigate('/')}
          className="w-[380px] h-[57px] px-6 py-3 bg-primary300 text-white font-esamanru text-lg rounded-[15px] hover:bg-primary400 transition-colors"
        >
          메인으로 이동
        </button>
      </div>
    </Layout>
  );
};

export default PageNotFound;
