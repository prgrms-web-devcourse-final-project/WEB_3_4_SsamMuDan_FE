import { Button } from '@/components/ui/button';
import { ChevronDoubleRightIcon } from '@heroicons/react/24/solid';
import { motion } from 'framer-motion';
import useAuthStore from '@/store/useAuthStore';
import { NavLink } from 'react-router-dom';
// 기존 Button을 motion 컴포넌트로 확장합니다.
const MotionButton = motion(Button);
const HeroSection = () => {
  const { isLoggedIn, userInfo, logout, loginWithUserInfo } = useAuthStore();

  return (
    <>
      <div className="w-full h-[397px] bg-primary300">
        <div className="relative w-[1246px] h-full mx-auto flex flow-row">
          {/* 왼쪽 */}
          <div className=" relative w-[601px] h-full pt-[85px]">
            {/* 제목 */}
            <div className="flex flex-col">
              <div className="font-esamanru text-[35px] text-white">CoTree에서 다양한 경험을!!</div>
              <div className="text-[20px] text-white">지금 바로 프로젝트를 만들어 보세요</div>
            </div>

            {/* 버튼 */}
            <NavLink
              to={
                isLoggedIn && userInfo?.nickname
                  ? `/projectJoinWrite/${userInfo.nickname}`
                  : '/login'
              }
            >
              {' '}
              <MotionButton
                className="absolute w-[164px] h-[57px] bottom-[51px] right-0 rounded-[10px] flex flex-row justify-center items-center bg-white hover:bg-white"
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="text-[20px] text-primary300">등록하기</span>
                <ChevronDoubleRightIcon className="text-primary300" />
              </MotionButton>
            </NavLink>
          </div>

          {/* 오른쪽 */}
          <div className="w-[548px] h-[297px] absolute bottom-0 right-0">
            <img
              src="/images/projectJoin/projectJoinHero.svg"
              alt=""
              className="w-[548px] object-cover"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
