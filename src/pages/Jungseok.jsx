import Layout from '../common/Layout/Layout';
import StackModal from '@/components/common/stackModal';
import PositionModal from '@/components/common/PositionModal';
import CustomPagination from '@/components/common/CustomPagination';
import IntroduceInput from '@/components/common/IntroduceInput';
import IntroduceTextArea from '@/components/common/IntroduceTextArea';
import AddButton from '@/components/common/AddButton';
import IntroduceBar from '@/components/common/IntroduceBar';
import FloatingButton from '@/components/common/FloatingButton';

const Jungseok = () => {
  const techStack = [
    'Python',
    'SpringFramework',
    'AWS',
    'Git',
    'iOS',
    'HTML',
    'JavaScript',
    'MySQL',
    'SQL',
  ];
  const position = ['전체', '프론트엔드', '벡엔드', '풀스택', 'iOS'];

  return (
    <>
      <StackModal data={techStack} />
      <PositionModal position={position} />
      <CustomPagination />
      <div className="my-5">
        <IntroduceInput text="자기소개" width="500px" />
      </div>
      <div className="my-5">
        <IntroduceTextArea width="500px" />
      </div>
      <div>
        <AddButton text="경력 추가하기" />
      </div>
      <div className="m-10">
        <IntroduceBar />
      </div>
      <div>
        <FloatingButton />
      </div>
    </>
  );
};

export default Jungseok;
