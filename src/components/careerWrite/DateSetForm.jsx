import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { useState, useEffect } from 'react';

const DateSetForm = ({ type, index, onDateChange }) => {
  const [startYear, setStartYear] = useState('');
  const [startMonth, setStartMonth] = useState('');
  const [startDay, setStartDay] = useState('');
  const [endYear, setEndYear] = useState('');
  const [endMonth, setEndMonth] = useState('');
  const [endDay, setEndDay] = useState('');
  const [isWorking, setIsWorking] = useState(false);

  const formatDate = (y, m, d) => {
    if (!y || !m || !d) return '';
    return `${y}-${m.padStart(2, '0')}-${d.padStart(2, '0')}`;
  };

  useEffect(() => {
    const startDate = formatDate(startYear, startMonth, startDay);
    const endDate = isWorking ? null : formatDate(endYear, endMonth, endDay);

    if (onDateChange) {
      onDateChange({
        startDate,
        endDate,
        isWorking,
      });
    }
  }, [startYear, startMonth, startDay, endYear, endMonth, endDay, isWorking]);

  return (
    <div className="w-[370px] flex flex-col gap-2">
      <div className="w-[289px] flex flex-row gap-1 items-center">
        {/* 시작일 */}
        <div className="flex flex-row items-center">
          <Input
            maxLength={4}
            type="text"
            placeholder="YYYY"
            className="focus-visible:ring-0 w-[43px] text-grey400 border-none shadow-none px-0"
            value={startYear}
            onChange={(e) => setStartYear(e.target.value)}
          />
          .
          <Input
            maxLength={2}
            type="text"
            placeholder="MM"
            className="focus-visible:ring-0 w-[30px] text-grey400 border-none shadow-none px-0"
            value={startMonth}
            onChange={(e) => setStartMonth(e.target.value)}
          />
          .
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

        {/* 종료일 */}
        <div className="flex flex-row items-center">
          <Input
            maxLength={4}
            type="text"
            placeholder="YYYY"
            className="focus-visible:ring-0 w-[43px] text-grey400 border-none shadow-none px-0"
            value={endYear}
            onChange={(e) => setEndYear(e.target.value)}
            disabled={isWorking}
          />
          .
          <Input
            maxLength={2}
            type="text"
            placeholder="MM"
            className="focus-visible:ring-0 w-[30px] text-grey400 border-none shadow-none px-0"
            value={endMonth}
            onChange={(e) => setEndMonth(e.target.value)}
            disabled={isWorking}
          />
          .
          <Input
            maxLength={2}
            type="text"
            placeholder="DD"
            className="focus-visible:ring-0 w-[30px] text-grey400 border-none shadow-none px-0"
            value={endDay}
            onChange={(e) => setEndDay(e.target.value)}
            disabled={isWorking}
          />
          <span className="text-[#FF063C]">*</span>
        </div>
      </div>

      {/* 재직/진행 중 체크박스 */}
      <div className="flex items-center space-x-2">
        <Checkbox
          id={`working-${index}`}
          className="w-[16px] h-[16px] shadow-none rounded-none border-grey300 data-[state=checked]:bg-primary300"
          checked={isWorking}
          onCheckedChange={(checked) => setIsWorking(!!checked)}
        />
        <label
          htmlFor={`working-${index}`}
          className="text-[16px] font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-grey400"
        >
          {type === '경력' ? '재직중' : '진행중'}
        </label>
      </div>
    </div>
  );
};

export default DateSetForm;
