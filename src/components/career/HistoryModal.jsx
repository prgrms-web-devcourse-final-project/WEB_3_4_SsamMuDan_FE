import { Popover, PopoverTrigger, PopoverContent, PopoverClose } from '@/components/ui/popover';
import { Slider } from '@/components/ui/slider';
import { Button } from '@/components/ui/button';
import { ChevronDownIcon } from '@heroicons/react/24/solid';
import PrimaryButton from '../common/PrimaryButton';
import { XMarkIcon } from '@heroicons/react/24/solid';
import { useState, useRef } from 'react';

const HistoryModal = ({ onApply }) => {
  const [tempRange, setTempRange] = useState([0, 0]);
  const [appliedRange, setAppliedRange] = useState([0, 0]);
  const popoverCloseRef = useRef(null);

  const handleRange = (val) => {
    setTempRange(val);
  };

  const handleApply = () => {
    setAppliedRange(tempRange);
    const dividedRange = tempRange.map((value) => value / 10);
    onApply(dividedRange);
    popoverCloseRef.current?.click();
  };

  return (
    <Popover>
      <PopoverTrigger>
        <div className="flex flex-row items-center gap-4 ">
          <div className="font-bold text-[24px]">
            {appliedRange[0] === appliedRange[1]
              ? appliedRange[0] === 0
                ? '신입'
                : appliedRange[0] >= 100
                  ? '10년 이상'
                  : `${appliedRange[0] / 10}년차`
              : `${appliedRange[0] === 0 ? '신입' : appliedRange[0] >= 100 ? '10년 이상' : `${appliedRange[0] / 10}년차`} ~ ${appliedRange[1] >= 100 ? '10년 이상' : `${appliedRange[1] / 10}년차`}`}
          </div>
          <div className="w-[30px] h-[30px] flex flex-row items-center justify-center  border border-solid rounded-[10px]">
            <ChevronDownIcon className="w-[20px]" />
          </div>
        </div>
      </PopoverTrigger>
      <PopoverContent className="w-[468px] h-[380px] ">
        <div className=" w-[90%] h-[70px] mx-auto text-[20px] font-[600] flex flex-row  justify-between items-center">
          <div className="text-[20px]">경력</div>
          <PopoverClose ref={popoverCloseRef}>
            <XMarkIcon className="w-[30px]" />
          </PopoverClose>
        </div>
        {/* 직군 셀렉트 */}
        <div className=" w-[90%] h-[200px] mx-auto flex flex-col gap-9 justify-center items-center">
          <div className="text-[20px] font-semibold">
            {tempRange[0] === tempRange[1]
              ? tempRange[0] === 0
                ? '신입'
                : tempRange[0] >= 100
                  ? '10년 이상'
                  : `${tempRange[0] / 10}년차`
              : `${tempRange[0] === 0 ? '신입' : tempRange[0] >= 100 ? '10년 이상' : `${tempRange[0] / 10}년차`} ~ ${tempRange[1] >= 100 ? '10년 이상' : `${tempRange[1] / 10}년차`}`}
          </div>
          <div className="w-[90%] flex flex-col gap-4">
            {/* 슬라이더 */}
            <div className="">
              <Slider
                value={tempRange}
                onValueChange={(val) => handleRange(val)}
                max={100}
                step={10}
              />
            </div>
            {/*  */}
            <div className="flex flex-row justify-between items-center text-[14px] font-semibold">
              <div>신입</div>
              <div>10년 이상</div>
            </div>
          </div>
        </div>

        <div className="w-[90%] mx-auto h-[80px] flex flex-row justify-between items-center">
          <Button
            className="w-[90px] h-[40px] text-[16px] hover:bg-white hover:text-black "
            variant="outline"
            onClick={() => {
              setTempRange([0, 0]);
            }}
          >
            초기화
          </Button>
          <PrimaryButton text="적용" width="90px" height="40px" onClick={handleApply} />
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default HistoryModal;
