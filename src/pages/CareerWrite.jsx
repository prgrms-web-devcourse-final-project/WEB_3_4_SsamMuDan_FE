import Layout from '@/common/Layout/Layout';
import BasicForm from '@/components/careerWrite/BasicForm';
import CareerForm from '@/components/careerWrite/CareerForm';
import AddButton from '@/components/common/AddButton';

const CareerWrite = () => {
  return (
    <>
      <Layout>
        <div className="w-[1246px] mx-auto mt-[129px]">
          {/* 이름 */}
          <div className="font-esamanru text-[24px]">
            ⭐ <span className="text-primary300">홍길동 </span>님의 정보를 알려주세요
          </div>
          {/* 기본정보 */}
          <BasicForm />

          {/* 경력 */}
          <div className="w-full mt-[160px] flex flex-col items-center ">
            <CareerForm />
            <div className="mt-[92px] ">
              <AddButton text="경력 추가하기" />
            </div>
          </div>

          {/* 프로젝트 */}
        </div>
      </Layout>
    </>
  );
};

export default CareerWrite;
