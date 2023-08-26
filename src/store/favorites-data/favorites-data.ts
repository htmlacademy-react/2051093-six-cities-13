import { createSlice } from '@reduxjs/toolkit';
import { NameSpace, RequestStatus } from '../../consts';
import { FavoritesData } from '../../types/state';
import { addFavorite, deleteFavorite, fetchFavorites } from '../api-action';

const initialState: FavoritesData = {
	offers: [],
	offersRequestStatus: RequestStatus.Idle,
	offerAddStatus: RequestStatus.Idle,
	offerDeleteStatus: RequestStatus.Idle
};

export const favoritesData = createSlice({
	name: NameSpace.Favorites,
	initialState,
	reducers: {},
	extraReducers(builder) {
		builder
			.addCase(fetchFavorites.pending, (state) => {
				state.offersRequestStatus = RequestStatus.Pending;
			})
			.addCase(fetchFavorites.fulfilled, (state, action) => {
				state.offersRequestStatus = RequestStatus.Successed;
				state.offers = action.payload;
			})
			.addCase(fetchFavorites.rejected, (state) => {
				state.offersRequestStatus = RequestStatus.Failed;
			})
			.addCase(addFavorite.pending, (state) => {
				state.offerAddStatus = RequestStatus.Pending;
			})
			.addCase(addFavorite.fulfilled, (state, action) => {
				state.offerAddStatus = RequestStatus.Successed;
				state.offers.push(action.payload);
			})
			.addCase(deleteFavorite.pending, (state) => {
				state.offerDeleteStatus = RequestStatus.Pending;
			})
			.addCase(deleteFavorite.fulfilled, (state, action) => {
				state.offerDeleteStatus = RequestStatus.Successed;
				state.offers.filter((offer) => offer.id !== action.payload.id);
			});
	}
});
