const CommunityFloating = ({ image, text, style, type }) => {
  return (
    <div
      className={`w-[101px] h-[49px] rounded-[10px] bg-white border border-[#EEEEEE] p-[16px] flex justify-center items-center shadow-lg mb-[8px] ${style}`}
    >
      {type == 'modify' || type == 'delete' || type == 'completed' ? (
        <div className="text-[16px] font-bold">{text}</div>
      ) : (
        <>
          <img src={image} alt="조회" className="mr-[10px]" />
          <div className="text-[16px] font-normal">{text}</div>
        </>
      )}
    </div>
  );
};

export default CommunityFloating;
