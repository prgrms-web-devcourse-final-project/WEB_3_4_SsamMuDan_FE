const EducationBookDetailIntro = ({ image, content }) => {
  return (
    <div className="bg-white rounded-[15px] border p-8">
      {/* 강의소개 */}
      <div className="mb-[86px]">
        <div className="text-[30px] font-regular mb-[30px]">강의소개</div>
        {/* 콘텐츠 내용이 들어가야한다 */}
        {image && <img src={image} alt="강의 이미지" className="w-full mb-8" />}
        <div className="text-sm text-gray-700 leading-relaxed whitespace-pre-wrap">{content}</div>
      </div>
      {/* 미리보기 */}
      <div className="">
        <div className="text-[30px] font-regular mb-[30px]">미리보기</div>
        {/* pdf자리 */}
        <div className="h-[1020px] w-[761px] bg-secondary"></div>
      </div>
    </div>
  );
};

export default EducationBookDetailIntro;
