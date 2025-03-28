const Footer = () => {
  return (
    <div className="bg-[#F7F8FB] h-[277px] w-full">
      <div className="h-[74px] border-b border-[#DFDFDF] flex items-center justify-center">
        <img src="/images/main-footer-logo.svg" alt="푸터 로고" />
      </div>
      <div className="p-[20px] text-center text-[#A4A4A5]">
        <div className="font-300 mb-[3px]">Members</div>
        <div className="font-thin mb-[3px]">
          FrontEnd - Shin Joongseok &nbsp;&nbsp; KimJiwoo &nbsp;&nbsp; HongJonghee
        </div>
        <div className="font-thin mb-[28px]">
          BackEnd - KangSungwook &nbsp;&nbsp; KangChanwoo &nbsp;&nbsp; KimHaechan &nbsp;&nbsp;
          KwakYeonggyu KimSangjin{' '}
        </div>
        <div className="font-thin"> © 2025 Petner. All Rights Reserved.</div>
      </div>
    </div>
  );
};

export default Footer;
