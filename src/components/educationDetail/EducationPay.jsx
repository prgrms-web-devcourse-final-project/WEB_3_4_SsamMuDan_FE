import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import ActionButton from '../common/ActionButton';

// props로 techInfo 를 들고온다 *테크튜브랑 테크북 동일
const EducationPay = ({ techBookInfo, IsLogin }) => {
  const location = useLocation();
  const isTechBook = location.pathname.includes('TECH_BOOK');
  const navigate = useNavigate();

  //로그인 관련 버튼
  const handleLike = () => {
    if (!IsLogin) {
      alert('로그인 후 이용가능한 서비스 입니다.');
      navigate('/login');
      return;
    }
  };

  const handlePay = () => {
    if (!IsLogin) {
      alert('로그인 후 이용가능한 서비스 입니다.');
      navigate('/login');
      return;
    }
  };

  //pdf 열기
  const handleOpenPdf = () => {
    window.open(techBookInfo.techBookUrl, '_blank');
  };

  return (
    <div className="w-[400px] h-[355px] rounded-[12px] bg-white border border-[#D9D9D9] shadow-md  p-[24px] mb-[28px]">
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
        <ActionButton
          variant={'payment'}
          text="결제하기"
          customeStyle="w-full mb-[14px]"
          onClick={handlePay}
        />
        {/* <ActionButton
          variant={'payment'}
          text="PDF 보기"
          customeStyle="w-full mb-[14px]"
          onClick={handleOpenPdf}
        /> */}
        <img
          src="/icons/educationdetail-tree.svg"
          alt="포인트"
          className="absolute top-[-26px] right-[8px]"
        />
      </div>
      <ActionButton variant={'like'} text="좋아요" customeStyle="w-full" onClick={handleLike} />
    </div>
  );
};

export default EducationPay;
