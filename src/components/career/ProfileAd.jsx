import * as motion from 'motion/react-client';

const ProfileAd = () => {
  return (
    <>
      <div className="w-[1246px] h-[64px] flex flex-row items-center bg-[#E9F5FF] rounded-[10px]">
        <motion.div
          animate={{ y: [0, -5, 0] }} // 위로 갔다가 다시 내려오는 애니메이션
          transition={{
            duration: 1,
            repeat: Infinity,
            repeatType: 'loop',
            ease: 'easeInOut',
          }}
          className="w-[25px] h-[25px] mx-[23px]"
        >
          <img
            src="/images/career/BlueHeart.svg" // 퍼블릭 폴더일 경우 `/public`은 빼야 합니다!
            alt="Blue Heart"
            className="w-full object-cover"
          />
        </motion.div>
        <div>생생한 성장 경험을 듣고, 프포필을 클릭해 제안을 보내거나 댓글을 남겨보세요</div>
      </div>
    </>
  );
};

export default ProfileAd;
