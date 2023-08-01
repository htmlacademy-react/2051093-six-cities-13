import { createAction } from '@reduxjs/toolkit';

export const changeCity = createAction('chahgeCity', (city: string) => ({payload: city}));

export const getOfferList = createAction('getOfferList');
