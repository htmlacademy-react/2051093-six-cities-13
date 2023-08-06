import { createReducer } from '@reduxjs/toolkit';
import { changeCity, sortOffers } from './action';
import { OfferProps } from '../types/offer-types';
import { CITIES, sortCallbackMap } from '../consts';
import { mockOffers } from '../mocks/offers';

const getInitialPlaces = (places: OfferProps[], sort = 'Popular') => (
	places.filter((place) => place.city.name === CITIES[0]).sort(sortCallbackMap[sort])
);

const initialState = {
	city: CITIES[0],
	places: getInitialPlaces(mockOffers()),
	sort: 'Popular'
};

export const reducer = createReducer(initialState, (builder) => {
	builder
		.addCase(changeCity, (state, action) => {
			state.city = action.payload;
			state.places = getInitialPlaces(mockOffers());
		})
		.addCase(sortOffers, (state, action) => {
			state.sort = action.payload;
			state.places = getInitialPlaces(mockOffers());
		});
});
