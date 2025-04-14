import ReactMarkdown from 'react-markdown';
const EducationDetailIntro = ({ introduction }) => {
  const markdownContent = introduction || '';
  return (
    <div className="bg-white rounded-[15px] border p-8 min-h-[500px]">
      <ReactMarkdown>{markdownContent}</ReactMarkdown>
    </div>
  );
};

export default EducationDetailIntro;
