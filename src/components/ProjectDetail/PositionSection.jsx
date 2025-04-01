import { useState } from 'react';
import PositionUpdate from './PositionUpdate';
import PositionChip from './PositionChip';

const PositionSection = () => {
  const [author, setAuthor] = useState(true);
  return (
    <>
      <div className=" w-[1136px] mx-auto mt-[50px] flex flex-col gap-4">
        <div className="text-[25px] font-semibold mt-[60px]">모집 분야</div>
        <div className="w-full border border-black"></div>
        <div className="w-[90%] flex flex-wrap gap-6">
          <PositionChip text="프론트엔드" />
          <PositionChip text="프론트엔드" />
          <PositionChip text="프론트엔드" />
        </div>
        {/* 관리자 버전 */}
        {/* <div className="w-[90%] flex flex-wrap gap-6">
          <PositionUpdate text="프론트엔드" />
          <PositionUpdate text="벡엔드" />
          <PositionUpdate text="디자이너" />
        </div> */}
      </div>
    </>
  );
};

export default PositionSection;
