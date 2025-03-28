import StackBadge from "@/common/StackBadge";

const Jiwoo = () => {
  return (
    <div className="flex gap-2">
      <StackBadge text="JavaScript"/>
      {/* 수정용 */}
      <StackBadge text="TypeScript" showCloseIcon={true} />
    </div>
  );
};

export default Jiwoo;