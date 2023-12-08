import { createSlice } from '@reduxjs/toolkit';
import { NameSpace, RequestStatus } from '../../consts';
import { OfferData } from '../../types/state';
import { fetchOffer } from '../api-action';

const initialState: OfferData = {
	offer: null,
	offerRequestStatus: RequestStatus.Idle
};

export const offerData = createSlice({
	name: NameSpace.Offer,
	initialState,
	reducers: {},
	extraReducers(builder) {
		builder
			.addCase(fetchOffer.pending, (state) => {
				state.offerRequestStatus = RequestStatus.Pending;
			})
			.addCase(fetchOffer.fulfilled, (state, action) => {
				state.offerRequestStatus = RequestStatus.Successed;
				state.offer = action.payload;
			})
			.addCase(fetchOffer.rejected, (state) => {
				state.offerRequestStatus = RequestStatus.Failed;
			});
	}
});
