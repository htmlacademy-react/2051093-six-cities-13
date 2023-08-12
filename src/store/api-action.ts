import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/state';
import { AxiosInstance } from 'axios';
import { getOfferList, setLoadingStatus } from './action';
import { OfferProps } from '../types/offer-types';
import { APIRoute } from '../consts';

export const fetchOffers = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
	'fetchOffers',
	async(_arg, {dispatch, extra: api}) => {
		dispatch(setLoadingStatus(true));
		const {data} = await api.get<OfferProps[]>(APIRoute.Offers);
		dispatch(getOfferList(data));
	}
);

