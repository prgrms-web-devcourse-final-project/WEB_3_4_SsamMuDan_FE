const StackIcon = ({ item }) => {
  return (
    <>
      {/* 리액트 */}
      <div className="w-[40px] h-[40px] bg-white rounded-[5px] flex flex-row justify-center items-center border ">
        <div className="w-[28px] h-[28px]">
          <img src={item} alt="스택" className="w-full object-cover" />
        </div>
      </div>
    </>
  );
};

export default StackIcon;
