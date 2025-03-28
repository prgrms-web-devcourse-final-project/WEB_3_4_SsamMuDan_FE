import { Popover, PopoverTrigger, PopoverContent } from '@/components/ui/popover';
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';
import { ChevronDownIcon } from '@heroicons/react/24/solid';
import PrimaryButton from './PrimaryButton';
const PositionModal = ({ position }) => {
  return (
    <Popover>
      <PopoverTrigger>
        <div className="flex flex-row gap-4">
          <span className="font-bold text-[24px]">직무 선택</span>
          <ChevronDownIcon className="w-[30px] border border-solid rounded-[10px]" />
        </div>
      </PopoverTrigger>
      <PopoverContent className="w-[300px] p-0 ">
        <div className=" w-[90%] h-[72px] mx-auto text-[20px] font-[600] flex flex-row items-center">
          직군 직무
        </div>
        {/* 직군 셀렉트 */}
        <div className="w-full flex flex-col border-b">
          {position.map((item, index) => {
            return (
              <div
                key={index}
                className="w-[90%] h-[48px] mx-auto flex flex-row justify-between items-center"
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
