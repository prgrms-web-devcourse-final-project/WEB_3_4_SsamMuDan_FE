import { ChatBubbleOvalLeftEllipsisIcon, EyeIcon, HeartIcon } from '@heroicons/react/24/outline';
import CustomPagination from '../common/CustomPagination';
import { useNavigate } from 'react-router-dom';

const CommunityList = ({ communityinfo }) => {
  const navigate = useNavigate();

  // new 뱃지
  const isNew = (createdAt) => {
    console.log('와우', createdAt);
    const now = new Date();
    const created = new Date(createdAt);
    const diffInHours = (now - created) / (1000 * 60 * 60); // ms → hour

    return diffInHours < 24;
  };

  // 날짜 형식 변하기
  const formatDate = (isoString) => {
    const date = new Date(isoString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // 0부터 시작하므로 +1
    const day = String(date.getDate()).padStart(2, '0');

    return `${year}.${month}.${day}`;
  };

  return (
    <div>
      {communityinfo.map((item, index) => (
        <div
          key={item.id}
          onClick={() => navigate(`/communityDetail/${item.id}`)}
          className={`w-[1251px] h-[220px] flex items-center border-gray-200 transition-colors duration-200 
                      ${index === 0 ? 'border-t border-b' : 'border-b'} 
                      cursor-pointer hover:bg-gray-50`}
        >
          <div className="w-[872px] h-[146px] ml-2">
            {/* 프로필사진 */}
            <div className="flex">
              <div className="w-[55px] h-[55px]  rounded-full mb-1 overflow-hidden mr-4">
                {item?.profileImage ? (
                  <img
                    src={item.profileImage}
                    alt={item.author}
                    className="w-[55px] h-[55px] rounded-full object-cover "
                  />
                ) : (
                  <img
                    src="/images/dummy-user-avatar.svg"
                    alt={item?.id}
                    className="w-[55px] h-[55px] rounded-full object-cover "
                  />
                )}
              </div>
              {/* <img
                src={item.profileImage}
                alt={item.author}
                className="w-[55px] h-[55px] rounded-full object-cover mr-3"
              /> */}
              <div>
                {/* 작성자 & 작성일 */}
                <div className="flex items-center gap-4 text-base text-gray-400 mb-1">
                  <span className="">{item.author}</span>
                  <span>{formatDate(item.createdAt)}</span>
                  {isNew(item.createdAt) && (
                    <span className="text-xs bg-[#FFDBDB] text-primary400 px-2 py-1 rounded-[5px]">
                      NEW
                    </span>
                  )}
                </div>
                {/* 제목 */}
                <div className="text-xl font-bold text-black mb-2 line-clamp-1">{item.title}</div>
              </div>
            </div>
            {/* 내용 */}
            <div className="text-lg text-gray-700 mb-1  mt-2 truncate overflow-hidden whitespace-nowrap line-clamp-2">
              {item.content}
            </div>
            {/* 댓글수, 좋아요수, 조회수 */}
            <div className="flex items-center gap-5 text-gray-600 mt-5">
              <span className="flex items-center gap-1">
                <ChatBubbleOvalLeftEllipsisIcon className="w-5 h-5 text-primary300" />
                {item.commentCount}
              </span>
              <span className="flex items-center gap-1">
                <HeartIcon className="w-5 h-5 text-red-500" />
                {item.likeCount}
              </span>
              <span className="flex items-center gap-1">
                <EyeIcon className="w-5 h-5 text-grey700" />
                {item.viewCount}
              </span>
            </div>
          </div>

          {/* 썸네일 이미지 */}
          <div className="w-[300px] h-[180px] rounded-[15px] overflow-hidden ml-9">
            <img
              src={item.imageUrl || '/images/default-image.svg'}
              alt="썸네일"
              className={`w-full h-full object-fill ${
                !item.imageUrl ? 'border border-gray-300 rounded-[15px]' : ''
              }`}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default CommunityList;
