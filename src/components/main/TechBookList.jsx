const TechBookList = () => {
  const bookList = [
    {
      title: `AI와 IT를 활용한 스마트 재테크`,
      author: '김코딩',
      like: 0,
      content: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam optio quis rerum
        corrupti molestiae ab, dolorem cupiditate neque explicabo repellat accusantium
        voluptates reiciendis autem, temporibus expedita saepe excepturi, quod molestias!`,
      imageUrl: '/images/dummy-lecture.png',
    },
    {
      title: `AI와 IT를 활용한 스마트 재테크`,
      author: '김코딩',
      like: 0,
      content: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam optio quis rerum
        corrupti molestiae ab, dolorem cupiditate neque explicabo repellat accusantium
        voluptates reiciendis autem, temporibus expedita saepe excepturi, quod molestias!`,
      imageUrl: '/images/dummy-lecture.png',
    },
    {
      title: `AI와 IT를 활용한 스마트 재테크`,
      author: '김코딩',
      like: 0,
      content: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam optio quis rerum
        corrupti molestiae ab, dolorem cupiditate neque explicabo repellat accusantium
        voluptates reiciendis autem, temporibus expedita saepe excepturi, quod molestias!`,
      imageUrl: '/images/dummy-lecture.png',
    },
  ];

  return (
    <div className=" w-[700px] flex flex-col gap-3 border-r">
      {bookList.map((item, index) => {
        return (
          // 카드
          <div
            key={index}
            className="w-[670px] h-[158px] flex flex-row border justify-center items-center rounded-[10px]"
          >
            <div className="w-[450px] h-[114px] flex flex-col justify-between ">
              <div className="text-[20px] font-[600] text-black">{item.title}</div>
              <div className="flex flex-row items-center">
                <div>{item.author}</div>
                <img
                  src="/icons/heart.svg"
                  alt="좋아요 아이콘"
                  className="w-5 h-5 inline-block align-middle"
                />
                <div>좋아요({item.like})</div>
              </div>
              <div className="w-[471px] line-clamp-2">{item.content}</div>
            </div>
            <div className="w-[203px] h-[129px]">
              <img
                src={item.imageUrl}
                alt="강의 카드 이미지"
                className="w-full h-full object-cover rounded-[15px]"
              />
            </div>{' '}
          </div>
        );
      })}
    </div>
  );
};

export default TechBookList;
