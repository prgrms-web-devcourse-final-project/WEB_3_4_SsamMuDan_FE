import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import ActionButton from '../common/ActionButton';
import { useState } from 'react';
import postTechTubePay from '@/api/techtubeDetail/postTechTubePay';

// props로 techInfo 를 들고온다 *테크튜브랑 테크북 동일
const EducationPay = ({ techBookInfo, IsLogin, id }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const location = useLocation();
  const isTechBook = location.pathname.includes('TECH_BOOK');
  const navigate = useNavigate();

  const ffa = Number(id);
  console.log('아이디가 뭐야', typeof ffa);

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
