import { NavLink, useLocation, useNavigate, useParams } from 'react-router-dom';
import ActionButton from '../common/ActionButton';
import { useEffect, useState } from 'react';
import postTechTubePay from '@/api/techtubeDetail/postTechTubeLike';
import postTechsPay from '@/api/techtubeDetail/postTechsPay';
import { loadTossPayments } from '@tosspayments/payment-sdk';
import useAuthStore from '@/store/useAuthStore';
import ReactPlayer from 'react-player';
import postTechTubeLike from '@/api/education/postTechTubeLike';
import deleteTechTubeLike from '@/api/education/deleteTechTubeLike';
import postTechBookLike from '@/api/education/postTechBookLike';
import deleteTechBookLike from '@/api/education/deleteTechBookLike';

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
  const userInfo = useAuthStore((state) => state.userInfo); //로그인
  const [isLiked, setIsLiked] = useState(techBookInfo?.isLiked || false); // 좋아요 상태

  const handleVideoClick = () => {
    setIsModalOpen(true);
  };

  // 결제시 보여주는 비디오
  const techTubeVideo = () => {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
        <div
          className="bg-white rounded-2xl p-8 w-[800px] h-[500px] text-center"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex justify-between items-start">
            <h2 className="text-left font-esamanru text-black text-2xl mb-8">강의 동영상</h2>
            <button
              onClick={() => setIsModalOpen(false)}
              className=" text-[#c6c6c6] text-2xl hover:scale-110 transition font-semibold"
            >
              ✕
            </button>
          </div>
          <ReactPlayer
            url={techBookInfo.techTubeUrl}
            controls
            playing={false}
            width="100%"
            height="80%"
          />
        </div>
      </div>
    );
  };

  // 결제를 위해 정보 posts

  const handleOrderId = async () => {
    if (isLoading) return; // 중복 실행 방지
    setIsLoading(true); // 즉시 로딩 시작
    try {
      const response = await postTechsPay({
        techEducationType: educationType,
        itemId: id,
        amount: techBookInfo?.price,
        productName: techBookInfo?.title,
      });

      const orderId = response.data?.orderId;

      const tossPayments = await loadTossPayments(tosspaykey);

      tossPayments.requestPayment('카드', {
        amount: techBookInfo.price,
        orderId: orderId,
        orderName: techBookInfo.title,
        customerName: userInfo.username,
        successUrl: `http://localhost:3000/payment`,
        failUrl: `http://localhost:3000/payfail`,
      });
    } catch (error) {
      console.error('토스페이 실패', error);
    } finally {
      setIsLoading(false); // 무조건 초기화
    }
  };

  //pdf 열기
  const handleOpenPdf = () => {
    window.open(techBookInfo.techBookUrl, '_blank');
  };

  // 좋아요 토글 함수
  const handleLikeToggle = async () => {
    if (!IsLogin) {
      setIsModalOpen(true);
      return;
    }

    try {
      if (isLiked) {
        if (educationType === 'TECH_TUBE') {
          await deleteTechTubeLike({ itemId: id });
        } else {
          await deleteTechBookLike({ itemId: id });
        }
      } else {
        if (educationType === 'TECH_TUBE') {
          await postTechTubeLike({ itemId: id });
        } else {
          await postTechBookLike({ itemId: id });
        }
      }

      setIsLiked(!isLiked);
    } catch (error) {
      alert('좋아요 처리 중 오류가 발생했습니다.');
      console.error(error);
    }
  };

  // 좋아요 상태 유지
  useEffect(() => {
    setIsLiked(techBookInfo?.isLike ?? false);
  }, [techBookInfo?.isLike]);

  return (
    <div className="w-[400px] h-[355px] rounded-[12px] bg-white border border-[#D9D9D9] shadow-md  p-[24px] mb-[28px]">
      <div className="font-semibold  text-[35px] mt-[20px] mb-[26px]">
        {techBookInfo?.price.toLocaleString()}원
      </div>
      <div className="flex justify-around mb-[42px]">
        <div className="flex items-center mr-[30px] max-w-[111px]">
          <img src="/icons/educationdetail-user.svg" className="mr-[7px]" alt="유저" />
          <div className="font-[18px] font-regular text-ellipsis overflow-hidden whitespace-nowrap max-w-[90px]">
            {techBookInfo?.writer}
          </div>
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
      {/* <div className="relative ">
        {IsLogin && techBookInfo?.isPaymentDone ? (
          educationType == 'TECH_TUBE' ? (
            <ActionButton
              variant={'payment'}
              text="영상 보기"
              customeStyle="w-full mb-[14px]"
              onClick={handleVideoClick}
            />
          ) : (
            <ActionButton
              variant={'payment'}
              text="PDF 보기"
              customeStyle="w-full mb-[14px]"
              onClick={handleOpenPdf}
            />
          )
        ) : (
          <ActionButton
            variant={'payment'}
            text="결제하기"
            customeStyle="w-full mb-[14px]"
            // onClick={handlePay}
            onClick={handleOrderId}
          />
        )}

        <img
          src="/icons/educationdetail-tree.svg"
          alt="포인트"
          className="absolute top-[-26px] right-[8px]"
        />
      </div>
      {!IsLogin && (
        <div>
          <ActionButton
            variant={'payment'}
            text="결제하기"
            customeStyle="w-full mb-[14px]"
            // onClick={handlePay}
            onClick={handleOrderId}
          />
          <ActionButton variant={'like'} text="좋아요" customeStyle="w-full" onClick={() => {}} />
        </div>
      )} */}
      <div className="relative">
        {/* 결제 or 보기 버튼 */}
        {IsLogin ? (
          techBookInfo?.isPaymentDone ? (
            educationType === 'TECH_TUBE' ? (
              <ActionButton
                variant="payment"
                text="영상 보기"
                customeStyle="w-full mb-[14px]"
                onClick={handleVideoClick}
              />
            ) : (
              <ActionButton
                variant="payment"
                text="PDF 보기"
                customeStyle="w-full mb-[14px]"
                onClick={handleOpenPdf}
              />
            )
          ) : (
            <ActionButton
              variant="payment"
              text="결제하기"
              customeStyle="w-full mb-[14px]"
              onClick={handleOrderId}
            />
          )
        ) : (
          <ActionButton
            variant="payment"
            text="결제하기"
            customeStyle="w-full mb-[14px]"
            onClick={() => setIsModalOpen(true)}
          />
        )}

        {/* 좋아요 버튼 */}
        <ActionButton
          variant="like"
          text="좋아요"
          customeStyle="w-full"
          isLiked={isLiked}
          onClick={IsLogin ? handleLikeToggle : () => setIsModalOpen(true)}
        />

        {/* 포인트 이미지 */}
        <img
          src="/icons/educationdetail-tree.svg"
          alt="포인트"
          className="absolute top-[-26px] right-[8px]"
        />
      </div>
      {/* 나가기 모달 */}
      {/* {isModalOpen && <EditProfileModal onClose={() => setIsModalOpen(false)} />} */}
      {!IsLogin && isModalOpen && (
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
          </div>
        </div>
      )}

      {/*  결제시 보여줄 동영상 */}
      {techBookInfo?.isPaymentDone && isModalOpen && techTubeVideo()}
    </div>
  );
};

export default EducationPay;
