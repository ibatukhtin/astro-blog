import { atom } from 'nanostores';

export const showPosts = atom(12);
export const morePosts = () => {
  showPosts.set(showPosts.get() + 12);
}
