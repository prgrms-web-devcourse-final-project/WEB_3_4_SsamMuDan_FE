import Layout from '../common/Layout/Layout';
import StackModal from '@/components/common/stackModal';
import PositionModal from '@/components/common/PositionModal';
import CustomPagination from '@/components/common/CustomPagination';

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
    <Layout>
      <StackModal data={techStack} />
      <PositionModal position={position} />
      <CustomPagination />
    </Layout>
  );
};

export default Jungseok;
