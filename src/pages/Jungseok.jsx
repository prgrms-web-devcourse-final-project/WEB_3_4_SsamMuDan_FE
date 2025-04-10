import Layout from '../common/Layout/Layout';
import StackModal from '@/components/common/StackModal';
import PositionModal from '@/components/common/PositionModal';
// import CustomPagination from '@/components/common/CustomPagination';
import IntroduceInput from '@/components/common/IntroduceInput';
import IntroduceTextArea from '@/components/common/IntroduceTextArea';
import AddButton from '@/components/common/AddButton';
import IntroduceBar from '@/components/common/IntroduceBar';
import FloatingButton from '@/components/common/FloatingButton';
import CategoryTab from '@/components/common/CategoryTab';
import MyProjectCard from '@/components/mypage/MyProjectCard';

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
      <div className="m-[10px]">
        <MyProjectCard />
      </div>
    </>
  );
};

export default Jungseok;
