import Layout from '@/common/Layout/Layout';
import CommunityDetailInfo from '@/components/communityDetail/CommunityDetailInfo';

const CommunityDetail = () => {
  return (
    <Layout>
      <div className="w-[1246px] mx-auto">
        <CommunityDetailInfo />
      </div>
    </Layout>
  );
};

export default CommunityDetail;
