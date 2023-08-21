import { createReducer } from '@reduxjs/toolkit';
import { changeCity, getOfferList, requireAuthorization, setLoadingStatus, sortOffers } from './action';
import { AuthorizationStatus, CITIES, SortingType } from '../consts';
import { OfferProps } from '../types/offer-types';

type InitialState = {
	city: string;
	offers: OfferProps[];
	sort: string;
	authorization: AuthorizationStatus;
	isDataLoading: boolean;
}

const initialState: InitialState = {
	city: CITIES[0],
	offers: [],
	sort: SortingType.Popular,
	authorization: AuthorizationStatus.Unknown,
	isDataLoading: false,
};

export const reducer = createReducer(initialState, (builder) => {
	builder
		.addCase(changeCity, (state, action) => {
			state.city = action.payload;
		})
		.addCase(getOfferList, (state ,action) => {
			state.offers = action.payload;
		})
		.addCase(sortOffers, (state, action) => {
			state.sort = action.payload;
		})
		.addCase(requireAuthorization, (state, action) => {
			state.authorization = action.payload;
		})
		.addCase(setLoadingStatus, (state, action) => {
			state.isDataLoading = action.payload;
		});
});
