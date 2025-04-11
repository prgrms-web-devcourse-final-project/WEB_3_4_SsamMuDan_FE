// 작성자만 가능한 인원수 변경 및 삭제

import { useState } from 'react';
import { UsersIcon, TrashIcon } from '@heroicons/react/24/outline';

const PositionUpdate = ({ text, count, onUpdate, onDelete }) => {
  const [num, setNum] = useState(count);

  const plus = () => {
    const updated = num + 1;
    setNum(updated);
    onUpdate(updated);
  };

  const minus = () => {
    const updated = num - 1;
    if (updated >= 0) {
      setNum(updated);
      onUpdate(updated);
    }
  };

  const handleDelete = () => {
    if (confirm(`"${text}" 포지션을 삭제하시겠습니까?`)) {
      onDelete();
    }
  };

  return (
    <div className="w-fit h-[44px] rounded-[12px] flex flex-row items-center gap-4 p-4 bg-grey100">
      {/* 포지션 */}
      <div className="flex flex-row items-center gap-2">
        <UsersIcon className="w-[26px]" />
        <div className="text-[18px]">{text}</div>
      </div>

      {/* 인원 설정 */}
      <div className="flex items-center gap-2">
        <div className="w-[26px] h-[26px] cursor-pointer" onClick={minus}>
          <img src="/images/projectJoinWrite/Minus.svg" alt="minus" />
        </div>
        <div className="text-[18px] font-bold">{num}</div>
        <div className="w-[26px] h-[26px] cursor-pointer" onClick={plus}>
          <img src="/images/projectJoinWrite/Plus.svg" alt="plus" />
        </div>
        <div className="text-[18px] font-bold">명</div>
      </div>
    </div>
  );
};

export default PositionUpdate;
