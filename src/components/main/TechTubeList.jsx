import LectureCard from '@/common/LectureCard';

const TechTubeList = () => {
  const dummyLecture = [
    {
      title: '한 입 크기로 잘라 먹는 리액트(React.js) : 기초부터 실전까지',
      instructor: '김코딩',
      likes: 304,
      price: 16800,
      imageUrl: '/images/dummy-lecture.png',
    },
    {
      title: '한 입 크기로 잘라 먹는 리액트(React.js) : 기초부터 실전까지',
      instructor: '김코딩',
      likes: 304,
      price: 16800,
      imageUrl: '/images/dummy-lecture.png',
    },
    {
      title: '한 입 크기로 잘라 먹는 리액트(React.js) : 기초부터 실전까지',
      instructor: '김코딩',
      likes: 304,
      price: 16800,
      imageUrl: '/images/dummy-lecture.png',
    },
    {
      title: '한 입 크기로 잘라 먹는 리액트(React.js) : 기초부터 실전까지',
      instructor: '김코딩',
      likes: 304,
      price: 16800,
      imageUrl: '/images/dummy-lecture.png',
    },
  ];
  return (
    <>
      <div className="flex flex-row items-center justify-between">
        {dummyLecture.map((item, index) => {
          return <LectureCard {...item} key={index} />;
        })}
      </div>
    </>
  );
};

export default TechTubeList;
