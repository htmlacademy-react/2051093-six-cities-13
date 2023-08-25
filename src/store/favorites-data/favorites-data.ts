import { createSlice } from '@reduxjs/toolkit';
import { NameSpace, RequestStatus } from '../../consts';
import { FavoritesData } from '../../types/state';
import { fetchFavorites } from '../api-action';

const initialState: FavoritesData = {
	offers: [],
	error: null,
	offersRequestStatus: RequestStatus.Idle
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
			});
	}
});
