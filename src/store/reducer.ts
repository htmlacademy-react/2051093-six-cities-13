import { createReducer } from '@reduxjs/toolkit';
import { changeCity } from './action';
import { OfferProps } from '../types/offer-types';
import { CITIES } from '../consts';
import { mockOffers } from '../mocks/offers';

const getInitialPlaces = (places: OfferProps[]) => (
	places.filter((place) => place.city.name === CITIES[0])
);

const initialState = {
	city: CITIES[0],
	places: getInitialPlaces(mockOffers()),
};

export const reducer = createReducer(initialState, (builder) => {
	builder
		.addCase(changeCity, (state, action) => {
			state.city = action.payload;
			state.places = getInitialPlaces(mockOffers());
		});
});
