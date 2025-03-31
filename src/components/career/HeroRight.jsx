import { Button } from '../ui/button';
import { CheckIcon } from '@heroicons/react/24/solid';

const HeroRight = () => {
  return (
    <div className="w-[784px] h-[333px] bg-white rounded-[10px] relative ">
      {/* 왼쪽 */}
      <div className="w-[396px] h-[241px] flex flex-col justify-between absolute top-[43px] left-[50px] ">
        <Button className="w-[124px] h-[34px] bg-[#FFE3DD] text-primary400 hover:bg-[#FFE3DD]">
          이력서 등록
        </Button>
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
