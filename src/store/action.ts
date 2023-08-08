import { createAction } from '@reduxjs/toolkit';
import { SortingType } from '../consts';
import { OfferProps } from '../types/offer-types';

export const changeCity = createAction<string>('changeCity');

export const getOfferList = createAction<OfferProps[]>('getOfferList');

export const sortOffers = createAction<SortingType>('sortOffers');
