import { createReducer } from '@reduxjs/toolkit';
import { changeCity, getOfferList, requireAuthrization, sortOffers } from './action';
import { AuthorizationStatus, CITIES, SortingType } from '../consts';
import { OfferProps } from '../types/offer-types';

type InitialState = {
	city: string;
	offers: OfferProps[];
	sort: string;
	authorization: AuthorizationStatus;
}

const initialState: InitialState = {
	city: CITIES[0],
	offers: [],
	sort: SortingType.Popular,
	authorization: AuthorizationStatus.Unknown
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
		.addCase(requireAuthrization, (state, action) => {
			state.authorization = action.payload;
		});
});
