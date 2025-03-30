import Badge from '@/common/Badge';

const TechBookBest = () => {
  const bookList = [
    {
      title: `AI와 IT를 활용한 스마트 재테크`,
      author: '김코딩',
      like: 0,
      price: '16,800',
      imageUrl: '/images/dummy-lecture.png',
      position: '프론트엔드',
    },
    {
      title: `AI와 IT를 활용한 스마트 재테크`,
      author: '김코딩',
      like: 0,
      price: '16,800',
      imageUrl: '/images/dummy-lecture.png',
      position: '프론트엔드',
    },
    {
      title: `AI와 IT를 활용한 스마트 재테크`,
      author: '김코딩',
      like: 0,
      price: '16,800',
      imageUrl: '/images/dummy-lecture.png',
      position: '벡엔드',
    },
    {
      title: `AI와 IT를 활용한 스마트 재테크`,
      author: '김코딩',
      like: 0,
      price: '16,800',
      imageUrl: '/images/dummy-lecture.png',
      position: '벡엔드',
    },
  ];

  return (
    <div className=" w-[528px] h-[507px] flex flex-wrap justify-between gap-2">
      {bookList.map((item, index) => {
        return (
          // 카드
          <div
            key={index}
            className="w-[253px] h-[249px] relative flex flex-col justify-center items-center "
          >
            <Badge
              text={item.position}
              className={`w-[81px] h-[26px] ${item.position === '프론트엔드' ? 'bg-[#D7E5FF] text-[#0077FF] border-[#0077FF] ' : ''} ${item.position === '벡엔드' ? 'bg-[#FFCACA] text-[#FF6262] border-[#FF6262] ' : ''}border text-[13px] absolute top-0 left-[20px] m-[-10px]`}
            />
            <div className="w-[255px] h-[245px] flex flex-col border items-center justify-center gap-4 rounded-[10px]">
              <div className="w-[216px] h-[106px]">
                <img
                  src={item.imageUrl}
                  alt="강의 카드 이미지"
                  className="w-full h-full object-cover"
                />
              </div>{' '}
              <div className="flex flex-col ">
                <div className="text-[17px] font-[600] text-black">{item.title}</div>
                <div className="text-primary300 text-[17px] font-[600] ">{item.price}원</div>
                <div className="flex flex-row items-center">
                  <div>{item.author}</div>
                  <img
                    src="/icons/heart.svg"
                    alt="좋아요 아이콘"
                    className="w-5 h-5 inline-block align-middle"
                  />
                  <div>좋아요({item.like})</div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TechBookBest;
