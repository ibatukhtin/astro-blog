import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';

type Props = {
  content: any;
};

export default function ReactMarkdown({ content }: Props) {
  return (
    <Markdown
      remarkPlugins={ [remarkGfm] }
      rehypePlugins={ [rehypeSlug] }
      components={ {
        img: (props) => {
          return (
            <img
              src={ props.src || '' } alt={ props.alt || '' }
              width={ 700 }
              height={ 400 }
              loading='lazy'
              decoding='async'
            />
          )
        },
      } }
    >
      { content }
    </Markdown>
  )
}
