import { createSlice } from '@reduxjs/toolkit';
import { NameSpace, RequestStatus } from '../../consts';
import { ReviewsData } from '../../types/state';
import { fetchReviews, sendReview } from '../api-action';

const initialState: ReviewsData = {
	reviews: [],
	reviewsRequestStatus: RequestStatus.Idle,
	reviewSendingStatus: RequestStatus.Idle,
	error: null
};

export const reviewsData = createSlice({
	name: NameSpace.Comments,
	initialState,
	reducers: {},
	extraReducers(builder) {
		builder
			.addCase(fetchReviews.pending, (state) => {
				state.reviewsRequestStatus = RequestStatus.Pending;
			})
			.addCase(fetchReviews.fulfilled, (state, action) => {
				state.reviewsRequestStatus = RequestStatus.Successed;
				state.reviews = action.payload;
			})
			.addCase(fetchReviews.rejected, (state) => {
				state.reviewsRequestStatus = RequestStatus.Failed;
			})
			.addCase(sendReview.pending, (state) => {
				state.reviewSendingStatus = RequestStatus.Pending;
			})
			.addCase(sendReview.fulfilled, (state, action) => {
				state.reviewSendingStatus = RequestStatus.Successed;
				state.reviews.push(action.payload);
			})
			.addCase(sendReview.rejected, (state) => {
				state.reviewSendingStatus = RequestStatus.Failed;
			});
	}
});
