import { Popover, PopoverTrigger, PopoverContent, PopoverClose } from '@/components/ui/popover';
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';
import { ChevronDownIcon } from '@heroicons/react/24/solid';
import PrimaryButton from './PrimaryButton';
import { XMarkIcon } from '@heroicons/react/24/solid';
const PositionModal = ({ position }) => {
  return (
    <Popover>
      <PopoverTrigger>
        <div className="flex flex-row items-center gap-4 ">
          <span className="font-bold text-[24px]">직무 선택</span>
          <div className="w-[30px] h-[30px] flex flex-row items-center justify-center  border border-solid rounded-[10px]">
            <ChevronDownIcon className="w-[20px]" />
          </div>
        </div>
      </PopoverTrigger>
      <PopoverContent className="w-[300px] p-0 ">
        <div className=" w-[90%] h-[65px] mx-auto text-[20px] font-[600] flex flex-row justify-between items-center">
          <div className="text-[20px]">직군 직무</div>
          <PopoverClose>
            <XMarkIcon className="w-[25px]" />
          </PopoverClose>
        </div>
        {/* 직군 셀렉트 */}
        <div className="w-full flex flex-col border-b">
          {position.map((item, index) => {
            return (
              <div
                key={index}
                className="w-[86%] h-[48px] mx-auto flex flex-row justify-between items-center"
              >
                <div className="text-[16px] font-[500]">{item}</div>
                <Checkbox className="data-[state=checked]:bg-primary300 border-grey200" />
              </div>
            );
          })}
        </div>
        <div className="w-[95%] mx-auto h-[80px] flex flex-row gap-4 justify-end items-center">
          <Button
            className="w-[90px] h-[40px] text-[16px] hover:bg-white hover:text-black "
            variant="outline"
          >
            초기화
          </Button>
          <PrimaryButton text="적용" width="90px" height="40px" />
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default PositionModal;
