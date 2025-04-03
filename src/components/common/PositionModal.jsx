import { Popover, PopoverTrigger, PopoverContent, PopoverClose } from '@/components/ui/popover';
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';
import { ChevronDownIcon } from '@heroicons/react/24/solid';
import PrimaryButton from './PrimaryButton';
import { XMarkIcon } from '@heroicons/react/24/solid';
import { useState, useEffect } from 'react';

const PositionModal = () => {
  const [positions, setPositions] = useState([
    { position: '전체', selected: true },
    { position: '프론트엔드', selected: false },
    { position: '벡엔드', selected: false },
    { position: '풀스택', selected: false },
    { position: 'iOS', selected: false },
  ]);

  const [positionList, setPositionList] = useState([]);

  // positions가 변경될 때마다 selected가 true인 항목만 positionList에 저장
  useEffect(() => {
    setPositionList(positions.filter((item) => item.selected));
  }, [positions]);

  const handleClick = (clickedItem) => {
    if (clickedItem.position === '전체') {
      // '전체'를 클릭하면, '전체'만 true, 나머지는 false로 설정
      setPositions((prevPositions) =>
        prevPositions.map((item) =>
          item.position === '전체' ? { ...item, selected: true } : { ...item, selected: false },
        ),
      );
    } else {
      // 다른 항목을 클릭하면 해당 항목은 토글하고 '전체'는 반드시 false로 설정
      setPositions((prevPositions) =>
        prevPositions.map((item) => {
          if (item.position === clickedItem.position) {
            return { ...item, selected: !item.selected };
          } else if (item.position === '전체') {
            return { ...item, selected: false };
          } else {
            return item;
          }
        }),
      );
    }
    console.log(positionList);
  };

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
          {positions.map((item, index) => {
            return (
              <div
                key={index}
                className="w-[86%] h-[48px] mx-auto flex flex-row justify-between items-center"
              >
                <div className="text-[16px] font-[500]">{item.position}</div>
                <Checkbox
                  onClick={() => handleClick(item)}
                  checked={item.selected}
                  className="data-[state=checked]:bg-primary300 border-grey200"
                />
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
