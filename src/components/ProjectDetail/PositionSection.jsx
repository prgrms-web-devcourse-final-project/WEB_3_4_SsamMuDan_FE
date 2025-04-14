import { useState } from 'react';
import PositionUpdate from './PositionUpdate';
import PositionChip from './PositionChip';
import patchProjectPosition from '@/api/projectJoin/patchProjectPosition';

const PositionSection = ({ devPositionsInfo, isOwner, projectId }) => {
  // 기존 인원수 데이터를 가져와서 수정할 수 있는 상태로 만들기
  const [positions, setPositions] = useState(devPositionsInfo); // [{ id, name, amount }]

  const handleUpdate = (id, newAmount) => {
    setPositions((prev) =>
      prev.map((pos) => (pos.projectDevPositionId === id ? { ...pos, amount: newAmount } : pos)),
    );
  };

  const handleDelete = (id) => {
    setPositions((prev) => prev.filter((pos) => pos.projectDevPositionId !== id));
  };

  const handleSave = async () => {
    try {
      const payload = positions
        .filter((pos) => pos.amount > 0) // -> 0명인 직무는 삭제
        .map(({ projectDevPositionId, amount }) => ({
          projectDevPositionId,
          amount,
        }));

      await patchProjectPosition(projectId, payload);
      alert('모집 인원이 수정되었습니다!');
    } catch (err) {
      alert('수정에 실패했습니다.');
      console.error(err);
    }
  };

  return (
    <div className="w-[1136px] mx-auto mt-[50px] flex flex-col gap-4">
      <div className="text-[25px] font-semibold mt-[60px]">모집 분야</div>
      <div className="w-full border border-black"></div>

      <div className="w-[90%]">
        {isOwner && (
          <>
            <div className="text-[14px] text-grey600 mt- mb-3">
              ※ 인원을 0명으로 설정하면 해당 포지션은 삭제되며, 다시 추가할 수 없으니 신중히 결정해
              주세요.
            </div>
            <div className="flex flex-wrap gap-6 mt-2">
              {positions.map((pos) => (
                <PositionUpdate
                  key={pos.projectDevPositionId}
                  text={pos.positionName}
                  count={pos.amount}
                  onUpdate={(newAmount) => handleUpdate(pos.projectDevPositionId, newAmount)}
                  onDelete={() => handleDelete(pos.projectDevPositionId)}
                />
              ))}
            </div>
          </>
        )}

        {!isOwner && (
          <div className="flex flex-wrap gap-6 mt-4">
            {positions.map((pos) => (
              <PositionChip
                key={pos.projectDevPositionId}
                text={pos.positionName}
                count={pos.amount}
              />
            ))}
          </div>
        )}
      </div>

      {isOwner && (
        <div className="flex justify-end mt-4">
          <button
            onClick={handleSave}
            className="px-6 py-2 bg-primary300 text-white rounded-[8px] text-[16px] font-semibold"
          >
            저장하기
          </button>
        </div>
      )}
    </div>
  );
};

export default PositionSection;
