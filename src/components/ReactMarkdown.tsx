import Markdown from 'react-markdown';

type Props = {
  content: any;
};

export default function ReactMarkdown({ content }: Props) {
  return (
    <Markdown
      components={ {
        img: (props) => {
          return (
            <img
              src={ props.src || '' } alt={ props.alt || '' }
              width={ 700 }
              height={ 400 }
            />
          )
        },
      } }
    >
      { content }
    </Markdown>
  )
}
