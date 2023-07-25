import { ChangeEvent, FormEvent, useState } from 'react';
import { FormRating } from './form-rating';


export const ReviewForm = () => {
	const [formData, setFormData] = useState({
		comment: ''
	});

	const ReviewValidate = {
		MinTextLength: 50
	} as const;

	const handleFieldChange = ({target}: ChangeEvent<HTMLTextAreaElement>) => {
		const comment = target.value;
		setFormData({...formData, comment});
	};

	const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
		evt.preventDefault();
	};

	const isDisabled = Boolean(
		formData.comment.length < ReviewValidate.MinTextLength
	);

	return (
		<form className="reviews__form form" action="#" method="post" onSubmit={handleSubmit}>
			<label className="reviews__label form__label" htmlFor="review">
						Your review
			</label>
			<div className="reviews__rating-form form__rating">
				<FormRating />
			</div>
			<textarea
				className="reviews__textarea form__textarea"
				id="review"
				name="review"
				placeholder="Tell how was your stay, what you like and what can be improved"
				defaultValue={formData.comment}
				onChange={handleFieldChange}
			/>
			<div className="reviews__button-wrapper">
				<p className="reviews__help">
							To submit review please make sure to set{' '}
					<span className="reviews__star">rating</span> and describe
							your stay with at least{' '}
					<b className="reviews__text-amount">{ReviewValidate.MinTextLength} characters</b>.
				</p>
				<button
					className="reviews__submit form__submit button"
					type="submit"
					disabled={isDisabled}
				>
							Submit
				</button>
			</div>
		</form>
	);

};

