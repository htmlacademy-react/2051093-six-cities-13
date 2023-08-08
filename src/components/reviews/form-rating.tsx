import { ChangeEvent, Fragment, useState } from 'react';
import { STARS_RATING } from '../../consts';


export const FormRating = () => {
	type Star = typeof STARS_RATING[number]['value'];
	const [reviewRating, setReviewRating] = useState<Star>();
	const handleRatingChange = (evt: ChangeEvent<HTMLInputElement>) => {
		const {value} = evt.target;
		setReviewRating(value);
	};

	return (
		<div className="reviews__rating-form form__rating">
			{STARS_RATING.map(({value, name}) => {
				const isChecked = value === reviewRating;

				return (
					<Fragment key={value}>
						<input
							className="form__rating-input visually-hidden"
							name="rating"
							value={value}
							id={`${value}-stars`}
							type="radio"
							checked={isChecked}
							onChange={handleRatingChange}
						/>
						<label
							htmlFor={`${value}-stars`}
							className="reviews__rating-label form__rating-label"
							title={name}
						>
							<svg className="form__star-image" width={37} height={33}>
								<use xlinkHref="#icon-star" />
							</svg>
						</label>
					</Fragment>
				);
			})}
		</div>
	);


};
