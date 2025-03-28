import { useRef, useEffect } from 'react';
import { Textarea } from '@/components/ui/textarea';

const IntroduceTextArea = ({ width = '100%' }) => {
  const textareaRef = useRef(null);

  const handleInput = () => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = 'auto'; // 초기화
      textarea.style.height = `${textarea.scrollHeight}px`; // 내용에 따라 높이 설정
    }
  };

  useEffect(() => {
    handleInput(); // 컴포넌트 mount 시 초기화
  }, []);

  return (
    <Textarea
      ref={textareaRef}
      placeholder="내용을 입력해주세요"
      onInput={handleInput}
      className="bg-grey100 resize-none overflow-hidden focus-visible:ring-0 border-none focus:outline-none"
      style={{ width }}
    />
  );
};

export default IntroduceTextArea;
