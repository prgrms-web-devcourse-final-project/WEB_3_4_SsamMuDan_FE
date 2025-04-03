import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { useState, useEffect } from 'react';
const DateSetForm = ({ type, index, onDateChange }) => {
  // 시작 날짜
  const [startYear, setStartYear] = useState('');
  const [startMonth, setStartMonth] = useState('');
  const [startDay, setStartDay] = useState('');
  // 종료 날짜
  const [endYear, setEndYear] = useState('');
  const [endMonth, setEndMonth] = useState('');
  const [endDay, setEndDay] = useState('');
  // 재직중 또는 진행중
  const [isWorking, setIsWorking] = useState(false);

  // 날짜 형식 조립 함수
  const formatDate = (y, m, d) => {
    if (!y || !m || !d) return '';
    return `${y}-${m.padStart(2, '0')}-${d.padStart(2, '0')}`;
  };

  useEffect(() => {
    const startDate = formatDate(startYear, startMonth, startDay);
    const endDate = isWorking ? null : formatDate(endYear, endMonth, endDay);

    if (onDateChange) {
      onDateChange(index, {
        startDate,
        endDate,
        isWorking,
      });
    }
  }, [startYear, startMonth, startDay, endYear, endMonth, endDay, isWorking]);

  return (
    <>
      {/* 날짜 */}
      <div className="w-[370px] flex flex-col ">
        <div className="w-[289px] flex flex-row gap-1 items-center">
          {/* 시작 일자 */}
          <div className="flex flex-row items-center">
            {/* 연도 */}
            <Input
              maxLength={4}
              type="text"
              placeholder="YYYY"
              className="focus-visible:ring-0 w-[43px] text-grey400 border-none shadow-none px-0 "
              value={startYear}
              onChange={(e) => setStartYear(e.target.value)}
            />
            .{/* 월 */}
            <Input
              maxLength={2}
              type="text"
              placeholder="MM"
              className="focus-visible:ring-0 w-[30px] text-grey400 border-none shadow-none px-0"
              value={startMonth}
              onChange={(e) => setStartMonth(e.target.value)}
            />
            .{/* 일 */}
            <Input
              maxLength={2}
              type="text"
              placeholder="DD"
              className="focus-visible:ring-0 w-[30px] text-grey400 border-none shadow-none px-0"
              value={startDay}
              onChange={(e) => setStartDay(e.target.value)}
            />
          </div>
          <div className="text-grey400">-</div>
          {/* 종료 일자 */}
          <div className="flex flex-row items-center">
            {/* 연도 */}
            <Input
              maxLength={4}
              type="text"
              placeholder="YYYY"
              className="focus-visible:ring-0 w-[43px] text-grey400 border-none shadow-none px-0 "
              value={endYear}
              onChange={(e) => setEndYear(e.target.value)}
            />
            .{/* 월 */}
            <Input
              maxLength={2}
              type="text"
              placeholder="MM"
              className="focus-visible:ring-0 w-[30px] text-grey400 border-none shadow-none px-0"
              value={endMonth}
              onChange={(e) => setEndMonth(e.target.value)}
            />
            .{/* 일 */}
            <Input
              maxLength={2}
              type="text"
              placeholder="DD"
              className="focus-visible:ring-0 w-[30px] text-grey400 border-none shadow-none px-0"
              value={endDay}
              onChange={(e) => setEndDay(e.target.value)}
            />
            <span className="text-[#FF063C]">*</span>
          </div>
        </div>
        {/* checkBox */}
        <div className="flex items-center space-x-2">
          <Checkbox
            id="terms"
            className="w-[16px] h-[16px] shadow-none rounded-none border-grey300 data-[state=checked]:bg-primary300 "
            checked={isWorking}
            onCheckedChange={(checked) => setIsWorking(!!checked)}
          />
          <label
            htmlFor="terms"
            className="text-[16px] font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-grey400"
          >
            {type === '경력' ? '재직중' : '진행중'}
          </label>
        </div>
        <div></div>
      </div>
    </>
  );
};

export default DateSetForm;
