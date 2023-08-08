import { createReducer } from '@reduxjs/toolkit';
import { changeCity, getOfferList, sortOffers } from './action';
import { CITIES, SortingType } from '../consts';
import { mockOffers } from '../mocks/offers';

const places = mockOffers();

const initialState = {
	city: CITIES[0],
	places: places,
	sort: SortingType.Popular
};

export const reducer = createReducer(initialState, (builder) => {
	builder
		.addCase(changeCity, (state, action) => {
			state.city = action.payload;
		})
		.addCase(getOfferList, (state ,action) => {
			state.places = action.payload;
		})
		.addCase(sortOffers, (state, action) => {
			state.sort = action.payload;
		});
});
