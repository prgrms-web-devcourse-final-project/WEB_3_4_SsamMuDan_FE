const StackBadge = ({ text, showCloseIcon = false, onClose }) => {
  return (
    <div className="inline-flex items-center px-3 py-[10px] bg-[#31374C] text-white rounded-[20px]">
      <span className="text-sm leading-none">{text}</span>
      {showCloseIcon && (
        <img
          src="/icons/close.svg"
          alt="닫기 아이콘"
          onClick={onClose}
          className="w-2 h-2 ml-[10px] cursor-pointer inline-block align-middle"
        />
      )}
    </div>
  );
};

export default StackBadge;
