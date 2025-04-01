import PrimaryButton from '../common/PrimaryButton';

const FindPeople = () => {
  return (
    <>
      <div className=" w-[1136px] mx-auto mt-[50px] flex flex-col gap-4">
        <div className="text-[25px] font-semibold mt-[60px]">이런 분을 찾고 있습니다</div>
        <div className="w-full border border-black"></div>
        <div className="flex flex-col gap-3 ">
          <div className="ml-2 text-[20px] gap-3 flex flex-row">
            <span>-</span>
            <div>프로젝트에 열정적으로 임하실 분</div>
          </div>
          <div className="ml-2 text-[20px] gap-3 flex flex-row">
            <span>-</span>
            <div>프로젝트에 열정적으로 임하실 분</div>
          </div>
          <div className="ml-2 text-[20px] gap-3 flex flex-row">
            <span>-</span>
            <div>프로젝트에 열정적으로 임하실 분</div>
          </div>
          <div className="ml-2 text-[20px] gap-3 flex flex-row">
            <span>-</span>
            <div>프로젝트에 열정적으로 임하실 분</div>
          </div>
        </div>
        <div className="w-full flex flex-row justify-end mt-[200px] mb-[78px]">
          <PrimaryButton width="131px" height="50px" text="모집마감" />
        </div>
      </div>
    </>
  );
};

export default FindPeople;
