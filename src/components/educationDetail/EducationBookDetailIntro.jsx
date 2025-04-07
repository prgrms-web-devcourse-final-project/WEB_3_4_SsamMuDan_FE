import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';

import { useState } from 'react';
import { pdfjs } from 'react-pdf';
import { Document, Page } from 'react-pdf';
import 'react-pdf/dist/esm/Page/TextLayer.css';
import 'react-pdf/dist/Page/AnnotationLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

const EducationBookDetailIntro = ({ introduction, content, totalpage }) => {
  //pdf 버튼
  const [pageNumber, setPageNumber] = useState(1);
  const [numPages, setNumPages] = useState(30); // 전체 페이지 수

  return (
    <div className="bg-white rounded-[15px] border p-8">
      {/* 강의소개 */}
      <div className="mb-[86px]">
        <div className="text-[30px] font-regular mb-[30px]">강의소개</div>
        {/* 콘텐츠 내용이 들어가야한다 */}
        <div className="text-sm text-gray-700 leading-relaxed whitespace-pre-wrap">
          {introduction}
        </div>
      </div>
      {/* 미리보기 */}
      <div className="relative">
        <div className="text-[30px] font-regular mb-[30px]">미리보기</div>
        {/* pdf자리 */}
        <div
          className="shadow-md p-[20px] !pointer-events-none border border-[#dddddd] min-h-[834px]"
          onClick={(e) => e.stopPropagation()}
        >
          <Document file={content}>
            <Page pageNumber={pageNumber} />
          </Document>
        </div>

        <div className="absolute bottom-[30px] left-1/2 transform -translate-x-1/2 p-[10px]  h-[50px] bg-white border mx-auto border-grey100 shadow-custom-md flex outline-none rounded-[10px] items-center justify-center">
          <button
            onClick={() => setPageNumber((prev) => prev - 1)}
            disabled={pageNumber == 1}
            className=" text-gray-400 disabled:text-[#d7d7d7] w-[30px] h-[30px] mr-[8px] rounded-full hover:bg-[#efefef] flex items-center justify-center"
          >
            <ChevronLeftIcon className="w-[20px]" />
          </button>
          <div className="text-grey300 text-[15px]">{pageNumber}</div>
          <div className="text-grey300 text-[15px] mx-[10px]">/</div>
          <div className="text-grey300 text-[15px]">{totalpage}</div>

          <button
            onClick={() => setPageNumber((prev) => prev + 1)}
            disabled={pageNumber >= 3}
            className=" text-gray-400 disabled:text-[#d7d7d7] w-[30px] h-[30px] ml-[8px] rounded-full hover:bg-[#efefef] flex items-center justify-center"
          >
            <ChevronRightIcon className="w-[20px]" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default EducationBookDetailIntro;
