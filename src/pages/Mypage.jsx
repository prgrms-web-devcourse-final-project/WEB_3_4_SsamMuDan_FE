import Layout from '@/common/Layout/Layout';
import MypageInfo from '@/components/mypage/MypageInfo';

const Mypage = () => {
  return (
    <Layout>
      <div className="w-[1246px] mx-auto">
        <MypageInfo />
      </div>
    </Layout>
  );
};

export default Mypage;
