import { createSlice } from '@reduxjs/toolkit';
import { CITIES, NameSpace, RequestStatus, SortingType } from '../../consts';
import { OffersData } from '../../types/state';
import { fetchOffers } from '../api-action';

const initialState: OffersData = {
	city: CITIES[0],
	offers: [],
	sort: SortingType.Popular,
	offersRequestStatus: RequestStatus.Idle
};

export const offersData = createSlice({
	name: NameSpace.Offers,
	initialState,
	reducers: {
		changeCity: (state, action) => {
			state.city = action.payload as string;
		},
		sortOffers: (state, action) => {
			state.sort = action.payload as string;
		}
	},
	extraReducers(builder) {
		builder
			.addCase(fetchOffers.pending, (state) => {
				state.offersRequestStatus = RequestStatus.Pending;
			})
			.addCase(fetchOffers.fulfilled, (state, action) => {
				state.offersRequestStatus = RequestStatus.Successed;
				state.offers = action.payload;
			})
			.addCase(fetchOffers.rejected, (state) => {
				state.offersRequestStatus = RequestStatus.Failed;
			});
	}
});

export const {changeCity, sortOffers} = offersData.actions;
