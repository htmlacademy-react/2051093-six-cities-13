import { ReviewProps } from '../../types/review';
import { Review } from './review';

type ReviewsProps = {
	reviews: ReviewProps[];
}

const MIN_REVIEWS_COUNT = 0;
const MAX_REVIEWS_COUNT = 10;

export const ReviewList = ({reviews} : ReviewsProps) => {

	const sortedReviews = [...reviews]
		.sort((a,b) => Date.parse(b.date) - Date.parse(a.date)).slice(MIN_REVIEWS_COUNT, MAX_REVIEWS_COUNT);
	return (
		<>
			<h2 className="reviews__title">
			Reviews · <span className="reviews__amount">{reviews.length}</span>
			</h2>
			<ul className="reviews__list">
				{sortedReviews.map((item) => <Review {...item} key={item.id}/>)}
			</ul>

		</>
	);
};
