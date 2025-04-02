import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
const DateSetForm = ({ type }) => {
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
            />
            .{/* 월 */}
            <Input
              maxLength={2}
              type="text"
              placeholder="MM"
              className="focus-visible:ring-0 w-[30px] text-grey400 border-none shadow-none px-0"
            />
            .{/* 일 */}
            <Input
              maxLength={2}
              type="text"
              placeholder="DD"
              className="focus-visible:ring-0 w-[30px] text-grey400 border-none shadow-none px-0"
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
            />
            .{/* 월 */}
            <Input
              maxLength={2}
              type="text"
              placeholder="MM"
              className="focus-visible:ring-0 w-[30px] text-grey400 border-none shadow-none px-0"
            />
            .{/* 일 */}
            <Input
              maxLength={2}
              type="text"
              placeholder="DD"
              className="focus-visible:ring-0 w-[30px] text-grey400 border-none shadow-none px-0"
            />
            <span className="text-[#FF063C]">*</span>
          </div>
        </div>
        {/* checkBox */}
        <div className="flex items-center space-x-2">
          <Checkbox
            id="terms"
            className="w-[16px] h-[16px] shadow-none rounded-none border-grey300 data-[state=checked]:bg-primary300 "
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
