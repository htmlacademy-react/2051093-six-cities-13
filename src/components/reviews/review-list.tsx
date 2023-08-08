import { ReviewProps } from '../../types/review';
import { Review } from './review';
import { ReviewForm } from './review-form';

type ReviewsProps = {
	reviews: ReviewProps[];
	isAuthorized?: boolean;
}

export const ReviewList = ({reviews, isAuthorized} : ReviewsProps) => (
	<section className="offer__reviews reviews">
		<h2 className="reviews__title">
			Reviews · <span className="reviews__amount">{reviews.length}</span>
		</h2>
		<ul className="reviews__list">
			{reviews.map((item) => <Review {...item} key={item.id}/>)}
		</ul>
		{isAuthorized ? (
			<ReviewForm />
		) : ('')}
	</section>
);
