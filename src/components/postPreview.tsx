import DateFormatter from "./DateFormatter";
import '../styles/postPreview.styles.scss';
import type Article from "../interfaces/article";

type Props = {
	post: Article;
	loading: "lazy" | "eager" | undefined;
};

export default function Posts({post, loading}: Props) {
	const {
		title,
		description,
		url,
		publishedAt,
		cover,
		static_img_url,
		static_date,
	} = post.attributes;

	return (
		<div className="blog-list-item">
			<a href={ static_date ? `/blog/${ url }` : `/${ url }` } className="blog-list-item__link">
				<div className="blog-list-item__content">
					<div className="blog-list-item__image-wrapper">
						{ static_img_url &&
							<img
								src={ `https://storage.googleapis.com/triplay-static/images/${ url }/small_${ static_img_url }` }
								className='blog-list-item__image'
								alt={ title }
								width='308'
								height='160'
								loading={loading}
							/>
						}
						{ cover?.data && !static_img_url &&
							<img
								src={ cover.data.attributes.formats.small.url }
								width='308'
								height='160'
								className='blog-list-item__image'
								alt={ title }
								loading={loading}
							/>
						}
					</div>
					<div className='post-header'>{ title }</div>
					<p>{ description }</p>
				</div>
				<div className='blog-date'>
					<svg xmlns='http://www.w3.org/2000/svg' width='14' height='14' viewBox='0 0 24 24' strokeWidth='2'
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
					static_date ? static_date : publishedAt
				} /> }
			</span>
				</div>
			</a>
		</div>
	)
}
