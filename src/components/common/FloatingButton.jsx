import { Button } from '@/components/ui/button';

const FloatingButton = () => {
  return (
    <Button className="border-none shadow-none hover:bg-white h-[60px]" variant="outline">
      <img src="/images/FloatingButton.svg" alt="메인로고" />
    </Button>
  );
};

export default FloatingButton;
