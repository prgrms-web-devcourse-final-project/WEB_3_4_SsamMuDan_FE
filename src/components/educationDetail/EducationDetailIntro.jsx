import remarkGfm from 'remark-gfm';
import ReactMarkdown from 'react-markdown'; //
const EducationDetailIntro = ({ introduction }) => {
  const markdownText = introduction || '';

  console.log('introduction', introduction);
  return (
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
  );
};

export default EducationDetailIntro;
