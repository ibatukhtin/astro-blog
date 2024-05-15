import type Article from "@/interfaces/article.ts";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, } from "@/components/ui/carousel.tsx";
import DateFormatter from "@/components/blog/DateFormatter.tsx";
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
            <a
              href={ `/blog/${ post.attributes.url }` }
              className="blog-list-item__link">
              <div>
                <div className="blog-list-item__image-wrapper">
                  { post.attributes.static_img_url &&
                    <img
                      src={ `https://storage.googleapis.com/triplay-static/images/${ post.attributes.url }/small_${ post.attributes.static_img_url }` }
                      className='blog-list-item__image'
                      alt={ post.attributes.title }
                      width='308'
                      height='160'
                      loading='lazy'
                    />
                  }
                  { post.attributes.cover?.data && !post.attributes.static_img_url &&
                    <img
                      src={ post.attributes.cover.data.attributes.formats.small.url }
                      width='308'
                      height='160'
                      className='blog-list-item__image'
                      alt={ post.attributes.title }
                      loading='lazy'
                    />
                  }
                </div>
                <div className='post-header'>{ post.attributes.title }</div>
                <p>{ post.attributes.description }</p>
              </div>
              <div className='blog-date'>
                <svg xmlns='http://www.w3.org/2000/svg' width='14' height='14' viewBox='0 0 24 24'
                     strokeWidth='2'
                     stroke='currentColor' fill='none' strokeLinecap='round' strokeLinejoin='round'>
                  <path stroke='none' d='M0 0h24v24H0z' fill='none' />
                  <path d='M4 5m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z' />
                  <path d='M16 3l0 4' />
                  <path d='M8 3l0 4' />
                  <path d='M4 11l16 0' />
                  <path d='M8 15h2v2h-2z' />
                </svg>
                <span>
                    { <DateFormatter dateString={
                      post.attributes.static_date ? post.attributes.static_date : post.attributes.publishedAt
                    } /> }
                  </span>
              </div>
            </a>
          </CarouselItem>
        ) }
      </CarouselContent>
      <CarouselPrevious className='w-12 h-12' style={ { left: '-0.5rem' } } />
      <CarouselNext className='w-12 h-12' style={ { right: '-0.5rem' } } />
    </Carousel>
  );
}
