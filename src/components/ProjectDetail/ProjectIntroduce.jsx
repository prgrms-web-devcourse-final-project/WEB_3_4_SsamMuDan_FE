const ProjectIntroduce = () => {
  return (
    <>
      <div className=" w-[1136px] mx-auto mt-[107px] flex flex-col gap-4">
        {/* 사진, 이름 영역 */}
        <div className="h-[217px] flex flex-row gap-7">
          <div className="w-[217px] h-[217px] rounded-[15px]">
            <img
              src="/public/images/dummy-lecture.png"
              alt="강의 카드 이미지"
              className="h-full object-cover rounded-[15px]"
            />
          </div>
          {/* 오른쪽 */}
          <div className="h-full flex flex-col justify-around">
            {/* 이름, 직업 */}
            <div className="text-[36px] font-bold">홍길동</div>
            {/* 연찬, 이메일 */}
            <div className="w-[532px] h-[113px] flex flex-wrap gap-4 text-[16px]">
              {/* 모집 구분 */}
              <div className="flex flex-row gap-4 w-[48%]">
                <div className="text-grey300 ">모집 구분</div>
                <div>프론트엔드</div>
              </div>
              {/* 진행 방식 */}
              <div className="flex flex-row gap-4 w-[48%]">
                <div className=" text-grey300 ">진행 방식</div>
                <div>온라인</div>
              </div>
              {/* 모집 구분 */}
              <div className="flex flex-row gap-4 w-[48%]">
                <div className=" text-grey300 ">시작 예정</div>
                <div>온라인</div>
              </div>
              {/* 모집 구분 */}
              <div className="flex flex-row gap-4 w-[48%]">
                <div className=" text-grey300 ">시작 예정</div>
                <div>온라인</div>
              </div>
              {/* 모집 구분 */}
              <div className="flex flex-row gap-4 w-[48%]">
                <div className=" text-grey300 ">시작 예정</div>
                <div>온라인</div>
              </div>
            </div>
          </div>
        </div>
        {/* 제목 */}
        <div className="text-[25px] font-semibold mt-[60px]">프로젝트 소개</div>
        <div className="w-full border border-black"></div>
        {/* 소개글 영역 */}
        <div className="w-full whitespace-pre-line  ">
          {`   Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime facilis, voluptas
                debitis ipsa esse voluptatem, incidunt rerum optio ipsum culpa rem repellendus quo!
  
                Reprehenderit corrupti nemo distinctio quos modi fugiat?r   
                
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime facilis, voluptas
                debitis ipsa esse voluptatem, incidunt rerum optio ipsum culpa rem repellendus quo!
                Reprehenderit corrupti nemo distinctio quos modi fugiat?r   Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime facilis, voluptas
                debitis ipsa esse voluptatem, incidunt rerum optio ipsum culpa rem repellendus quo!
                Reprehenderit corrupti nemo distinctio quos modi fugiat?r   Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime facilis, voluptas
                Reprehenderit corrupti nemo distinctio quos modi fugiat?r`}
        </div>
      </div>
    </>
  );
};

export default ProjectIntroduce;
