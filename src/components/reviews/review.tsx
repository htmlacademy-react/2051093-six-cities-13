import { ReviewProps } from '../../types/review';
import dayjs from 'dayjs';

export const Review = (review: ReviewProps) => {
	const date = review.date;
	const formatDate = dayjs(new Date(date)).format('MMMM YYYY');

	return (
		<li className="reviews__item">
			<div className="reviews__user user">
				<div className="reviews__avatar-wrapper user__avatar-wrapper">
					<img
						className="reviews__avatar user__avatar"
						src={review.user.avatarUrl}
						width={54}
						height={54}
						alt="Reviews avatar"
					/>
				</div>
				<span className="reviews__user-name">{review.user.name}</span>
			</div>
			<div className="reviews__info">
				<div className="reviews__rating rating">
					<div className="reviews__stars rating__stars">
						<span style={{ width: `${review.rating * 20}%` }} />
						<span className="visually-hidden">Rating</span>
					</div>
				</div>
				<p className="reviews__text">
					{review.comment}
				</p>
				<time className="reviews__time" dateTime={review.date}>
					{formatDate}
				</time>
			</div>
		</li>
	);
};
