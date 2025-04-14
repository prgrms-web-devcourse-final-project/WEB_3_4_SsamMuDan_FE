import { NavLink } from 'react-router-dom';
import LectureCardSimple from '../common/LectureCardSimple';
import { motion } from 'framer-motion';

const EducationBanner = ({ newTechtube }) => {
  return (
    <div className="h-[377px] w-full relative bg-[url(/images/education-banner.svg)] bg-no-repeat bg-cover mb-[88px]">
      <div className="w-[1246px] flex pt-[60px] mx-auto">
        <div className="mr-[50px]">
          <motion.div
            className="origin-center w-[73px] h-[33px]  mb-[20px]"
            initial={{ scale: 0.95, opacity: 1 }}
            animate={{ scale: [0.95, 1.1, 0.95] }} // scale 애니메이션만 진행
            transition={{
              duration: 1.0, // 애니메이션 시간
              repeat: Infinity, // 무한 반복
              repeatType: 'loop', // 애니메이션이 반복되는 방식
              repeatDelay: 1, // 애니메이션 후 쉬는 시간 (초 단위)
              ease: 'easeInOut', // 이징 함수 설정
            }}
          >
            <div className="w-[73px] h-[33px] rounded-[20px] bg-[#3FC22E] text-[14px] font-bold text-center leading-[33px] text-white">
              New
            </div>
          </motion.div>
          <div className="font-esamanru esamanru-medium mb-[10px] text-[30px]">
            새로 등록된 강의
          </div>
          <div className="text-[16px] font-regular text-grey600">
            개발 강의 신규 서비스를 CoTree에서 만나세요!
          </div>
        </div>
        <div className="flex mt-[20px]">
          {newTechtube?.map((item) => (
            <NavLink to={`/TECH_TUBE/${item.id}`} className="mr-[16px]" key={item.id}>
              <LectureCardSimple
                imageUrl={item.techTubeThumbnailUrl}
                title={item.title}
                price={item.price}
                instructor={item.writer}
                customstyle="!h-[187px]"
              />
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EducationBanner;
