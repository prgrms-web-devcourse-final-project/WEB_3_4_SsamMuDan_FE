import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import { pdfjs } from 'react-pdf';

// // pdf.worker.js 활성화
// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

// import { pdfjs } from 'react-pdf';

// pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;
// react - pdf;
// import { pdfjs } from 'react-pdf';

// // PDF.js의 워커 파일 경로 설정
// pdfjs.GlobalWorkerOptions.workerSrc = '/pdf.worker.min.js';

// import { pdfjs } from 'react-pdf';
// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
// --legacy-peer-deps
