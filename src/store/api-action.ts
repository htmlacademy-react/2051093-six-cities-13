import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/state';
import { AxiosInstance } from 'axios';
import { getOfferList, requireAuthorization, setLoadingStatus } from './action';
import { OfferProps } from '../types/offer-types';
import { APIRoute, AuthorizationStatus } from '../consts';
import { AuthData, UserData } from '../types/user-data';
import { dropToken, saveToken } from '../services/token';

export const fetchOffers = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
	'fetchOffers',
	async(_arg, {dispatch, extra: api}) => {
		dispatch(setLoadingStatus(true));
		const {data} = await api.get<OfferProps[]>(APIRoute.Offers);
		dispatch(setLoadingStatus(false));
		dispatch(getOfferList(data));
	}
);

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
	'user/checkAuth',
	async (_arg, {dispatch, extra: api}) => {
		try {
			await api.get(APIRoute.Login);
			dispatch(requireAuthorization(AuthorizationStatus.Auth));
		} catch {
			dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
		}
	},
);

export const loginAction = createAsyncThunk<void, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
	'user/login',
	async ({login: email, password}, {dispatch, extra: api}) => {
		const {data: {token}} = await api.post<UserData>(APIRoute.Login, {email, password});
		saveToken(token);
		dispatch(requireAuthorization(AuthorizationStatus.Auth));
	},
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}
>(
	'user/logout',
	async (_arg, {dispatch, extra: api}) => {
		await api.delete(APIRoute.Logout);
		dropToken();
		dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
	},
);
