import { useSearchParams } from 'react-router-dom';
import MypageInfo from '@/components/mypage/MypageInfo';
import MypageToggle from '@/components/mypage/MypageToggle';
import MypageTabs from '@/components/mypage/MypageTabs';
import Layout from '@/common/Layout/Layout';

const Mypage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeSection = searchParams.get('section') || 'purchase';

  const handleToggleChange = (newSection) => {
    const newParams = new URLSearchParams(searchParams);
    newParams.set('section', newSection);
    newParams.set('page', '0');
    setSearchParams(newParams);
  };

  return (
    <Layout>
      <div className="w-[1246px] mx-auto">
        <MypageInfo />
        <MypageToggle active={activeSection} setActive={handleToggleChange} />
        <MypageTabs activeSection={activeSection} />
      </div>
    </Layout>
  );
};

export default Mypage;
