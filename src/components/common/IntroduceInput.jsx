import { Input } from '@/components/ui/input';

const IntroduceInput = ({ width, height }) => {
  return (
    <>
      <Input
        className="bg-grey100 focus-visible:ring-0 "
        placeholder="내용을 입력해주세요"
        style={{ width: width, height: height }}
      />
    </>
  );
};

export default IntroduceInput;
