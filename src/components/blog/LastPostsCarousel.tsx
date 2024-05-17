import type Article from "@/interfaces/article.ts";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, } from "@/components/ui/carousel.tsx";
import DateFormatter from "@/components/blog/DateFormatter.tsx";
import PostPreview from "@/components/blog/postPreview.tsx";
import '../../styles/postPreview.styles.scss';

type Props = {
  articles: Article[];
};

export default function LastPostsCarousel({ articles }: Props) {
  return (
    <Carousel>
      <CarouselContent>
        { articles?.map((post: Article) =>
          <CarouselItem className="blog-list-item show sm:basis-1/2 md:basis-1/2 lg:basis-1/3" key={ post.id }>
            <PostPreview post={post} loading='lazy' />
          </CarouselItem>
        ) }
        <CarouselItem className="blog-list-item show sm:basis-1/2 md:basis-1/2 lg:basis-1/3">
          <a
            className='blog-list-item__link'
            href='/blog'
          >
            <div className="flex justify-center w-full h-full items-center">
              <button className='tp-button-outline'>
                Show All
              </button>
            </div>
          </a>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious className='w-12 h-12' style={ { left: '-0.5rem' } } />
      <CarouselNext className='w-12 h-12' style={ { right: '-0.5rem' } } />
    </Carousel>
  );
}
