import { createReducer } from '@reduxjs/toolkit';
import { addReview, changeCity, getCurrentOffer, getNearbyOfferList, getOfferList, getReviews, requireAuthorization, setLoadingStatus, sortOffers } from './action';
import { AuthorizationStatus, CITIES, SortingType } from '../consts';
import { OfferProps } from '../types/offer-types';
import { ReviewProps } from '../types/review';

type InitialState = {
	city: string;
	offers: OfferProps[];
	sort: string;
	authorization: AuthorizationStatus;
	isDataLoading: boolean;
	offer: OfferProps;
	reviews: ReviewProps[];
	nearbyOffers: OfferProps[];
}

const initialState: InitialState = {
	city: CITIES[0],
	offers: [],
	sort: SortingType.Popular,
	authorization: AuthorizationStatus.Unknown,
	isDataLoading: false,
	offer: {} as OfferProps,
	reviews: [],
	nearbyOffers: [],
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
		})
		.addCase(getCurrentOffer, (state, action) => {
			state.offer = action.payload;
		})
		.addCase(getReviews, (state, action) => {
			state.reviews = action.payload;
		})
		.addCase(getNearbyOfferList, (state ,action) => {
			state.nearbyOffers = action.payload;
		})
		.addCase(addReview, (state, action) => {
			state.reviews.push(action.payload);
		});
});
