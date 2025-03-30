import { EyeIcon, HeartIcon, ChatBubbleOvalLeftEllipsisIcon } from '@heroicons/react/24/outline';

const CommunityCard = () => {
  return (
    <>
      <div className="w-[49.5%] h-[254px] border rounded-[20px]">
        <div className="w-[95%] h-full mx-auto  flex flex-col justify-center gap-4">
          <div className="text-[21px] font-bold">인턴으로 가기 VS 그냥 백수하기</div>
          <div className="w-[471px] line-clamp-4 text-[18px]">
            {/* 줄바꿈 적용을 위한 ``(벡틱) 사용 */}
            {`  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias praesentium adipisci
          omnis doloribus, amet similique obcaecati et voluptates tempora cupiditate veniam, placeat
          suscipit eum ullam! Ab laudantium velit provident iure? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias praesentium adipisci
          omnis doloribus, amet similique obcaecati et voluptates tempora cupiditate veniam, placeat
          suscipit eum ullam! Ab laudantium velit provident iure?`}
          </div>
          <div className="flex flex-row items-center gap-4 mt-2">
            <div className="flex flex-row items-center gap-2 ">
              <ChatBubbleOvalLeftEllipsisIcon className="w-[20px] text-primary300  " />
              <div className="text-[15px]">12</div>
            </div>
            <div className="flex flex-row items-center gap-2 ">
              <HeartIcon className="w-[20px] text-secondary200 " />
              <div className="text-[15px]">12</div>
            </div>
            <div className="flex flex-row items-center gap-2 ">
              <EyeIcon className="w-[20px] text-black " />
              <div className="text-[15px]">12</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CommunityCard;
