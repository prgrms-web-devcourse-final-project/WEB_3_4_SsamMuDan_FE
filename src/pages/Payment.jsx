import getTechsPay from '@/api/techtubeDetail/getTechsPay';
import Layout from '@/common/Layout/Layout';
import ActionButton from '@/components/common/ActionButton';
import { useEffect, useState } from 'react';
import { NavLink, useNavigate, useSearchParams } from 'react-router-dom';

const Payment = () => {
  const [searchParams] = useSearchParams();
  const [techType, setTechType] = useState('');
  const [itemId, setItemId] = useState('');
  const navigate = useNavigate();

  const paymentKey = searchParams.get('paymentKey');
  const orderId = searchParams.get('orderId');
  const amount = searchParams.get('amount');

  useEffect(() => {
    if (orderId && paymentKey && amount) {
      async function tosspayconfirm() {
        try {
          const data = await getTechsPay(orderId, paymentKey, amount);
          console.log('결제 승인 성공:', data);
          setTechType(data.data.educationType);
          setItemId(data.data.itemId);
        } catch (err) {
          console.error('결제 승인 실패', err);
        }
      }
      tosspayconfirm();
    }
  }, []);

  return (
    <Layout>
      <div className="w-[1246px] h-[825px] p-[30px] mx-auto flex justify-center  pt-[170px]">
        <img
          src="/images/pay-character.svg"
          alt="결제 캐릭터"
          className="w-[454px] h-[345px] mr-[71px] mt-[51px]"
        />
        <div className="w-[706px] h-[325px] border p-[71px] border-grey200 rounded-[15px]">
          <div className="text-[48px] font-esamanru text-primary300 mb-[43px] text-center">
            결제가 완료되었습니다!
          </div>
          {techType && itemId && (
            <div className="flex">
              <NavLink to="/mypage">
                <ActionButton variant="toMypage" text="마이페이지로 가기" />
              </NavLink>

              <NavLink to={`/${techType}/${itemId}`}>
                <ActionButton variant="payment" text="바로 수강하기" customeStyle="ml-[8px]" />
              </NavLink>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Payment;
