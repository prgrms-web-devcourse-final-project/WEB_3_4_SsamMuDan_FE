import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationEllipsis,
} from '@/components/ui/pagination';

import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';
import { useState } from 'react';

const CustomPagination = () => {
  const [currentPage, setCurrentPage] = useState('1');
  return (
    <Pagination>
      <PaginationContent>
        {/* 화살표 아이콘 */}
        <PaginationItem>
          <ChevronLeftIcon className="w-[25px] text-grey300" />
        </PaginationItem>

        <PaginationItem className="">
          <div className="flex flex-row gap-3">
            <PaginationLink
              className={`w-[45px] h-[45px] border border-grey200 ${currentPage === '1' ? 'bg-primary300 text-white' : 'text-black'}  font-extrabold`}
              href="#"
            >
              1
            </PaginationLink>
            <PaginationLink
              className={`w-[45px] h-[45px] border border-grey200 ${currentPage === '2' ? 'bg-primary300 text-white' : 'text-black'}  font-extrabold`}
              href="#"
            >
              2
            </PaginationLink>
            <PaginationLink
              className={`w-[45px] h-[45px] border border-grey200 ${currentPage === '3' ? 'bg-primary300 text-white' : 'text-black'}  font-extrabold`}
              href="#"
            >
              3
            </PaginationLink>
            <PaginationLink
              className={`w-[45px] h-[45px] border border-grey200 ${currentPage === '4' ? 'bg-primary300 text-white' : 'text-black'}  font-extrabold`}
              href="#"
            >
              4
            </PaginationLink>
          </div>
        </PaginationItem>
        {/*  */}
        <PaginationItem>
          <ChevronRightIcon className="w-[25px] text-grey300" href="#" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default CustomPagination;
