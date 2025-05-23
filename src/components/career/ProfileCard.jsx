import Badge from '@/common/Badge';
import { Link } from 'react-router-dom';
const ProfileCard = ({ data }) => {
  console.log(data);
  return (
    <>
      <Link to={`/careerDetail/${data.resumeId}`}>
        <div className="w-[300px] h-[440px] border rounded-t-[15px] rounded-[8px] mb-[15px] overflow-hidden">
          {/* 이미지 */}
          <div className="w-[300px] h-[278px] rounded-t-[8px] bg-slate-600 overflow-hidden relative">
            <img
              src={data.profileImage ? data.profileImage : '/images/career/profileDefault.png'}
              alt=""
              className="w-full h-full object-cover"
            />
            <Badge
              text={`${data.year}년차`}
              className="w-[72px] h-[33px] bg-[#3FC22E] text-white text-sm absolute bottom-[12px] right-[21px] "
            />
          </div>
          {/* 설명 */}
          <div className="w-full h-[162px]">
            <div className="w-full h-full p-[15px] mx-auto flex flex-col justify-center gap-2 ">
              {/* 직업 */}
              <div className="line-clamp-1 text-[22px] font-semibold">
                {Array.isArray(data.positions) ? data.positions.join(' / ') : data.positions}
              </div>
              {/* 내용 */}
              <div className="line-clamp-4">{data.introduction}</div>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default ProfileCard;
