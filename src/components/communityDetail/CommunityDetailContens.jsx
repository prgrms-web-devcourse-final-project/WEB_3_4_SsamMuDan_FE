import { Viewer } from '@toast-ui/react-editor';
import codeSyntaxHighlight from '@toast-ui/editor-plugin-code-syntax-highlight';
import Prism from 'prismjs';
import 'prismjs/themes/prism.css';

const CommunityDetailContens = ({ content, image }) => {
  return (
    <div className="py-[45px]">
      {image && <img src={image} className="mb-[75px]" />}
      <Viewer
        initialValue={content}
        plugins={[[codeSyntaxHighlight, { highlighter: Prism }]]}
      />{' '}
    </div>
  );
};

export default CommunityDetailContens;
