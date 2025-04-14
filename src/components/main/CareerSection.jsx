import { Link } from 'react-router-dom';
import { Button } from '../ui/button';
import { motion } from 'framer-motion';

const CareerSection = () => {
  return (
    <div className="relative w-full h-[439px] bg-[#EBF9EB]">
      <div className="w-[1246px] h-full mx-auto flex items-center justify-between relative">
        <div className="flex flex-col gap-8 text-black">
          <div className="flex flex-col gap-4">
            <div className="text-[36px] font-semibold">지금 영입하지 않으면 후회할지도...?! 😆</div>
            <div className="flex flex-col text-[#6C6C6C] text-[20px]">
              <div>자신만의 이력서로 진짜 나를 보여주세요.</div>
              <div>CoTree는 여러분이 빛날 수 있도록 다양한 길을 제시합니다!</div>
            </div>
          </div>

          <Link to="/career">
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              <Button className="w-[279px] h-[50px] text-[20px] text-[#48FF08] font-bold">
                자신을 어필하러 가기
              </Button>
            </motion.div>
          </Link>
        </div>

        <img
          src="/images/main/main-career-banner.svg"
          alt="커리어 배너"
          className="w-[440px] h-[500px] object-contain"
        />
      </div>
    </div>
  );
};

export default CareerSection;
