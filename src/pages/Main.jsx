import Layout from '../common/Layout/Layout';
import { Button } from '@/components/ui/button';

const Main = () => {
  return (
    <Layout>
      <div className="bg-sec text-center w-full h-60 bg-gray-700">메인 페이지 입니다</div>
      <div className="text-center w-full h-60 bg-gray-700">메인 페이지 입니다2</div>
      <Button className="w-96 ">성공!</Button>
    </Layout>
  );
};

export default Main;
