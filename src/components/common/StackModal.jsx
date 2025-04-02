import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { ChevronDownIcon, MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import { Input } from '@/components/ui/input';
import PrimaryButton from './PrimaryButton';
import { Button } from '@/components/ui/button';
import StackBadge from '@/common/StackBadge';

const StackModal = ({ data }) => {
  const techStack = data;
  return (
    <Dialog>
      <DialogTrigger className="flex flex-row items-center font-bold text-[24px] gap-4 ">
        <div className="flex flex-row items-center gap-4 ">
          <span className="font-bold text-[24px]">기술 스택</span>
          <div className="w-[30px] h-[30px] flex flex-row items-center justify-center  border border-solid rounded-[10px]">
            <ChevronDownIcon className="w-[25px]" />
          </div>
        </div>
      </DialogTrigger>

      <DialogContent className="w-[600px] h-[650px] max-w-none flex flex-col border border-gray-300 rounded-lg">
        <span className="font-bold text-[20px]">기술스택</span>
        <Input
          className="px-14 h-[45px] bg-grey100 relative !text-[16px] placeholder:text-[16px] focus-visible:ring-0"
          placeholder="보유한 기술 스택을 입력해 주세요"
        />
        <MagnifyingGlassIcon className="w-[20px] absolute top-[79px] left-[40px]" />
        <div className="w-full h-[500px] overflow-y-auto">
          <div className=" w-full flex flex-wrap gap-3 mt-4 items-start justify-start  ">
            {techStack.map((item, index) => {
              return (
                <span
                  key={index}
                  className=" hover:cursor-pointer h-[50px] text-[16px] px-3 flex items-center justify-center rounded-[10px] border border-grey200  font-[500] "
                >
                  {item}
                </span>
              );
            })}
          </div>
        </div>
        <div className="w-full border"></div>
        <div className=" w-full h-[70px] flex flex-row justify-start items-center gap-5">
          {' '}
          <StackBadge text="Python" />
          <StackBadge text="Python" />
          <StackBadge text="Python" />
          <StackBadge text="Python" />
          <StackBadge text="Python" />
        </div>
        <div className="flex flex-row justify-between items-center gap-3">
          <Button
            className="w-[140px] h-[48px] text-[16px] hover:bg-white hover:text-black "
            variant="outline"
          >
            초기화
          </Button>
          <PrimaryButton text="적용" width="400px" height="48px" />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default StackModal;
