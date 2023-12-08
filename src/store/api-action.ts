import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/state';
import { AxiosInstance } from 'axios';
import { OfferProps } from '../types/offer-types';
import { APIRoute } from '../consts';
import { AuthData, FavoriteChangeResponse, FavoriteStatusType, UserData } from '../types/user-data';
import { dropToken, saveToken } from '../services/token';
import { NewReview, ReviewProps } from '../types/review';

export const fetchOffers = createAsyncThunk<OfferProps[], undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
	'fetchOffers',
	async(_arg, {extra: api}) => {
		const {data: offers} = await api.get<OfferProps[]>(APIRoute.Offers);
		return offers;
	}
);

export const fetchOffer = createAsyncThunk<OfferProps, string, {
	dispatch: AppDispatch;
	state: State;
	extra: AxiosInstance;
}>(
	'fetchOffer',
	async (id, {extra: api}) => {
		const {data: offer} = await api.get<OfferProps>(`${APIRoute.Offers}/${id}`);
		return offer;
	}
);

export const fetchReviews = createAsyncThunk<ReviewProps[], string, {
	dispatch: AppDispatch;
	state: State;
	extra: AxiosInstance;
}>(
	'fetchReviews',
	async (id, {extra: api}) => {
		const {data: reviews} = await api.get<ReviewProps[]>(`${APIRoute.Comments}/${id}`);
		return reviews;
	}
);

export const sendReview = createAsyncThunk<ReviewProps, NewReview, {
	dispatch: AppDispatch;
	state: State;
	extra: AxiosInstance;
}
>(
	'sendReview',
	async ({id, comment, rating},{extra: api}) => {
		const {data: review} = await api.post<ReviewProps>(`${APIRoute.Comments}/${id}`, {comment, rating});

		return review;
	}
);

export const fetchNearPlaces = createAsyncThunk<OfferProps[], string, {
	dispatch: AppDispatch;
	state: State;
	extra: AxiosInstance;
}>(
	'fetchNearPlaces',
	async (id, {extra: api}) => {
		const {data: nearPlaces} = await api.get<OfferProps[]>(`${APIRoute.Offers}/${id}/nearby`);

		return nearPlaces;
	}
);

export const fetchFavorites = createAsyncThunk<OfferProps[], string, {
	dispatch: AppDispatch;
	state: State;
	extra: AxiosInstance;
}>(
	'fetchFavorites',
	async (_arg, {extra: api}) => {
		const {data: favorites} = await api.get<OfferProps[]>(APIRoute.Favorite);

		return favorites;
	}
);

export const changeFavoriteAction = createAsyncThunk<FavoriteChangeResponse, FavoriteStatusType, {
	dispatch: AppDispatch;
	state: State;
	extra: AxiosInstance;
}>(
	'changeFavoriteAction',
	async ({id, status}, {extra: api}) => {
		const {data: favorite} = await api.post<OfferProps>(`${APIRoute.Favorite}/${id}/${status}`);

		return {offer: favorite, status};
	}
);

export const checkAuthAction = createAsyncThunk<UserData, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
	'user/checkAuth',
	async (_arg, {extra: api}) => {
		const {data} = await api.get<UserData>(APIRoute.Login);

		return data;
	},
);

export const loginAction = createAsyncThunk<UserData, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
	'user/login',
	async ({login: email, password}, {extra: api}) => {
		const {data} = await api.post<UserData>(APIRoute.Login, {email, password});
		saveToken(data.token);

		return data;
	}
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}
>(
	'user/logout',
	async (_arg, {extra: api}) => {
		await api.delete(APIRoute.Logout);
		dropToken();
	},
);
