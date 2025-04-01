import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { PlusIcon, MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import IntroduceInput from '../common/IntroduceInput';
import IntroduceTextArea from '../common/IntroduceTextArea';
import StackBadge from '@/common/StackBadge';

const BasicForm = () => {
  return (
    <>
      <div className="w-[1213px] mx-auto">
        {/* 제목 */}
        <div className="w-[1213px] h-[44px] mx-auto border-b">
          <div className="text-[22px] font-semibold">📌 기본정보</div>
        </div>
        <div className="w-full flex flex-col gap-[42px]">
          {/* 이미지 */}
          <div className="flex flex-col items-center justify-center mt-[80px]">
            <Label
              htmlFor="picture"
              className="w-[276px] h-[276px] flex flex-col items-center justify-center border-gray-300 rounded-lg cursor-pointer bg-grey100 hover:bg-gray-200 transition"
            >
              <PlusIcon className="text-gray-500 w-[40px] stroke-[5] " />
            </Label>
            <Input id="picture" type="file" className="hidden" />
          </div>
          {/* 이메일 */}
          <div>
            <div className="text-[22px] font-medium mb-2 ">이메일</div>
            <IntroduceInput width="1213px" height="60px" />
          </div>
          {/* 직무 */}
          <div>
            <div className="text-[22px] font-medium mb-2">개발직무</div>
            <IntroduceInput width="1213px" height="60px" />
          </div>
          {/* 연차 */}
          <div>
            <div className="text-[22px] font-medium mb-2">연차</div>
            <IntroduceInput width="1213px" height="60px" />
          </div>
          {/* 기술스택 */}
          <div className="flex flex-col gap-6">
            <div className="font-medium text-[20px] ">기술스택</div>
            <div className="w-[70%] flex flex-wrap items-center gap-6">
              {Array(6)
                .fill(null)
                .map((_, index) => (
                  <StackBadge key={index} text="TypeScript" showCloseIcon={true} />
                ))}
            </div>
            <div className="relative ">
              <Input
                className="px-14 h-[60px] bg-grey100 relative !text-[16px] placeholder:text-grey400 placeholder:text-[20px] focus-visible:ring-0"
                placeholder="보유한 기술 스택을 입력해 주세요"
              />
              <MagnifyingGlassIcon className="absolute top-[20px] left-[20px] w-[20px] " />
            </div>
          </div>
          {/* 자기소개 */}
          <div>
            <div className="text-[22px] font-medium mb-2">자기소개</div>
            <IntroduceTextArea width="1213px" height="170px" />
          </div>
        </div>
      </div>
    </>
  );
};

export default BasicForm;
