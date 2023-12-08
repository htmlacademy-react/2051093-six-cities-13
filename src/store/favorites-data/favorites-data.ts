import { createSlice } from '@reduxjs/toolkit';
import { FavoriteStatusCode, NameSpace, RequestStatus } from '../../consts';
import { FavoritesData } from '../../types/state';
import { changeFavoriteAction, fetchFavorites } from '../api-action';

const initialState: FavoritesData = {
	offers: [],
	offersRequestStatus: RequestStatus.Idle,
	offersCount: 0,
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
				state.offersCount = state.offers.length;
			})
			.addCase(fetchFavorites.rejected, (state) => {
				state.offersRequestStatus = RequestStatus.Failed;
			})
			.addCase(changeFavoriteAction.fulfilled, (state, action) => {
				state.offersRequestStatus = RequestStatus.Successed;
				switch (action.payload.status) {
					case FavoriteStatusCode.Add:
						state.offers.push(action.payload.offer);
						++state.offersCount;
						break;
					case FavoriteStatusCode.Remove:
						state.offers = state.offers.filter((offer) => offer.id !== action.payload.offer.id);
						--state.offersCount;

				}
			}).
			addCase(changeFavoriteAction.rejected, (state) => {
				state.offersRequestStatus = RequestStatus.Failed;
			}).
			addCase(changeFavoriteAction.pending, (state) => {
				state.offersRequestStatus = RequestStatus.Pending;
			});
	}
});
