import CommunityCard from './CommunityCard';
import SlideButton from './SlideButton';

const CommunitySection = () => {
  return (
    <>
      <div className="w-[1246px] h-[316px] mx-auto">
        <div className="flex items-center justify-between">
          <div className="text-[25px] font-esamanru">커뮤니티에서 지금 만나요</div>
          <SlideButton />
        </div>
        <div className="flex flex-row justify-between mt-[35px]">
          <CommunityCard />
          <CommunityCard />
        </div>
      </div>
    </>
  );
};

export default CommunitySection;
