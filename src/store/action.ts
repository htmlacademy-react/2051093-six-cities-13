import { createAction } from '@reduxjs/toolkit';
import { AuthorizationStatus, SortingType } from '../consts';
import { OfferProps } from '../types/offer-types';
import { ReviewProps } from '../types/review';

export const changeCity = createAction<string>('changeCity');

export const getOfferList = createAction<OfferProps[]>('getOfferList');

export const sortOffers = createAction<SortingType>('sortOffers');

export const requireAuthorization = createAction<AuthorizationStatus>('reqireAuthorization');

export const setLoadingStatus = createAction<boolean>('setLoadingStatus');

export const getCurrentOffer = createAction<OfferProps>('getCurrentOffer');

export const getReviews = createAction<ReviewProps[]>('getReviews');

export const getNearbyOfferList = createAction<OfferProps[]>('getNearbyOfferList');

export const addReview = createAction<ReviewProps>('addReview');
