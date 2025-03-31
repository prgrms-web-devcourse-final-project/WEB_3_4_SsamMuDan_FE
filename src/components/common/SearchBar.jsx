const SearchBar = ({ style, content }) => {
  return (
    <div
      className={`w-[380px] h-[50px] rounded-[30px] bg-[#F2F2F2] flex items-center py-[14px] px-[18px] ${style}`}
    >
      <img src="/icons/searchbar-icon.svg" alt="검색바" className="mr-[18px]" />
      <input
        type="text"
        className="bg-transparent outline-none border-none data-[placeholder]:text-grey400 text-[16px] flex-1 mr-[px]"
        placeholder="제목, 글 내용을 검색해 보세요."
      />
    </div>
  );
};

export default SearchBar;
