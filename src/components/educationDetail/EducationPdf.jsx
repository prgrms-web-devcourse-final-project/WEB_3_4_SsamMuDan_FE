import { pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const MyApp = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div>
      <Document file={testPdf} onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={pageNumber} />
      </Document>
      <p>
        {/* //이전 페이지 보기 */}
        <span onClick={() => (pageNumber > 1 ? setPageNumber(pageNumber - 1) : null)}>&lt;</span>
        <span>
          Page {pageNumber} of {numPages}
        </span>
        {/* //다음 페이지 보기 */}
        <span onClick={() => (pageNumber < numPages ? setPageNumber(pageNumber + 1) : null)}>
          &gt;
        </span>
      </p>
    </div>
  );
};

export default MyApp;
