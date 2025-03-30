import CommunityCard from './CommunityCard';

const CommunitySection = () => {
  return (
    <>
      <div className="w-[1246px] h-[316px] mx-auto">
        <div className="text-[25px] font-esamanru">커뮤니티에서 지금 만나요</div>
        <div className="flex flex-row justify-between mt-[35px]">
          <CommunityCard />
          <CommunityCard />
        </div>
      </div>
    </>
  );
};

export default CommunitySection;
