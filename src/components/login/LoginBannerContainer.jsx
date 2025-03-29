const LoginBannerContainer = () => {
  return (
    <div className="w-[672px] h-[685px] bg-[#ebf9eb] rounded-l-[30px] relative shadow-lg shadow-gray-200">
      <div className="flex justify-center items-end gap-4 mt-[58px]">
        <p className="text-2xl font-esamanru font-light text-primary300 ">개발자 역량 강화는</p>
        <img src="/images/main-logo-no-space.svg" alt="메인 로고" className="mb-1" />
        <p className="text-2xl font-esamanru font-light text-primary300">와 함께!</p>
      </div>
      {/* 이미지 */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[418px]">
        <img src="/images/login-image.svg" alt="로그인 이미지" />
      </div>
    </div>
  );
};

export default LoginBannerContainer;
