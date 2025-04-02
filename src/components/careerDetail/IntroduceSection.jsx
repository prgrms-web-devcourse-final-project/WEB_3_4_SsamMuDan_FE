const IntroduceSection = () => {
  return (
    <>
      <div className=" w-[1136px] h-[489px] mx-auto mt-[80px] flex flex-col gap-4">
        {/* 사진, 이름 영역 */}
        <div className="h-[217px] flex flex-row gap-7">
          <div className="w-[217px] h-[217px] rounded-[15px]">
            <img
              src="/public/images/dummy-lecture.png"
              alt="강의 카드 이미지"
              className="h-full object-cover rounded-[15px]"
            />
          </div>
          <div className="h-full flex flex-col justify-around">
            {/* 이름, 직업 */}
            <div className="flex flex-col gap-3">
              <div className="text-[36px] font-bold">홍길동</div>
              <div className="text-[24px] font-[500]">프론트엔드 개발자</div>
            </div>
            {/* 연찬, 이메일 */}
            <div className="flex flex-col gap-1 text-[16px]">
              <div className="flex flex-row gap-4">
                <div className="w-[46px] text-grey300 ">연차</div>
                <div>4년차</div>
              </div>
              <div className="flex flex-row gap-4">
                <div className="w-[46px] text-grey300">이메일</div>
                <div>dlehgud9@gmail.com</div>
              </div>
            </div>
          </div>
        </div>
        {/* 소개글 영역 */}
        <div className="w-full whitespace-pre-line mt-[20px]">
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

export default IntroduceSection;
