import type Article from "@/interfaces/article.ts";
import PostPreview from '@/components/blog/postPreview.tsx';
import { useState } from "react";

type Props = {
  articles: Article[];
};

export default function PostGrid({ articles }: Props) {
  const showMorePosts = () => {
   setCount(count + 9);
  }
  const [count, setCount] = useState(9);

  return (
    <div className='posts-wrapper'>
      <h1><a href='/blog/all-posts'>Blog</a></h1>
      { articles.length &&
        <ul className='ul-unstyled blog-list'>
          { articles?.filter((item, idx) => idx < count).map((post: Article, index) =>
            <li className='blog-list-item-tsx' key={ index }>
              <PostPreview post={ post } loading={ index < 2 ? 'eager' : 'lazy' } />
            </li>
          ) }
        </ul>
      }
      <div style={ { display: 'flex', justifyContent: 'center' } }>
        <button
          className="tp-button-outline"
          onClick={ () => showMorePosts() }
        >
          Load more
        </button>
      </div>
    </div>
  );
}
