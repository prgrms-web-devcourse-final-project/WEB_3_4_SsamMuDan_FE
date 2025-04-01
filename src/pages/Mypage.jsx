import Layout from '@/common/Layout/Layout';
import MypageInfo from '@/components/mypage/MypageInfo';
import MypageToggle from '@/components/mypage/MypageToggle';
import MypageTabs from '@/components/mypage/MypageTabs';
import { useState } from 'react';

const Mypage = () => {
  const [activeSection, setActiveSection] = useState('purchase');

  return (
    <Layout>
      <div className="w-[1246px] mx-auto">
        <MypageInfo />
        <MypageToggle active={activeSection} setActive={setActiveSection} />
        <MypageTabs activeSection={activeSection} />
      </div>
    </Layout>
  );
};

export default Mypage;
