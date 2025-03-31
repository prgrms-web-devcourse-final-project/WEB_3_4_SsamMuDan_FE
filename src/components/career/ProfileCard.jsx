import Badge from '@/common/Badge';

const ProfileCard = () => {
  return (
    <>
      <div className="w-[300px] h-[440px] border rounded-t-[15px] rounded-[8px] mb-[15px]">
        {/* 이미지 */}
        <div className="w-[300px] h-[278px] rounded-t-[8px] bg-slate-600 overflow-hidden relative">
          <img src="/public/images/dummy-lecture.png  " alt="" className="h-[278px] object-cover" />
          <Badge
            text="4년차"
            className="w-[72px] h-[33px] bg-[#3FC22E] text-white text-sm absolute bottom-[12px] right-[21px] "
          />
        </div>
        {/* 설명 */}
        <div className="w-full h-[162px]">
          <div className="w-[95%] h-full mx-auto flex flex-col justify-center gap-2 ">
            {/* 직업 */}
            <div className="line-clamp-1 text-[22px] font-semibold">
              프론트엔드 개발자/ 벡엔드 개발자 프론트엔드 개발자/ 벡엔드 개발자
            </div>
            {/* 내용 */}
            <div className="line-clamp-4">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas ipsa accusantium non.
              Veritatis libero quisquam neque natus, officia maiores enim impedit eaque ipsam nihil
              harum, nobis totam corporis magnam quibusdam?
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileCard;
