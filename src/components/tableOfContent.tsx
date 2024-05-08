import { marked } from 'marked';

interface Props {
  content: any;
}

function TableOfContents({ content }: Props) {
  const tokens = marked.lexer(content)
  const headings = tokens.filter((token) => token.type === 'heading')
  const getUrl = (heading: any) => {
    return`#${'text' in heading ? heading.text
      .replace(/ /g, '-')
      .replace(/[\/\\^$*+?.()|\[\]{}<>:;"'~,=@`#!%&]/g, '')
      .toLowerCase() : ''}`
  }

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*#/, '');
    const elem = document.getElementById(targetId);
    window.scrollTo({
      top: elem?.offsetTop ? elem?.offsetTop - 70 : 0,
      behavior: 'smooth'
    })
  };

  return (
    <>
      <div className='table-of-content__wrapper'>
        <div className='table-of-content__header'>
          <h3>Table of Contents</h3>
        </div>
        <div>
          <div className='table-of-content__scroll'>
            { headings && <ul>
              { headings.map((heading, i) => (
                <li key={ i } data-depth={ 'depth' in heading ? heading.depth : '0' }>
                  <a
                    onClick={handleScroll}
                    href={ getUrl(heading) }
                  >
                    { 'text' in heading ? heading.text : '' }
                  </a>
                </li>
              )) }
            </ul> }
          </div>
        </div>
      </div>
    </>
  )
}

export default TableOfContents;
