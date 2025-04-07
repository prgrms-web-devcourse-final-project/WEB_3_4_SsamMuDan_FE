import { Input } from '@/components/ui/input';

const IntroduceInput = ({ width, height, onChange, value }) => {
  return (
    <>
      <Input
        value={value}
        className="bg-grey100 focus-visible:ring-0 placeholder:text-grey400 placeholder:text-[16px] "
        placeholder="내용을 입력해주세요"
        style={{ width: width, height: height }}
        onChange={onChange}
      />
    </>
  );
};

export default IntroduceInput;
