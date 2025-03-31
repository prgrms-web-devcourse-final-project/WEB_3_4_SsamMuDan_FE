import HeroLeft from './HeroLeft';
import HeroRight from './HeroRight';
const CareerHeroSection = () => {
  return (
    <>
      <div className="w-full h-[399px] bg-[#F6F7F9] rounded-[15px] flex flex-row justify-center items-center ">
        {/* 왼쪽 */}
        <HeroLeft />
        {/* 오른쪽 */}
        <HeroRight />
      </div>
    </>
  );
};

export default CareerHeroSection;
