import { Author } from '@/domain/features/posts/models/post';
import { Avatar, Flex } from '@mantine/core';

interface Props {
  author: Author
}

const Author: FC<Props> = ({ author }) => {
  const {
    name,
    slug,
    caption,
    caption_line_2,
    link,
    avatar,
  } = author.attributes;

  return (
    <section id='author' className='author'>
      <Flex gap='1rem' align='center' className='author-container'>
        { !!avatar.data &&
          <a target='_blank' href={ link }>
            <Avatar src={ avatar.data.attributes.url } alt={ name } size={ 64 } />
          </a>
        }
        <div>
          <div className='author-name'>
            <a href={ `/authors/${ slug }` }>{ name }</a>
          </div>
          { !!caption && <div className='author-caption'>{ caption }</div> }
          { !!caption_line_2 && <div className='author-caption'>{ caption_line_2 }</div> }
        </div>
      </Flex>
    </section>
  )
}

export default Author;
