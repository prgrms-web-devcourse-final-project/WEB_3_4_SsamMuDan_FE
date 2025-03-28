import PrimarySelect from '@/components/common/PrimarySelect';

const JongHee = () => {
  const selectList = ['최신순', '높은 평점순'];
  return (
    <div className="flex justify-center mt-[100px]">
      <div className="font-esamanru font-esamanru-bold text-[25px]">테스트</div>
      <PrimarySelect selectList={selectList} placeholder={'최신 순'}></PrimarySelect>
    </div>
  );
};

export default JongHee;
