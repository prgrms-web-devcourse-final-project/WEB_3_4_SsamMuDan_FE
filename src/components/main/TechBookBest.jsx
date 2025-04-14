import { useEffect, useState } from 'react';
import Badge from '@/common/Badge';
import getTechbookMain from '@/api/main/getTechbookMain';
import getEducationCategory from '@/api/main/getEducationCategory';
import { NavLink } from 'react-router-dom';
import Loading from '../common/Loading';

const TechBookBest = () => {
  const [bookList, setBookList] = useState([]);
  const [categoryMap, setCategoryMap] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const [books, categories] = await Promise.all([
          getTechbookMain({ sort: 'LIKES', size: 4 }),
          getEducationCategory(),
        ]);

        const map = categories.data.reduce((acc, cur) => {
          acc[cur.id] = cur.name;
          return acc;
        }, {});

        setBookList(books);
        setCategoryMap(map);
      } catch (err) {
        console.error('TechBook 베스트 데이터 로딩 실패:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="w-[670px] h-[500px] flex items-center justify-center border-r">
        <Loading />
      </div>
    );
  }

  return (
    <div className="h-[507px] flex flex-wrap justify-between gap-x-[20px] gap-y-[20px] w-[540px]">
      {bookList.map((item) => (
        <NavLink to={`/TECH_BOOK/${item.id}`} key={item.id} className="w-[260px]">
          <div className="p-[20px] relative flex flex-col justify-center items-start border rounded-[10px] hover:shadow-md transition">
            <Badge
              text="HOT"
              className="w-[60px] h-[26px] bg-[#FFCACA] text-[#FF6262] border-[#FF6262] border text-[13px] absolute top-0 left-[20px] m-[-10px]"
            />
            <div className="w-full h-[106px]">
              <img
                src={item.techBookThumbnailUrl}
                alt="강의 카드 이미지"
                className="w-full h-full object-cover rounded-[10px] mt-1"
              />
            </div>
            <div className="flex flex-col items-start">
              <div className="text-[17px] font-[600] text-black mt-[10px] line-clamp-1">
                {item.title}
              </div>
              <div className="text-primary300 text-[17px] font-[600] mt-[5px]">
                {item.price.toLocaleString()}원
              </div>
              <div className="flex flex-row justify-between items-center text-grey300 mt-[2px] w-full">
                <div className="mr-[10px] max-w-[110px] truncate">{item.writer}</div>
                <div className="flex items-center">
                  <img
                    src="/icons/heart.svg"
                    alt="좋아요 아이콘"
                    className="w-5 h-5 inline-block align-middle mr-[2px]"
                  />
                  <div>좋아요&nbsp;({item.likeCount})</div>
                </div>
              </div>
            </div>
          </div>
        </NavLink>
      ))}
    </div>
  );
};

export default TechBookBest;
