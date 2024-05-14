import { useRef, useState } from "react";

function ShowMore() {
  const elRef = useRef<HTMLButtonElement>(null);

  const posts = document.querySelectorAll('.blog-list-item');
  const [visiblePosts, setVisiblePosts] = useState(9);

  const showMorePosts = () => {
    posts.forEach((post, index) => {
      if (index < visiblePosts) {
        post.classList.add('show');
      } else {
        post.classList.remove('show');
      }
    });

    if (elRef.current) {
      if (visiblePosts < posts.length) {
        elRef.current.style.display = 'block';
      } else {
        elRef.current.style.display = 'none';
      }
    }
  }

  const handleClick = () => {
    setVisiblePosts(visiblePosts + 9);
  }

  showMorePosts();

  return (
    <div style={ { display: 'flex', justifyContent: 'center' } }>
      <button
        ref={ elRef }
        id="show-more"
        className="tp-button-outline"
        onClick={() => handleClick()}
      >
        Show more
      </button>
    </div>
  )
}

export default ShowMore;
