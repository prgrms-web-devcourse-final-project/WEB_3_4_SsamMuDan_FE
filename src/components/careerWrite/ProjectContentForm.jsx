import { Input } from '@/components/ui/input';
import IntroduceInput from '../common/IntroduceInput';
import StackBadge from '@/common/StackBadge';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import { TrashIcon } from '@heroicons/react/24/outline';
import IntroduceTextArea from '../common/IntroduceTextArea';
import { Button } from '@/components/ui/button';

const ProjectContentForm = () => {
  return (
    <>
      <div className="w-[800px] flex flex-col gap-[50px]">
        {/* 회사이름 */}
        <div className="relative w-[800px] pt-[4px] h-[45px] border-b  ">
          <Input
            type="text"
            placeholder="회사이름을 입력해주세요"
            className="focus-visible:ring-0 text-grey400 px-0 py-0 border-none shadow-none placeholder:text-grey400 placeholder:text-[20px]"
          />

          <Button variant="outline " className="absolute top-0 right-0 bg-primary300">
            <TrashIcon className="w-[25px] text-white" />
          </Button>
        </div>
        {/* 자기소개 */}
        <div>
          <div className="text-[22px] font-medium mb-2">자기소개</div>
          <IntroduceTextArea width="800px" height="170px" />
        </div>

        {/* 기술스택 */}
        <div className="flex flex-col gap-6">
          <div className="font-medium text-[20px] ">기술스택</div>
          <div className="flex flex-wrap items-center gap-6">
            {Array(4)
              .fill(null)
              .map((_, index) => (
                <StackBadge key={index} text="TypeScript" showCloseIcon={true} />
              ))}
          </div>
          <div className="relative ">
            <Input
              className="px-14 w-[] h-[60px] bg-grey100 relative placeholder:text-grey400 placeholder:text-[20px] focus-visible:ring-0"
              placeholder="보유한 기술 스택을 입력해 주세요"
            />
            <MagnifyingGlassIcon className="absolute top-[20px] left-[20px] w-[20px] " />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectContentForm;
