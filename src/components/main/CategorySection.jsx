const CategorySection = () => {
  const buttonList = [
    {
      img: '/public/images/main/categorySection/techTube.svg',
      text: 'TechTube',
    },
    {
      img: '/public/images/main/categorySection/techBook.svg',
      text: 'TecBook',
    },
    {
      img: 'public/images/main/categorySection/project.svg',
      text: '프로젝트',
    },
    {
      img: 'public/images/main/categorySection/job.svg',
      text: '채용',
    },
    {
      img: 'public/images/main/categorySection/community.svg',
      text: '커뮤니티',
    },
  ];

  return (
    <>
      <div className="h-[130px] flex flex-row  justify-center items-center gap-[60px] mt-[117px]">
        {buttonList.map((item, index) => {
          return (
            <div
              key={index}
              className="h-[130px hover:cursor-pointer flex flex-col items-center gap-4"
            >
              <img src={item.img} alt="" />
              <div>{item.text}</div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default CategorySection;
