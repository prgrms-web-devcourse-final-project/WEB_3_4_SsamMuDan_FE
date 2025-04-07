import { Button } from '@/components/ui/button';

const AddButton = ({ text, onClick }) => {
  return (
    <Button className="border-none shadow-none h-[50px] p-8" variant="outline" onClick={onClick}>
      <img src="/images/AddButton.svg" alt="메인로고" />
      <span className="text-[22px] font-[500]"> {text} </span>
    </Button>
  );
};

export default AddButton;
