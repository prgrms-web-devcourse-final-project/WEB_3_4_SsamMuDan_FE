import DateSetForm from './DateSetForm';
import CareerContentForm from './CareerContentForm';

const CareerForm = () => {
  return (
    <>
      <div className="w-[1213px] mx-auto">
        {/* 제목 */}
        <div className="w-full h-[44px] mx-auto border-b">
          <div className="text-[22px] font-semibold">📌 경력</div>
        </div>
        {/* 작성 */}
        <div className="flex flex-row justify-end mt-[40px]">
          <DateSetForm />
          <CareerContentForm />
          <div></div>
        </div>
      </div>
    </>
  );
};

export default CareerForm;
