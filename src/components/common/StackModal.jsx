import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { ChevronDownIcon, MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import { Input } from '@/components/ui/input';
import CommonButton from './CommonButton';
import { Button } from '@/components/ui/button';

const StackModal = () => {
  const techStack = [
    'Python',
    'SpringFramework',
    'AWS',
    'Git',
    'iOS',
    'HTML',
    'JavaScript',
    'MySQL',
    'SQL',
  ];

  return (
    <Dialog>
      <DialogTrigger className="flex flex-row items-center font-bold text-[24px] gap-4 ">
        <span>기술 스택</span>
        <ChevronDownIcon className="w-[30px]  border border-solid rounded-[10px]" />
      </DialogTrigger>

      <DialogContent className="w-[600px] h-[650px] max-w-none flex flex-col border border-gray-300 rounded-lg">
        <span className="font-bold text-[20px]">기술스택</span>
        <Input
          className="px-14 h-[45px] bg-grey100 relative !text-[16px] placeholder:text-[16px]"
          placeholder="보유한 기술 스택을 입력해 주세요"
        />
        <MagnifyingGlassIcon className="w-[20px] absolute top-[82px] left-[40px]" />

        <div className="w-full flex flex-wrap gap-3 mt-4 items-start justify-start overflow-auto">
          {techStack.map((item) => {
            return (
              <span className=" hover:cursor-pointer h-[50px] text-[16px] px-3 flex items-center justify-center rounded-[10px] border border-grey200  font-[500] ">
                {item}
              </span>
            );
          })}
        </div>

        <div className=" w-full border-t mt-[220px]"> </div>
        <div className="flex flex-row justify-between items-center gap-3 mt-[50px]">
          <Button
            className="w-[140px] h-[48px] text-[16px] hover:bg-white hover:text-black "
            variant="outline"
          >
            초기화
          </Button>
          <CommonButton text="적용" width="400px" height="48px" />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default StackModal;
