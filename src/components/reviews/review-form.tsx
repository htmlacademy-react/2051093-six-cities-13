import { ChangeEvent, FormEvent, useEffect, useRef, useState } from 'react';
import { FormRating } from './form-rating';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { sendReview } from '../../store/api-action';
import { CommentField } from '../../types/review';
import { getReviewSendingStatus } from '../../store/reviews-data/selector';
import { RequestStatus } from '../../consts';

type FormProps = {
	id: string | undefined;
}

export const ReviewForm = ({id}: FormProps) => {
	const ReviewValidate = {
		MinTextLength: 50,
		MaxTextLength: 300
	} as const;

	const reviewSendingStatus = useAppSelector(getReviewSendingStatus);
	const dispatch = useAppDispatch();
	const [review, setReview] = useState('');
	const [rating, setRating] = useState('');
	const formRef = useRef<HTMLFormElement | null>(null);
	const isSuccess = reviewSendingStatus === RequestStatus.Successed;
	const isFormDisabled = reviewSendingStatus === RequestStatus.Pending || review.length < ReviewValidate.MinTextLength || review.length > ReviewValidate.MaxTextLength || rating === '';
	const isInputDisabled = reviewSendingStatus === RequestStatus.Pending;

	const handleFieldChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
		setReview(event.target.value);
	};

	const handleRatingChange = (event: ChangeEvent<HTMLInputElement>) => {
		setRating(event.target.value);
	};

	const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const form = event.currentTarget as CommentField;
		if(id) {
			dispatch(sendReview({
				id,
				comment: form.review.value,
				rating: Number(form.rating.value),
			}));
		}
	};

	useEffect(() => {
		if(isSuccess) {
			formRef.current?.reset();
			setReview('');
			setRating('');
		}
	}, [isSuccess]);

	return (
		<form
			className="reviews__form form"
			action="#"
			method="post"
			onSubmit={handleSubmit}
			ref={formRef}
		>
			<label className="reviews__label form__label" htmlFor="review">
						Your review
			</label>
			<FormRating onChange={handleRatingChange}/>
			<textarea
				className="reviews__textarea form__textarea"
				id="review"
				name="review"
				placeholder="Tell how was your stay, what you like and what can be improved"
				value={review}
				onChange={handleFieldChange}
				disabled={isInputDisabled}
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
					disabled={isFormDisabled}
				>
							Submit
				</button>
			</div>
		</form>
	);
};
