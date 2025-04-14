import { Button } from '@/components/ui/button';

const FloatingButton = ({ style, scrollTop }) => {
  return (
    <Button
      className={`border-none shadow-none hover:bg-transparent h-[60px] ${style}`}
      variant="outline"
      onClick={scrollTop}
    >
      <img src="/images/FloatingButton.svg" alt="메인로고" />
    </Button>
  );
};

export default FloatingButton;
