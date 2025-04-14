import { useEffect, useState } from 'react';
import getTechBookDetail from '@/api/education/getTechBookDetail';
import getTechbookMain from '@/api/main/getTechbookMain';
import { NavLink } from 'react-router-dom';
import Loading from '../common/Loading';

const TechBookList = ({ categoryId }) => {
  const [bookList, setBookList] = useState([]);
  const [loading, setLoading] = useState(true); // 로딩 상태

  useEffect(() => {
    if (!categoryId) return;

    const fetchTechBooks = async () => {
      setLoading(true); // API 호출 전 로딩 시작
      try {
        const books = await getTechbookMain({
          sort: 'LATEST',
          size: 12,
          categoryId,
        });
        const top3 = books.slice(0, 3);
        // getTechBookDetail로 상세 데이터 불러와 해당 id의 introduction(내용)만 붙이기
        const withIntro = await Promise.all(
          top3.map(async (book) => {
            try {
              const detail = await getTechBookDetail(book.id);
              return { ...book, introduction: detail.data.introduction };
            } catch (err) {
              console.error(`❌ id:${book.id} 상세조회 실패`, err);
              return { ...book, introduction: '내용을 불러올 수 없습니다.' };
            }
          }),
        );

        setBookList(withIntro);
      } catch (err) {
        console.error('TechBook 리스트 로딩 실패:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchTechBooks();
  }, [categoryId]);

  // 로딩 중일 때
  if (loading) {
    return (
      <div className="w-[670px] h-[500px] flex items-center justify-center border-r">
        <Loading />
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-3 border-r">
      {bookList.map((item) => (
        <NavLink to={`/TECH_BOOK/${item.id}`} key={item.id}>
          <div className="w-[670px] h-[158px] flex flex-row border justify-center items-center rounded-[10px] p-[15px] mr-[20px] hover:shadow-lg transition">
            <div className="w-[450px] h-[114px] flex flex-col justify-between">
              <div className="text-[20px] font-[600] text-black line-clamp-1">{item.title}</div>
              <div className="flex flex-row items-center text-grey300">
                <div className="mr-[15px]">{item.writer}</div>
                <img
                  src="/icons/heart.svg"
                  alt="좋아요 아이콘"
                  className="w-5 h-5 inline-block align-middle mr-[2px]"
                />
                <div>좋아요&nbsp;({item.likeCount})</div>
              </div>
              <div className="w-[440px] line-clamp-2 mr-1">{item.introduction}</div>
            </div>
            <div className="w-[203px] h-[129px]">
              <img
                src={item.techBookThumbnailUrl}
                alt="강의 카드 이미지"
                className="w-[200px] h-full object-cover rounded-[15px] mr-2"
              />
            </div>
          </div>
        </NavLink>
      ))}
    </div>
  );
};

export default TechBookList;
