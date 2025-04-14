const ProjectIntroduce = ({ data }) => {
  if (!data) return null; // 데이터 없으면 렌더링 X

  return (
    <>
      <div className="w-[1136px] mx-auto mt-[107px] flex flex-col gap-4">
        {/* 사진, 이름 영역 */}
        <div className="h-[217px] flex flex-row gap-7">
          <div className="w-[217px] h-[217px] rounded-[15px]">
            <img
              src={data.imageUrl || '/images/default-project.jpg'}
              alt="프로젝트 썸네일"
              className="w-full h-full object-cover rounded-[15px]"
            />
          </div>

          {/* 오른쪽 */}
          <div className="h-full flex flex-col justify-around">
            {/* 제목 (기존 작성자 대신 제목으로 변경) */}
            <div className="text-[36px] font-bold">{data.title}</div>

            <div className="w-[532px] flex flex-wrap gap-y-4 gap-x-[4%] text-[16px]">
              <div className="flex flex-row gap-2 w-[48%]">
                <div className="text-grey300 w-[72px] shrink-0">모집분야</div>
                <div className="flex-1">
                  {data.devPositionsInfo.map((pos) => pos.positionName).join(', ')}
                </div>
              </div>
              <div className="flex flex-row gap-2 w-[48%]">
                <div className="text-grey300 w-[72px] shrink-0">작성자</div>
                <div className="flex-1 truncate">{data.creatorName}</div>
              </div>
              <div className="flex flex-row gap-2 w-[48%]">
                <div className="text-grey300 w-[72px] shrink-0">시작일자</div>
                <div className="flex-1">{data.startDate}</div>
              </div>

              <div className="flex flex-row gap-2 w-[48%]">
                <div className="text-grey300 w-[72px] shrink-0">이메일</div>
                <div className="flex-1">{data.contact}</div>
              </div>
              <div className="flex flex-row gap-2 w-[48%]">
                <div className="text-grey300 w-[72px] shrink-0">종료일자</div>
                <div className="flex-1">{data.endDate}</div>
              </div>
            </div>
          </div>
        </div>

        {/* 소개글 */}
        <div className="text-[25px] font-semibold mt-[60px]">프로젝트 소개</div>
        <div className="w-full border border-black"></div>
        <div className="w-full whitespace-pre-line">{data.description}</div>
      </div>
    </>
  );
};

export default ProjectIntroduce;
