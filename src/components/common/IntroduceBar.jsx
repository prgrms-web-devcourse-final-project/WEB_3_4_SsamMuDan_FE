const IntroduceBar = ({ text }) => {
  return (
    <div className="w-[550px] border-l-4 border-primary300">
      <div className="ml-[40px] flex flex-col gap-4">
        {/* 제목 */}
        <div className="text-[24px] font-semibold mt-3">{text.companyName}</div>
        <div className="text-[16px] text-grey300">
          <div>{text.teamName}</div>
          <div>
            {text.startDate} ~ {text.endDate ? text.endDate : '재직중'}
          </div>
        </div>
        <div className="text-[16px] mb-3">{text.careerDescription}</div>
      </div>
    </div>
  );
};

export default IntroduceBar;
