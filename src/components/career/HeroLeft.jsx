const HeroLeft = () => {
  return (
    <div className="relative  w-[376px] h-[300px] flex flex-col justify-around ">
      <div className="border border-dashed border-[#EE5945] h-[200px] mt-[50px] w-0 absolute top-0 left-[19px] z-0"></div>
      <div className="w-full flex flex-row items-end gap-7 z-10">
        <div className="w-[40px] h-[40px] bg-[#EE5945] rounded-[50%] flex justify-center items-center">
          <div className="text-white text-[16px]">1</div>
        </div>
        <div className="flex flex-col">
          <div className="text-[14px] text-primary300">STEP 1</div>
          <div className="text-[25px] font-bold"> 기본정보 등록</div>
        </div>
      </div>
      <div className="w-full flex flex-row items-end gap-7 z-10">
        <div className="w-[40px] h-[40px] bg-[#EE5945] rounded-[50%] flex justify-center items-center">
          <div className="text-white text-[16px]">2</div>
        </div>
        <div className="flex flex-col">
          <div className="text-[14px] text-primary300">STEP 2</div>
          <div className="text-[25px] font-bold"> 경력 등록</div>
        </div>
      </div>
      <div className="w-full flex flex-row items-end gap-7 z-10">
        <div className="w-[40px] h-[40px] bg-[#EE5945] rounded-[50%] flex justify-center items-center">
          <div className="text-white text-[16px]">3</div>
        </div>
        <div className="flex flex-col">
          <div className="text-[14px] text-primary300">STEP 3</div>
          <div className="text-[25px] font-bold"> 프로젝트 등록</div>
        </div>
      </div>
    </div>
  );
};

export default HeroLeft;
