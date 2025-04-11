// 마이페이지, 교육페이지 배너에 사용하는 강의 카드

const LectureCardSimple = ({
  title,
  instructor,
  price,
  imageUrl,
  showPrice = true, // 기본값은 가격 O
  customstyle,
}) => {
  return (
    <div className="w-[285px] h-[291px]">
      {/* 이미지 */}
      <div className={`w-full h-[212px] mb-3 ${customstyle}`}>
        <img
          src={imageUrl}
          alt="강의 카드 이미지"
          className="w-full h-full object-cover rounded-[15px]"
        />
      </div>

      {/* 타이틀 */}
      <p className="font-bold leading-none pl-1 mb-2 line-clamp-1">{title}</p>

      {/* 강사 & 가격 */}
      <div className="flex items-center mb-1">
        <span className="text-sm text-grey600 font-medium mr-3 ml-1">{instructor}</span>
        {showPrice && (
          <span className="text-sm text-primary400 font-bold ml-1">{price.toLocaleString()}원</span>
        )}
      </div>
    </div>
  );
};

export default LectureCardSimple;
