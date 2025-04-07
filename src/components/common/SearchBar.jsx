import { useEffect, useState } from 'react';

const SearchBar = ({ value = '', style, onSearchChange }) => {
  const [inputValue, setInputValue] = useState(value);

  useEffect(() => {
    setInputValue(value);
  }, [value]);

  const handleChange = (e) => {
    setInputValue(e.target.value); // 👉 값만 변경
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      onSearchChange(inputValue); // 👉 엔터 누를 때만 실행
    }
  };

  const handleSearchClick = () => {
    onSearchChange(inputValue); // 👉 클릭 시 실행
  };

  return (
    <div
      className={`w-[380px] h-[50px] rounded-[30px] bg-[#F2F2F2] flex items-center py-[14px] px-[18px] ${style}`}
    >
      <img
        src="/icons/searchbar-icon.svg"
        alt="검색바"
        className="mr-[18px] cursor-pointer"
        onClick={handleSearchClick}
      />
      <input
        type="text"
        className="bg-transparent outline-none border-none data-[placeholder]:text-grey400 text-[16px] flex-1 mr-[px]"
        placeholder="제목, 글 내용을 검색해 보세요."
        value={inputValue}
        onChange={handleChange} // 👉 값만 저장
        onKeyDown={handleKeyPress} // onKeyPress → onKeyDown 권장
      />
    </div>
  );
};

export default SearchBar;
