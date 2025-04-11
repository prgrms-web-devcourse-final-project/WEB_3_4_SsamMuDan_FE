import getTechsPay from '@/api/techtubeDetail/getTechsPay';
import Layout from '@/common/Layout/Layout';
import ActionButton from '@/components/common/ActionButton';
import { useEffect } from 'react';
import { NavLink, useNavigate, useSearchParams } from 'react-router-dom';

const PayFail = () => {
  return (
    <Layout>
      <div className="w-[1246px] h-[825px] p-[30px] mx-auto flex justify-center  pt-[170px]">
        <img
          src="/images/payfail.svg"
          alt="결제 캐릭터"
          className="w-[454px] h-[345px] mr-[71px] "
        />
        <div className="w-[706px] h-[325px] border p-[71px] border-grey200 rounded-[15px]">
          <div className="text-[48px] font-esamanru text-primary400 mb-[43px] text-center">
            결제를 실패하셨습니다.
          </div>
          <NavLink to="/mypage">
            <ActionButton
              variant="toMypage"
              text="홈으로 가기"
              customeStyle="border-primary400 text-primary400 w-[100%]"
            />
          </NavLink>
        </div>
      </div>
    </Layout>
  );
};

export default PayFail;
