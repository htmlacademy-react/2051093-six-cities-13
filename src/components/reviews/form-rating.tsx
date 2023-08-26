import { ChangeEvent, Fragment } from 'react';
import { useAppSelector } from '../../hooks';
import { getReviewSendingStatus } from '../../store/reviews-data/selector';
import { RequestStatus } from '../../consts';

type RatingProps = {
	onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const FormRating = ({onChange} : RatingProps) => {
	const reviewSendingStatus = useAppSelector(getReviewSendingStatus);
	const isInputDisabled = reviewSendingStatus === RequestStatus.Pending;


	const ratingValues = {
		'1': 'terribly',
		'2': 'badly',
		'3': 'not bad',
		'4': 'good',
		'5': 'perfect',
	};

	return (
		<div className="reviews__rating-form form__rating">
			{Object.entries(ratingValues).reverse().map(([value, title]) => (
				<Fragment key={value}>
					<input
						onChange={onChange}
						className="form__rating-input visually-hidden"
						name="rating"
						defaultValue={value}
						id={`${value}-stars`}
						type="radio"
						disabled={isInputDisabled}
					/>
					<label
						htmlFor={`${value}-stars`}
						className="reviews__rating-label form__rating-label"
						title={title}
					>
						<svg className="form__star-image" width="37" height="33">
							<use xlinkHref="#icon-star"></use>
						</svg>
					</label>
				</Fragment>
			))}
		</div>
	);


};
