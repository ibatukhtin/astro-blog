import type Article from "@/interfaces/article.ts";
import '../styles/postPreview.styles.scss';
import { useStore } from '@nanostores/react';
import { showPosts, morePosts } from '@/store/store';
import PostPreview from '@/components/postPreview.tsx';

type Props = {
  articles: Article[];
};

export default function PostGrid({ articles }: Props) {
  const postsCount = useStore(showPosts);
  const showMorePosts = () => {
    morePosts()
  }

  return (
    <>
      { articles.length &&
        <ul className='ul-unstyled blog-list'>
          { articles?.filter((item, idx) => idx < postsCount).map((post: Article, index) =>
            <li className='blog-list-item' key={index}>
              <PostPreview post={ post } loading={ index < 2 ? 'eager' : 'lazy' } />
            </li>
          ) }
        </ul>
      }
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <button
          className="tp-button-outline"
          onClick={ () => showMorePosts() }
        >
          Load more
        </button>
      </div>
    </>
  );
}
