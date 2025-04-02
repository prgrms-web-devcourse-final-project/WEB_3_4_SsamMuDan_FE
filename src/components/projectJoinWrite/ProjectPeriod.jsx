import { Input } from '@/components/ui/input';

const ProjectPeriod = () => {
  return (
    <>
      <div className="w-[289px] ml-4 flex flex-row gap-1 items-center">
        {/* 시작 일자 */}
        <div className="flex flex-row items-center">
          {/* 연도 */}
          <Input
            maxLength={4}
            type="text"
            placeholder="YYYY"
            className="focus-visible:ring-0 w-[45px] h-[60px] ml-2 placeholder:text-[16px] text-[16px] text-grey400 border-none shadow-none px-0 "
          />
          <span className="text-[20px] mr-2">.</span>
          {/* 월 */}
          <Input
            maxLength={2}
            type="text"
            placeholder="MM"
            className="focus-visible:ring-0 w-[32px] h-[60px] placeholder:text-[16px] text-[16px] text-grey400 border-none shadow-none px-0 "
            s
          />
          <span className="text-[20px] mr-2">.</span>
          {/* 일 */}
          <Input
            maxLength={2}
            type="text"
            placeholder="DD"
            className="focus-visible:ring-0 w-[32px] h-[60px] placeholder:text-[16px] text-[16px] text-grey400 border-none shadow-none px-0 "
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
            className="focus-visible:ring-0 w-[45px] h-[60px] ml-2 placeholder:text-[16px] text-[16px] text-grey400 border-none shadow-none px-0 "
          />
          <span className="text-[20px] mr-2">.</span>
          {/* 월 */}
          <Input
            maxLength={2}
            type="text"
            placeholder="MM"
            className="focus-visible:ring-0 w-[32px] h-[60px] placeholder:text-[16px] text-[16px] text-grey400 border-none shadow-none px-0 "
            s
          />
          <span className="text-[20px] mr-2">.</span>
          {/* 일 */}
          <Input
            maxLength={2}
            type="text"
            placeholder="DD"
            className="focus-visible:ring-0 w-[32px] h-[60px] placeholder:text-[16px] text-[16px] text-grey400 border-none shadow-none px-0 "
          />
        </div>
      </div>
    </>
  );
};

export default ProjectPeriod;
