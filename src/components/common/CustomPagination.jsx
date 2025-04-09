import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
} from '@/components/ui/pagination';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';

const CustomPagination = ({
  // totalItems,
  totalPages, // totalPages (총 페이지버튼개수)
  pagesPerGroup = 4, // 한페이지에나오는 버튼개수
  currentPage = 1, // URL page 숫자
  onChangePage, // url페이지를 관리하는 함수
  style = '',
}) => {
  // const totalPages = Math.ceil(totalItems / itemsPerPage);
  if (totalPages <= 1) return null;
  const currentGroup = Math.floor((currentPage - 1) / pagesPerGroup);
  const groupStart = currentGroup * pagesPerGroup + 1;
  const groupEnd = Math.min(groupStart + pagesPerGroup - 1, totalPages);

  const handlePrevPage = () => {
    console.log('쿨락');
    // if (groupStart > 1) {
    //   onChangePage(groupStart - 1);
    // }
    if (currentPage > 1) {
      onChangePage(currentPage - 1); // ✅ 현재 페이지 기준으로 +1
    }
  };

  const handleNextPage = () => {
    console.log('클릭');
    if (currentPage < totalPages) {
      onChangePage(currentPage + 1); // ✅ 현재 페이지 기준으로 +1
    }
  };

  const renderPages = () => {
    const pages = [];
    for (let i = groupStart; i <= groupEnd; i++) {
      pages.push(
        <PaginationLink
          key={i}
          onClick={() => onChangePage(i)}
          className={`w-[45px] h-[45px] border border-[#D6D6D6] ${
            currentPage === i ? 'bg-primary300 text-white' : 'text-[#D6D6D6]'
          } font-extrabold flex items-center justify-center cursor-pointer`}
        >
          {i}
        </PaginationLink>,
      );
    }
    return pages;
  };

  return (
    <Pagination className={style}>
      <PaginationContent>
        {totalPages > 1 && currentPage > 1 && (
          <PaginationItem className="cursor-pointer" onClick={handlePrevPage}>
            <ChevronLeftIcon className="w-[25px] text-grey300" />
          </PaginationItem>
        )}
        <PaginationItem className="flex gap-3">{renderPages()}</PaginationItem>

        {totalPages > 1 && currentPage < totalPages && (
          <PaginationItem className="cursor-pointer" onClick={handleNextPage}>
            <ChevronRightIcon className="w-[25px] text-grey300" />
          </PaginationItem>
        )}
      </PaginationContent>
    </Pagination>
  );
};

export default CustomPagination;
