import LectureCard from '@/common/LectureCard';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

const EducationRelatedVideos = ({ techtubeList, educationType, techbookList }) => {
  return (
    <div className="w-[400px] h-[1207px] rounded-[12px] bg-[#F9F9F9] py-[27px] px-[44px] shadow-lg">
      {/* 타이틀 */}
      <div className="font-esamanru text-[24px] mb-[39px]">
        🔥 {educationType == 'TECH_TUBE' ? 'TechTube 와' : 'TechBook 과'} 연관 영상
      </div>
      {/* 콘텐츠 테크뷰트*/}
      {educationType === 'TECH_TUBE' &&
        techtubeList.map((item) => (
          <motion.div
            whileHover={{ y: -4 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            key={item.id}
          >
            <NavLink to={`/TECH_TUBE/${item.id}`} className="mb-[48px]">
              <div className="mb-[48px]">
                <LectureCard
                  title={item.title}
                  instructor={item.writer}
                  likes={item.likeCount}
                  price={item.price}
                  imageUrl={item.techTubeThumbnailUrl}
                  style="w-[342px] h-[195px]"
                  stylemg="mb-[47px]"
                />
              </div>
            </NavLink>
          </motion.div>
        ))}
      {educationType == 'TECH_BOOK' &&
        techbookList.map((item) => (
          <motion.div
            whileHover={{ y: -4 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            key={item.id}
          >
            <NavLink to={`/TECH_BOOK/${item.id}`} className="mb-[48px]" key={item.id}>
              <LectureCard
                title={item.title}
                instructor={item.writer}
                likes={item.likeCount}
                price={item.price}
                imageUrl={item.techBookThumbnailUrl}
                style="w-[342px] h-[195px]"
                stylemg="mb-[47px]"
              />
            </NavLink>
          </motion.div>
        ))}
    </div>
  );
};

export default EducationRelatedVideos;
