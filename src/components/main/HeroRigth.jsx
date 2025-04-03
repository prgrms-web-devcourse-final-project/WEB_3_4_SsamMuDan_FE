const HeroRight = () => {
  return (
    <>
      <div className="w-[48%] max-w-[800px] h-full relative">
        {/* 제일 뒷 배경 */}
        <div className="absolute right-0 w-[645px] h-[514px] bg-[#ACF0D8] z-0 "></div>
        <div className="absolute top-[35px] right-[57px] w-[1026px] ">
          <img src="/images/main-banner-green.svg" alt="" />
        </div>
      </div>
    </>
  );
};

export default HeroRight;
