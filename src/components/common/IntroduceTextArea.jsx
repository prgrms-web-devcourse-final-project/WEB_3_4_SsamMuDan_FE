import { useRef, useEffect } from 'react';
import { Textarea } from '@/components/ui/textarea';

const IntroduceTextArea = ({ width, height }) => {
  const textareaRef = useRef(null);

  const handleInput = () => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = '170px'; // 초기화
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
      className="bg-grey100 resize-none overflow-hidden focus-visible:ring-0 border-none focus:outline-none placeholder:text-grey400 placeholder:text-[16px] px-7 py-5"
      style={{ width: width, height: height || '170px' }}
    />
  );
};

export default IntroduceTextArea;
