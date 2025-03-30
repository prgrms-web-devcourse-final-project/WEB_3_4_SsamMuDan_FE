const HeroRight = () => {
  return (
    <>
      <div className="w-[48%] max-w-[800px] h-full relative">
        {/* 제일 뒷 배경 */}
        <div className="absolute right-0 w-[70%] h-[516px] bg-[#ACF0D8] z-0 "></div>

        <div>
          {/* 진한 초록배경 */}
          <div className="absolute bottom-0 right-0  w-[100%] h-[520px] rounded-[20px] bg-primary300 z-10"></div>
          {/* 사람 */}
          <div className="absolute top-[170px] left-[13%] w-[70%] h-[370px]  z-20">
            <img src="/public/images/main/heroPeople.svg" alt="" />
          </div>
          {/* 왼쪽 별 */}
          <div className="absolute top-[40px] left-[1px] w-[45%] h-[370px] z-20">
            <img src="/public/images/main/mainHeroSection/Mask group-2.svg " alt="" />
          </div>
          {/* 오른쪽 별 */}
          <div className="absolute top-[90px] right-[1px] w-[45%] h-[370px] z-20">
            <img src="/public/images/main/mainHeroSection/Mask group-3.svg " alt="" />
          </div>
          {/* 오른쪽하단 하늘 + 하양 */}
          <div className="absolute bottom-0 rounded-tl-2xl right-0 w-[18%] h-[180px] bg-white z-30 "></div>
          <div className="absolute bottom-[60px] rounded-tl-2xl right-0 w-[18%] h-[120px] bg-[#ACF0D8] z-40 shadow-[0_3px_4px_rgba(0,0,0,0.2)]"></div>
        </div>
      </div>
    </>
  );
};

export default HeroRight;
