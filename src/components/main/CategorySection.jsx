import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const CategorySection = () => {
  const buttonList = [
    {
      img: '/images/main/categorySection/techTube.svg',
      text: 'TechTube',
      link: '/education?category=techtube',
    },
    {
      img: '/images/main/categorySection/techBook.svg',
      text: 'TechBook',
      link: '/education?category=techbook',
    },
    {
      img: '/images/main/categorySection/job.svg',
      text: '채용',
      link: '/career',
    },
    {
      img: '/images/main/categorySection/project.svg',
      text: '프로젝트',
      link: '/projectJoin',
    },
    {
      img: '/images/main/categorySection/community.svg',
      text: '커뮤니티',
      link: '/community',
    },
  ];

  return (
    <div className="h-[130px] flex justify-center items-center gap-[60px] mt-[117px]">
      {buttonList.map((item, index) => (
        <motion.div
          key={index}
          whileHover={{ scale: 1.1, y: -5 }}
          transition={{ type: 'spring', stiffness: 300, damping: 15 }}
        >
          <Link
            to={item.link}
            className="h-[130px] flex flex-col items-center gap-4 hover:cursor-pointer"
          >
            <img src={item.img} alt={item.text} />
            <div className="text-[16px] font-medium">{item.text}</div>
          </Link>
        </motion.div>
      ))}
    </div>
  );
};

export default CategorySection;
