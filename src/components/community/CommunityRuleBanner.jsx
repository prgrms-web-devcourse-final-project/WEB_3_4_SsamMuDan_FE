const CommunityRuleBanner = () => {
  return (
    <div className="mt-10 mb-20">
      <div className="font-esamanru text-2xl mb-4">💡 커뮤니티 Rule</div>
      <div className="flex gap-4 flex-nowrap">
        {/* 왼쪽 카드 */}
        <div className="relative w-[652px] h-[338px] bg-[#EE8B45] rounded-[30px] px-10 py-12 text-white">
          <div className="font-esamanru text-[32px] font-bold mt-4 mb-5 leading-snug">
            <div>서로의 의견을</div>
            <div>사랑해 주세요!</div>
          </div>{' '}
          <p className="text-base leading-relaxed font-light">
            서로를 존중하는 마음으로 재미있게 즐긴다면
            <br />
            더욱더 재미있게 CoTree를 즐길 수 있습니다.
          </p>
          <img
            src="/images/community-heart.svg"
            alt="하트 이미지"
            className="absolute -right-2 bottom-10 w-[311px] h-[327px]"
          />
        </div>

        {/* 오른쪽 카드 */}
        <div className="relative w-[652px] h-[338px] bg-[#5D59E4] rounded-[30px] px-10 py-12 text-white">
          <div className="font-esamanru text-[32px] font-bold mt-4 mb-5 leading-snug">
            <div>다양한 의견을</div>
            <div>편히 남겨주세요!</div>
          </div>
          <p className="text-base leading-relaxed font-light">
            사소한 것까지 서로 얘기하다보면
            <br />
            재미까지 찾을 수 있을 거예요.
          </p>
          <img
            src="/images/community-phone.svg"
            alt="휴대폰 이미지"
            className="absolute -right-2 bottom-10 w-[311px] h-[327px]"
          />
        </div>
      </div>
    </div>
  );
};

export default CommunityRuleBanner;
