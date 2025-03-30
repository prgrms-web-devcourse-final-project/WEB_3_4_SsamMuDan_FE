import JoinCard from './JoinCard';
import PrimaryButton from '../common/PrimaryButton';

const ProjectSection = () => {
  return (
    <>
      <div className="text-[25px] font-esamanru w-[1246px] mx-auto ">
        {' '}
        🔥 프로젝트 같이 하자..!!{' '}
      </div>

      <div className="relative w-full h-[607px]">
        {/* 배경이미지 */}

        <div className="w-full h-[607px] overflow-hidden">
          <img
            src="/public/images/main/projectSection.svg  "
            alt=""
            className="w-full h-full object-contain"
          />
        </div>

        <div className="flex flex-col w-[1246px] h-[493px] absolute top-[80px] left-1/2 -translate-x-1/2 text-black">
          <div className="mb-5">
            <JoinCard />
          </div>
          <div className="mb-5">
            <JoinCard />
          </div>
          <div className="mb-5">
            <JoinCard />
          </div>
          <PrimaryButton text="더보기" width="1240px" height="63px" />
        </div>
      </div>
    </>
  );
};

export default ProjectSection;
