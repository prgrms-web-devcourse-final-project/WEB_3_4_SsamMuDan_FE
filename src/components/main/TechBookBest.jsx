import { useEffect, useState } from 'react';
import Badge from '@/common/Badge';
import getTechbookMain from '@/api/main/getTechbookMain';
import getEducationCategory from '@/api/main/getEducationCategory';

const TechBookBest = () => {
  const [bookList, setBookList] = useState([]);
  const [categoryMap, setCategoryMap] = useState({});

  useEffect(() => {
    const fetchTechBooks = async () => {
      try {
        const books = await getTechbookMain({ sort: 'LIKES', size: 4 });
        setBookList(books);
      } catch (err) {
        console.error('TechBook 베스트 로딩 실패:', err);
      }
    };

    const fetchCategories = async () => {
      try {
        const res = await getEducationCategory();
        const map = res.data.reduce((acc, cur) => {
          acc[cur.id] = cur.name;
          return acc;
        }, {});
        setCategoryMap(map);
      } catch (err) {
        console.error('카테고리 불러오기 실패:', err);
      }
    };

    fetchTechBooks();
    fetchCategories();
  }, []);

  return (
    <div className="h-[507px] flex flex-wrap justify-between gap-2">
      {bookList.map((item) => (
        <div
          key={item.id}
          className="w-[260px] p-[20px] relative flex flex-col justify-center items-start border rounded-[10px] mb-[10px]"
        >
          <Badge
            // text={categoryMap[item.categoryId] || '카테고리X'}
            // className="w-[81px] h-[26px] bg-[#D7E5FF] text-[#0077FF] border-[#0077FF] border text-[13px] absolute top-0 left-[20px] m-[-10px]"
            text="HOT"
            className="w-[60px] h-[26px] bg-[#FFCACA] text-[#FF6262] border-[#FF6262] border text-[13px] absolute top-0 left-[20px] m-[-10px]"
          />
          <div className="w-[216px] h-[106px]">
            <img
              src={item.techBookThumbnailUrl}
              alt="강의 카드 이미지"
              className="w-full h-full object-cover rounded-[10px] mt-1"
            />
          </div>
          <div className="flex flex-col items-start">
            <div className="text-[17px] font-[600] text-black mt-[10px]">{item.title}</div>
            <div className="text-primary300 text-[17px] font-[600] mt-[5px]">
              {item.price.toLocaleString()}원
            </div>
            <div className="flex flex-row items-center text-grey300 mt-[2px]">
              <div className="mr-[15px]">{item.writer}</div>
              <img
                src="/icons/heart.svg"
                alt="좋아요 아이콘"
                className="w-5 h-5 inline-block align-middle mr-[2px]"
              />
              <div>좋아요&nbsp;({item.likeCount})</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TechBookBest;
