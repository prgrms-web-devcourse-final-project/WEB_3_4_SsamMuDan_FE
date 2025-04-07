import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
} from '@/components/ui/pagination';

import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';
import { useEffect, useState } from 'react';

const CustomPagination = ({
  totalItems,
  itemsPerPage,
  pagesPerGroup = 4,
  currentPage = 1,
  onChangePage,
  style = '',
}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const [groupStart, setGroupStart] = useState(1);

  useEffect(() => {
    const group = Math.floor((currentPage - 1) / pagesPerGroup);
    setGroupStart(group * pagesPerGroup + 1);
  }, [currentPage, pagesPerGroup]);

  const handlePrevGroup = () => {
    const newStart = Math.max(groupStart - pagesPerGroup, 1);
    setGroupStart(newStart);
    onChangePage(newStart);
  };

  const handleNextGroup = () => {
    const newStart = groupStart + pagesPerGroup;
    if (newStart <= totalPages) {
      setGroupStart(newStart);
      onChangePage(newStart);
    }
  };

  const renderPages = () => {
    const pages = [];
    for (let i = groupStart; i < groupStart + pagesPerGroup && i <= totalPages; i++) {
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
        <PaginationItem className="cursor-pointer" onClick={handlePrevGroup}>
          <ChevronLeftIcon className="w-[25px] text-grey300" />
        </PaginationItem>
        <PaginationItem className="flex gap-3">{renderPages()}</PaginationItem>
        <PaginationItem className="cursor-pointer" onClick={handleNextGroup}>
          <ChevronRightIcon className="w-[25px] text-grey300" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default CustomPagination;
