import { Button } from '@/components/ui/button';

const AddButton = ({ text }) => {
  return (
    <Button className="border-none shadow-none h-[50px]" variant="outline">
      <img src="/images/AddButton.svg" alt="메인로고" />
      <span className="text-[22px] font-[500]"> {text} </span>
    </Button>
  );
};

export default AddButton;
