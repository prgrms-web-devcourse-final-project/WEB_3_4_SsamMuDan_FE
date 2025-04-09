import { useState } from 'react';
import PositionUpdate from './PositionUpdate';
import PositionChip from './PositionChip';

const PositionSection = ({ devPositionsInfo, isOwner }) => {
  // [{ 백엔드: 4 }, { 프론트엔드: 2 }] → { 백엔드: 4, 프론트엔드: 2 }
  const parsedPositions = devPositionsInfo.reduce((acc, cur) => ({ ...acc, ...cur }), {});

  const [author, setAuthor] = useState(true);
  return (
    <div className="w-[1136px] mx-auto mt-[50px] flex flex-col gap-4">
      <div className="text-[25px] font-semibold mt-[60px]">모집 분야</div>
      <div className="w-full border border-black"></div>

      <div className="w-[90%] flex flex-wrap gap-6">
        {/* 작성자는 인원수 변경 및 삭제 가능 */}
        {Object.entries(parsedPositions).map(([position, count]) =>
          isOwner ? (
            <PositionUpdate key={position} text={position} count={count} />
          ) : (
            <PositionChip key={position} text={position} count={count} />
          ),
        )}
      </div>
    </div>
  );
};

export default PositionSection;
