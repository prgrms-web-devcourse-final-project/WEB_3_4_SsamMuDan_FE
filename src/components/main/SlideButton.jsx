import { NavLink } from 'react-router-dom';
import { ChevronRightIcon, ChevronLeftIcon } from '@heroicons/react/24/solid';
import { motion } from 'framer-motion';

// 스와이퍼의 기존 네비게이션 버튼 대신 사용함
const SlideButton = ({ onPrev, onNext, linkTo = '/' }) => {
  return (
    <div className="flex items-center">
      {/* 모두 보기 */}
      <motion.div
        whileHover={{ y: -2, opacity: 0.85 }}
        transition={{ type: 'spring', stiffness: 300 }}
      >
        <NavLink to={linkTo} className="text-[#8D8D8D] text-[18px] font-semibold mr-[27px]">
          모두 보기
        </NavLink>
      </motion.div>

      {/* 슬라이드 버튼 */}
      <div className="w-[74.98px] h-[33px] rounded-[8px] border border-[#D6D6D6] flex items-center justify-center">
        <motion.div
          whileTap={{ scale: 0.9 }}
          whileHover={{ scale: 1.1 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <ChevronLeftIcon
            className="w-[18px] text-[#7C7C7C] mr-[5px] cursor-pointer"
            strokeWidth={3}
            onClick={onPrev}
          />
        </motion.div>
        <motion.div
          whileTap={{ scale: 0.9 }}
          whileHover={{ scale: 1.1 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <ChevronRightIcon
            className="w-[18px] text-[#7C7C7C] ml-[5px] cursor-pointer"
            strokeWidth={3}
            onClick={onNext}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default SlideButton;
