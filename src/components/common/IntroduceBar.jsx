const IntroduceBar = ({ text }) => {
  return (
    <div className="w-[550px] border-l-4 border-primary300">
      <div className="ml-[40px] flex flex-col gap-4">
        {/* 제목 */}
        <div className="text-[24px] font-semibold mt-3">프로그래머스</div>
        <div className="text-[16px] text-grey300">
          <div>팀원 / 개발팀</div>
          <div>2024.11.15~2025.04.18</div>
        </div>
        <div className="text-[16px] mb-3">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas aliquam assumenda nam
          laudantium nesciunt quae accusamus quisquam reprehenderit amet unde.
        </div>
      </div>
    </div>
  );
};

export default IntroduceBar;
