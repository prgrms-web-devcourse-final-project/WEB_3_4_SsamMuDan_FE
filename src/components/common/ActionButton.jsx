// 로그인, 교육 페이지 결제창에서 사용하는 버튼

const ActionButton = ({
  text,
  variant = 'default', // default(로그인) | auth(회원가입) | payment(결제하기) | like(좋아요)
  isLiked = false,
  isPayCompleted = false,
  hasTopImage = false,
  topImageSrc = '',
  onClick,
  customeStyle,
}) => {
  // 기본 스타일
  const baseStyle = `
  relative rounded-[10px] flex items-center justify-center 
  transition-transform hover:scale-[1.02] active:scale-[0.98]
  duration-150
`;

  // 각 variant별 스타일
  const variants = {
    default: 'w-full h-[42px] bg-primary300 text-white border-none text-base',
    auth: 'w-full h-[42px] bg-white text-primary300 border border-primary300 text-base',
    payment:
      'w-[277px] h-[57px] bg-primary300 text-white border-none text-2xl font-esamanru font-esamanru-light',
    like: 'w-[380px] h-[57px] bg-white text-primary300 border border-primary300 text-2xl font-esamanru font-esamanru-medium',
    toMypage:
      'w-[277px] h-[57px] bg-white text-primary300 border border-primary300 text-2xl font-esamanru font-esamanru-light',
  };

  const style = `${baseStyle} ${variants[variant] || variants.default} ${customeStyle}`;

  return (
    <button className={style} onClick={onClick}>
      {/* 버튼 위 나뭇잎 */}
      {hasTopImage && (
        <img src={topImageSrc} alt="" className="absolute -top-3 right-3 w-[69px] h-[21px]" />
      )}

      {isPayCompleted ? (
        '바로보기'
      ) : variant === 'like' ? (
        <>
          <img
            src={isLiked ? '/icons/heart-filled.svg' : '/icons/heart-empty.svg'}
            alt="하트 아이콘"
            className="w-6 h-6 mr-2"
          />
          좋아요
        </>
      ) : (
        text
      )}
    </button>
  );
};

export default ActionButton;
