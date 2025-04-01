const EducationDetailIntro = ({ image, content }) => {
  return (
    <div className="bg-white rounded-[15px] border p-8">
      {image && <img src={image} alt="강의 이미지" className="w-full mb-8" />}
      <div className="text-sm text-gray-700 leading-relaxed whitespace-pre-wrap">{content}</div>
    </div>
  );
};

export default EducationDetailIntro;
