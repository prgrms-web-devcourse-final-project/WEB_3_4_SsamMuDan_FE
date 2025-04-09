import { ChatBubbleOvalLeftEllipsisIcon, EyeIcon, HeartIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';

const CommunityBestSection = ({ bestCommunity }) => {
  const profileThum = bestCommunity.profileImage;
  return (
    <div className="mb-24">
      <div className="font-esamanru text-2xl mb-10">👑 커뮤니티 Best</div>
      <div className="flex gap-4">
        {bestCommunity.map((item, idx) => (
          <motion.div
            key={idx}
            className="w-[431px] cursor-pointer"
            whileHover={{ scale: 1.03, y: -6 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          >
            {' '}
            {/* 썸네일 이미지 */}
            <div className="relative w-full h-[244px] rounded-[20px] overflow-hidden">
              {profileThum ? (
                <img src={item.imageUrl} alt={item.title} className="w-full h-full object-cover" />
              ) : (
                <img src={item.imageUrl} alt={item.title} className="w-full h-full object-cover" />
              )}
              {/* 조회수, 댓글수, 좋아요수 뱃지 */}
              <div
                className="max-w-[200px] h-[34px] absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-lg font-semibold flex justify-center items-center gap-3"
                style={{
                  boxShadow: '0 15px 25px rgba(0,0,0,0.12)',
                }}
              >
                <span className="flex items-center gap-1">
                  <ChatBubbleOvalLeftEllipsisIcon className="w-[22px] text-primary300" />
                  {item.commentCount}
                </span>
                <span className="flex items-center gap-1">
                  <HeartIcon className="w-[22px] text-red-500" />
                  {item.likeCount}
                </span>
                <span className="flex items-center gap-1">
                  <EyeIcon className="w-[22px] text-grey700" />
                  {item.viewCount}
                </span>
              </div>
            </div>
            {/* 작성자 & 제목 */}
            <div className="flex items-center mt-3 gap-2">
              <img
                src={item.authorProfile}
                alt={item.author}
                className="w-[30px] h-[30px] rounded-full object-cover"
              />
              <span className="text-base font-semibold">{item.author}</span>
            </div>
            <div className="mt-2 text-xl font-semibold line-clamp-1">{item.title}</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CommunityBestSection;
