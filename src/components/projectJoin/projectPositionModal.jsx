import { Popover, PopoverTrigger, PopoverContent, PopoverClose } from '@/components/ui/popover';
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';
import { ChevronDownIcon } from '@heroicons/react/24/solid';
import PrimaryButton from '../common/PrimaryButton';
import { XMarkIcon } from '@heroicons/react/24/solid';
import { useState, useEffect, useRef } from 'react';
import getPosition from '@/api/projectJoin/getPosition';

const ProjectPositionModal = ({ onSelect }) => {
  const popoverCloseRef = useRef(null);
  const [positions, setPositions] = useState([]);
  const [selectedPositionList, setSelectedPositionList] = useState([]);
  const [tempSelectedList, setTempSelectedList] = useState([]);

  useEffect(() => {
    const fetchPositions = async () => {
      const positions = await getPosition();
      setPositions(positions);
    };
    fetchPositions();
  }, []);

  const handleClick = (clickedItem) => {
    setTempSelectedList((prev) => {
      const isSelected = prev.some((item) => item.id === clickedItem.id);
      if (isSelected) {
        return prev.filter((item) => item.id !== clickedItem.id);
      } else {
        return [...prev, clickedItem];
      }
    });
  };

  const handleApply = () => {
    setSelectedPositionList(tempSelectedList);
    const selectedIds = tempSelectedList.map((item) => item.id);
    onSelect(selectedIds);
    popoverCloseRef.current?.click();
  };

  const handleReset = () => {
    setTempSelectedList(selectedPositionList);
  };

  const getDisplayText = () => {
    if (selectedPositionList.length === 0) {
      return '전체';
    }
    const firstPosition = selectedPositionList[0].name;
    const remainingCount = selectedPositionList.length - 1;
    return remainingCount > 0 ? `${firstPosition} 외 ${remainingCount}개` : firstPosition;
  };

  return (
    <Popover>
      <PopoverTrigger>
        <div className="flex flex-row items-center gap-4 ">
          <span className="font-bold text-[24px]">{getDisplayText()}</span>
          <div className="w-[30px] h-[30px] flex flex-row items-center justify-center  border border-solid rounded-[10px]">
            <ChevronDownIcon className="w-[20px]" />
          </div>
        </div>
      </PopoverTrigger>
      <PopoverContent className="w-[300px] p-0 ">
        <div className=" w-[90%] h-[65px] mx-auto text-[20px] font-[600] flex flex-row justify-between items-center">
          <div className="text-[20px]">직군 직무</div>
          <PopoverClose ref={popoverCloseRef}>
            <XMarkIcon className="w-[25px]" />
          </PopoverClose>
        </div>
        {/* 직군 셀렉트 */}
        <div className="w-full flex flex-col border-b">
          {positions.map((item) => {
            const isSelected = tempSelectedList.some((selected) => selected.id === item.id);
            return (
              <div
                key={item.id}
                className="w-[86%] h-[48px] mx-auto flex flex-row justify-between items-center"
              >
                <div className="text-[16px] font-[500]">{item.name}</div>
                <Checkbox
                  onClick={() => handleClick(item)}
                  checked={isSelected}
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
            onClick={handleReset}
          >
            초기화
          </Button>
          <PrimaryButton text="적용" width="90px" height="40px" onClick={handleApply} />
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default ProjectPositionModal;
