const LectureCard = ({ title, instructor, likes, price, imageUrl }) => {
  return (
    <div className="w-[318px] h-[297px]">
      {/* 이미지 */}
      <div className="w-full h-[185px] mb-3">
        <img
          src={imageUrl}
          alt="강의 카드 이미지"
          className="w-full h-full object-cover rounded-[15px]"
        />
      </div>

      {/* 타이틀 */}
      <p className="text-lg font-bold leading-none pl-1 mb-2">{title}</p>

      {/* 강사&좋아요 */}
      <div className="flex items-center mb-1">
        <span className="text-grey300 font-medium mr-5 ml-1">{instructor}</span>
        <div className="flex items-center gap-1">
          <img
            src="/icons/heart.svg"
            alt="좋아요 아이콘"
            className="w-5 h-5 inline-block align-middle"
          />
          <span className="text-grey300 font-medium">좋아요({likes})</span>
        </div>
      </div>

      {/* 가격 */}
      <span className="text-xl font-bold ml-1">{price.toLocaleString()}원</span>
    </div>
  );
};

export default LectureCard;
