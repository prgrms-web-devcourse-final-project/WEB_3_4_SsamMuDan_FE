// src/components/educationDetail/PdfViewer.jsx

import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';

function PdfViewer({ file }) {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  // PDF 로드 성공 시 페이지 개수 저장
  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div>
      <Document file="/testpdf.pdf" onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={pageNumber} />
      </Document>

      {/* 페이지 이동 버튼 */}
      <div>
        <button disabled={pageNumber <= 1} onClick={() => setPageNumber(pageNumber - 1)}>
          이전 페이지
        </button>
        <span>
          {pageNumber} / {numPages}
        </span>
        <button disabled={pageNumber >= numPages} onClick={() => setPageNumber(pageNumber + 1)}>
          다음 페이지
        </button>
      </div>
    </div>
  );
}

export default PdfViewer;
