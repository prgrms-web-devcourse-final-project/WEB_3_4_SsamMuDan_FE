import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { useState, useEffect } from 'react';

const ProjectPeriod = ({ onDateChange }) => {
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
    <>
      <div className="w-[1213px] h-[60px] bg-grey100 rounded-md">
        <div className="w-[289px] ml-4 flex flex-row gap-1 items-center">
          {/* 시작 일자 */}
          <div className="flex flex-row items-center">
            {/* 연도 */}
            <Input
              maxLength={4}
              type="text"
              placeholder="YYYY"
              className="focus-visible:ring-0 w-[45px] h-[60px] ml-2 placeholder:text-[16px] text-[16px] text-grey400 border-none shadow-none px-0"
              value={startYear}
              onChange={(e) => setStartYear(e.target.value)}
            />
            <span className="text-[20px] mr-2">.</span>
            {/* 월 */}
            <Input
              maxLength={2}
              type="text"
              placeholder="MM"
              className="focus-visible:ring-0 w-[32px] h-[60px] placeholder:text-[16px] text-[16px] text-grey400 border-none shadow-none px-0"
              value={startMonth}
              onChange={(e) => setStartMonth(e.target.value)}
            />
            <span className="text-[20px] mr-2">.</span>
            {/* 일 */}
            <Input
              maxLength={2}
              type="text"
              placeholder="DD"
              className="focus-visible:ring-0 w-[32px] h-[60px] placeholder:text-[16px] text-[16px] text-grey400 border-none shadow-none px-0"
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
              className="focus-visible:ring-0 w-[45px] h-[60px] ml-2 placeholder:text-[16px] text-[16px] text-grey400 border-none shadow-none px-0"
              value={endYear}
              onChange={(e) => setEndYear(e.target.value)}
              disabled={isWorking}
            />
            <span className="text-[20px] mr-2">.</span>
            {/* 월 */}
            <Input
              maxLength={2}
              type="text"
              placeholder="MM"
              className="focus-visible:ring-0 w-[32px] h-[60px] placeholder:text-[16px] text-[16px] text-grey400 border-none shadow-none px-0"
              value={endMonth}
              onChange={(e) => setEndMonth(e.target.value)}
              disabled={isWorking}
            />
            <span className="text-[20px] mr-2">.</span>
            {/* 일 */}
            <Input
              maxLength={2}
              type="text"
              placeholder="DD"
              className="focus-visible:ring-0 w-[32px] h-[60px] placeholder:text-[16px] text-[16px] text-grey400 border-none shadow-none px-0"
              value={endDay}
              onChange={(e) => setEndDay(e.target.value)}
              disabled={isWorking}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectPeriod;
