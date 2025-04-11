import { NavLink, useLocation, useNavigate, useParams } from 'react-router-dom';
import ActionButton from '../common/ActionButton';
import { useState } from 'react';
import postTechTubePay from '@/api/techtubeDetail/postTechTubeLike';
import postTechsPay from '@/api/techtubeDetail/postTechsPay';
import { loadTossPayments } from '@tosspayments/payment-sdk';
import useAuthStore from '@/store/useAuthStore';

// props로 techInfo 를 들고온다 *테크튜브랑 테크북 동일
const EducationPay = ({ techBookInfo, IsLogin, id, educationType }) => {
  const tosspaykey = import.meta.env.VITE_TOSSPAYMENT_KEY;
  console.log('toss', tosspaykey);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const location = useLocation();
  const isTechBook = location.pathname.includes('TECH_BOOK');
  const isTechTube = location.pathname.includes('TECH_TUBE');
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const userInfo = useAuthStore((state) => state.userInfo);
  console.log('아아아아이디', userInfo);

  console.log('isTechTube', isTechTube);
  // "techEducationType": "TECH_BOOK",
  // "itemId": 1,
  // "amount": 1073741824,
  // "productName": "string"

  // 결제를 위해 정보 posts

  console.log('amount:', techBookInfo?.price, 'productName: ', techBookInfo?.title);
  const handleOrderId = async () => {
    if (isLoading) return; // 중복 실행 방지
    setIsLoading(true); // 즉시 로딩 시작
    console.log('클릭');
    try {
      const response = await postTechsPay({
        techEducationType: educationType,
        itemId: id,
        amount: techBookInfo?.price,
        productName: techBookInfo?.title,
      });

      console.log('리스폰즈', response);

      const orderId = response.data?.orderId;
      console.log('받은 orderId:', orderId);

      const tossPayments = await loadTossPayments(tosspaykey);

      // await tossPayments.requestPayment('카드', {
      //   amount: techBookInfo.price,
      //   orderId,
      //   orderName: techBookInfo.title,
      //   customerName: '홍길동', // 실제 사용자 정보로 바꾸기
      //   // successUrl: `http://localhost:3000/payment/success`,
      //   // failUrl: `http://localhost:3000/payment/fail`,
      //   successUrl: `http://localhost:3000/loading`,
      //   failUrl: `http://localhost:3000/loading`,
      // });

      tossPayments.requestPayment('CARD', {
        amount: techBookInfo.price,
        orderId: orderId,
        orderName: techBookInfo.title,
        customerName: userInfo.username,
        successUrl: `http://localhost:3000/payment`,
        // successUrl: `http://api.cotree.site/api/v1/payment/confirm`,
        // failUrl: `http://api.cotree.site/api/v1/payment/confirm`,
        failUrl: `http://localhost:3000/payfail`,
      });
    } catch (error) {
      console.log('토스페이 실패');
    } finally {
      setIsLoading(false); // 무조건 초기화
    }
  };

  // const handleTossPay = async () => {
  //   const tossPayments = await loadTossPayments(tosspaykey);

  //   tossPayments.requestPayment('카드', {
  //     amount: techBookInfo?.price,
  //     orderId: 'order_123',
  //     orderName: '프론트엔드 강의',
  //     customerName: '홍길동',
  //     successUrl: 'http://localhost:3000/success',
  //     failUrl: 'http://localhost:3000/fail',
  //   });
  // };

  const ffa = Number(id);
  // like 보내기
  const handleComplete = () => {
    try {
      postTechTubePay({
        likeType: 'TECH_TUBE',
        itemId: ffa,
      });

      // alert('게시글이 성공적으로 작성되었습니다!');
    } catch (error) {
      console.log('테크 like 실패');
    }
  };

  // const floatingBadge = {
  //   completed: {
  //     style: '!border-[#4A4747] !bg-[#393838] text-white cursor-pointer',
  //     text: '완료하기',
  //   },
  //   cancel: {
  //     text: '취소',
  //   },
  // };

  //pdf 열기
  const handleOpenPdf = () => {
    window.open(techBookInfo.techBookUrl, '_blank');
  };

  return (
    <div className="w-[400px] h-[355px] rounded-[12px] bg-white border border-[#D9D9D9] shadow-md  p-[24px] mb-[28px]">
      <button onClick={handleComplete}> 버튼 눌러볼까~?</button>
      <br></br>
      <button onClick={handleOrderId}>토스페이를 위해~</button>
      <div className="font-semibold  text-[35px] mt-[20px] mb-[26px]">
        {techBookInfo?.price.toLocaleString()}원
      </div>
      <div className="flex justify-around mb-[42px]">
        <div className="flex items-center mr-[30px]">
          <img src="/icons/educationdetail-user.svg" className="mr-[7px]" alt="유저" />
          <div className="font-[18px] font-regular">{techBookInfo?.writer}</div>
        </div>
        <div className="flex items-center mr-[30px]">
          {isTechBook ? (
            <>
              <img src="/icons/educationdetail-page.svg" className="mr-[7px]" alt="페이지" />
              <div className="font-[18px] font-regular">{techBookInfo?.techBookPage} 페이지</div>
            </>
          ) : (
            <>
              <img src="/icons/educationdetail-clock.svg" className="mr-[7px]" alt="시간" />
              <div className="font-[18px] font-regular">
                {techBookInfo?.techBookPage} 1시간 10분
              </div>
            </>
          )}
        </div>
        <div className="flex items-center">
          <img src="/icons/educationdetail-fire.svg" className="mr-[7px]" alt="단계" />
          <div className="font-[18px] font-regular">{techBookInfo?.educationLevel}용</div>
        </div>
      </div>
      <div className="relative ">
        {IsLogin ? (
          <ActionButton variant={'payment'} text="PDF 보기" customeStyle="w-full mb-[14px]" />
        ) : (
          <ActionButton
            variant={'payment'}
            text="결제하기"
            customeStyle="w-full mb-[14px]"
            // onClick={handlePay}
            onClick={() => {
              setIsModalOpen(true);
            }}
          />
        )}

        <img
          src="/icons/educationdetail-tree.svg"
          alt="포인트"
          className="absolute top-[-26px] right-[8px]"
        />
      </div>
      <ActionButton
        variant={'like'}
        text="좋아요"
        customeStyle="w-full"
        // onClick={handleLike}
        onClick={() => {
          setIsModalOpen(true);
        }}
      />

      {/* 나가기 모달 */}
      {/* {isModalOpen && <EditProfileModal onClose={() => setIsModalOpen(false)} />} */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
          <div
            className="bg-white rounded-2xl p-8 w-[521px] text-center"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="font-esamanru text-2xl mb-2">로그인 후 이용가능한 서비스 입니다.</h2>

            <div className="text-sm text-grey700 font-medium mb-8">
              로그인 페이지로 이동하시겠습니까?
            </div>
            <div className="flex justify-between">
              <ActionButton
                text="네"
                customeStyle="!w-[220px] h-[42px] font-semibold !text-grey300 !border-black bg-white"
                onClick={() => {
                  navigate('/login');
                }}
              />
              <ActionButton
                text="아니요"
                customeStyle="!w-[220px] h-[42px] font-semibold text-primary300 border border-primary300"
                onClick={() => {
                  setIsModalOpen(false);
                }}
              />
            </div>
            {/* <button className="mt-4 text-sm font-semibold text-gray-400" onClick={onClose}>
              닫기
            </button> */}
          </div>
        </div>
      )}
    </div>
  );
};

export default EducationPay;
