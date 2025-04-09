import Badge from '@/common/Badge';
import { Link } from 'react-router-dom';
const ProfileCard = ({ data }) => {
  return (
    <>
      <Link to={`/careerDetail/${data.resumdId}`}>
        <div className="w-[300px] h-[440px] border rounded-t-[15px] rounded-[8px] mb-[15px]">
          {/* 이미지 */}
          <div className="w-[300px] h-[278px] rounded-t-[8px] bg-slate-600 overflow-hidden relative">
            <img src={data.profileImage} alt="" className="h-[278px] object-cover" />
            <Badge
              text={`${data.year}년차`}
              className="w-[72px] h-[33px] bg-[#3FC22E] text-white text-sm absolute bottom-[12px] right-[21px] "
            />
          </div>
          {/* 설명 */}
          <div className="w-full h-[162px]">
            <div className="w-full h-full p-[15px] mx-auto flex flex-col justify-center gap-2 ">
              {/* 직업 */}
              <div className="line-clamp-1 text-[22px] font-semibold">{data.positions}</div>
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
