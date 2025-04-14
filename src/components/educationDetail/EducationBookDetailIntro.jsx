import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';
import ReactMarkdown from 'react-markdown'; // ReactMarkdown import
import { useState } from 'react';
import { pdfjs } from 'react-pdf';
import { Document, Page } from 'react-pdf';

import remarkGfm from 'remark-gfm';
// import ReactMarkdown from 'react-markdown';
import 'react-pdf/dist/esm/Page/TextLayer.css';
import 'react-pdf/dist/Page/AnnotationLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

const EducationBookDetailIntro = ({ introduction, content, totalpage }) => {
  //pdf 버튼
  const [pageNumber, setPageNumber] = useState(1);
  const [numPages, setNumPages] = useState(30); // 전체 페이지 수
  const markdownText = introduction || '';

  return (
    <div className="bg-white rounded-[15px] border p-8 min-h-[470px]">
      {/* 강의소개 */}
      <div className="mb-[86px]">
        <div className="text-[30px] font-regular mb-[30px]">강의소개</div>

        <div className="prose max-w-none">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
              code({ node, inline, className, children, ...props }) {
                return inline ? (
                  <code className="bg-gray-100 px-1 rounded">{children}</code>
                ) : (
                  <pre className="bg-gray-900 text-white p-4 rounded overflow-x-auto text-sm">
                    <code>{children}</code>
                  </pre>
                );
              },
              ul({ node, children, ...props }) {
                return <ul className="list-disc pl-5">{children}</ul>; // 기본적인 리스트 스타일 추가
              },
              li({ node, children, ...props }) {
                return <li className="mb-1">{children}</li>; // 리스트 항목에 마진 추가
              },
            }}
          >
            {markdownText}
          </ReactMarkdown>
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
          <Document
            file={content}
            onLoadSuccess={({ numPages }) => setNumPages(numPages)} // PDF 전체 페이지 수 받아오기
          >
            <Page pageNumber={pageNumber} />
          </Document>
        </div>

        <div className="absolute bottom-[30px] left-1/2 transform -translate-x-1/2 p-[10px]  h-[50px] bg-white border mx-auto border-grey100 shadow-custom-md flex outline-none rounded-[10px] items-center justify-center">
          <button
            onClick={() => setPageNumber((prev) => prev - 1)}
            disabled={pageNumber === 1}
            className="text-gray-400 disabled:text-[#d7d7d7] w-[30px] h-[30px] mr-[8px] rounded-full hover:bg-[#efefef] flex items-center justify-center"
          >
            <ChevronLeftIcon className="w-[20px]" />
          </button>
          <div className="text-grey300 text-[15px]">{pageNumber}</div>
          <div className="text-grey300 text-[15px] mx-[10px]">/</div>
          <div className="text-grey300 text-[15px]">{totalpage}</div>

          <button
            onClick={() => setPageNumber((prev) => prev + 1)}
            disabled={pageNumber >= numPages}
            className="text-gray-400 disabled:text-[#d7d7d7] w-[30px] h-[30px] ml-[8px] rounded-full hover:bg-[#efefef] flex items-center justify-center"
          >
            <ChevronRightIcon className="w-[20px]" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default EducationBookDetailIntro;
