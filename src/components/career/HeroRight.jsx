import { Button } from '../ui/button';
import { motion } from 'framer-motion';
import { CheckIcon, ChevronDoubleRightIcon } from '@heroicons/react/24/solid';
import { NavLink } from 'react-router-dom';

// 기존 Button을 motion 컴포넌트로 확장합니다.
const MotionButton = motion(Button);

const HeroRight = () => {
  return (
    <div className="w-[784px] h-[333px] bg-white rounded-[10px] relative shadow-[0_3px_4px_rgba(0,0,0,0.2)] ">
      {/* 왼쪽 */}
      <div className="w-[396px] h-[241px] flex flex-col justify-between absolute top-[43px] left-[50px] ">
        <NavLink to="/careerWrite">
          {' '}
          <MotionButton
            className="w-[124px] h-[34px] bg-[#FFE3DD] text-primary400 hover:bg-[#FFE3DD]"
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            이력서 등록
            <ChevronDoubleRightIcon />
          </MotionButton>
        </NavLink>

        <div className="flex flex-col">
          <div className="text-[24px] font-semibold">CoTree를 통해 간편하게</div>
          <div className="text-[24px] font-semibold">이력서를 등록하고 조회할 수 있어요!</div>
        </div>

        <div className="flex flex-col w-full h-[92px] justify-between">
          <div className="flex flex-row gap-4">
            <CheckIcon className="w-[24px] text-primary400" />
            <div>헤드헌팅 기회 이제는 CoTree에서 시작하세요!</div>
          </div>
          <div className="flex flex-row gap-4 ">
            <CheckIcon className="w-[24px] text-primary400" />
            <div>헤드헌팅 기회 이제는 CoTree에서 시작하세요!</div>
          </div>
          <div className="flex flex-row gap-4 ">
            <CheckIcon className="w-[24px] text-primary400" />
            <div>헤드헌팅 기회 이제는 CoTree에서 시작하세요!</div>
          </div>
        </div>
      </div>

      {/* 오른쪽 */}
      <div className="w-[400px] h-[241px] absolute top-[45px] right-0">
        <img src="/public/images/career/careerHero.svg" alt="" className="w-[400px] object-cover" />
      </div>
    </div>
  );
};

export default HeroRight;
