import Badge from '@/common/Badge';
import StackBadge from '@/common/StackBadge';

const Jiwoo = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-2">
        <StackBadge text="JavaScript" />
        <StackBadge text="TypeScript" showCloseIcon={true} />
      </div>

      <div className="flex gap-2">
        <Badge text="모집중" className="w-[72px] h-[33px] bg-[#3FC22E] text-white text-sm" />
        <Badge text="4년차" className="w-[72px] h-[33px] bg-[#3FC22E] text-white text-sm" />
        <Badge text="프론트엔드" className="w-[138px] h-[48px] bg-primary300 text-white text-2xl" />
        <Badge text="백엔드" className="w-[138px] h-[48px] border text-2xl" />
      </div>
    </div>
  );
};

export default Jiwoo;
