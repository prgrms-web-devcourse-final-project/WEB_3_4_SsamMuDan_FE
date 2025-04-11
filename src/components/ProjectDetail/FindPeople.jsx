import PrimaryButton from '../common/PrimaryButton';
import patchProjectStatus from '@/api/projectJoin/patchProjectStatus';

const FindPeople = ({ partnerType, isOwner, isOpen, setIsOpen, projectId }) => {
  const handleRecruitStatus = async () => {
    try {
      await patchProjectStatus(projectId);
      setIsOpen((prev) => !prev);
    } catch (error) {
      console.error('모집 상태 변경 실패:', error);
    }
  };

  return (
    <div className="w-[1136px] mx-auto mt-[50px] flex flex-col gap-4">
      <div className="text-[25px] font-semibold mt-[60px]">이런 분을 찾고 있습니다</div>
      <div className="w-full border border-black"></div>
      <div className="flex flex-col gap-3 mt-3 min-h-[150px]">
        {partnerType ? (
          <div className="ml-2 text-[20px] gap-3 flex flex-row">
            <span>-</span>
            <div>{partnerType}</div>
          </div>
        ) : (
          <div className="ml-2 text-[20px] text-gray-400">내용이 없습니다.</div>
        )}
      </div>

      {/* 모집 상태 변경 버튼 */}
      {isOwner && (
        <div className="w-full flex flex-row justify-end mt-[10px] mb-[78px]">
          <PrimaryButton
            width="135px"
            height="50px"
            text={isOpen ? '모집 중으로 변경' : '모집마감'}
            onClick={handleRecruitStatus}
          />
        </div>
      )}
    </div>
  );
};

export default FindPeople;
