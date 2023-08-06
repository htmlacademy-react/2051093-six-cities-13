import { createAction } from '@reduxjs/toolkit';

export const changeCity = createAction<string>('changeCity');

export const getOfferList = createAction('getOfferList');

export const sortOffers = createAction<string>('sortOffers');
