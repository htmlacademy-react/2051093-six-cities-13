import { CSSProperties } from 'react';
import { OfferProps } from './types/offer-types';

export const enum AppRoute {
	Main = '/',
	Login = '/login',
	Favorites = '/favorites',
	Offer = '/offer',
}

export const APIRoute = {
	Offers: '/offers',
	Favorite: '/favorite',
	Login: '/login',
	Logout: '/logout',
	Comments: '/comments'
};

export const enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}


export const CITIES = [
	'Paris',
	'Cologne',
	'Brussels',
	'Amsterdam',
	'Hamburg',
	'Dusseldorf'
];

export const OFFER_TYPE = [
	'apartment',
	'room',
	'house',
	'hotel'
];

export const URL_MARKER_DEFAULT = './img/pin.svg';

export const URL_MARKER_CURRENT = './img/pin-active.svg';

export enum SortingType {
	Popular = 'Popular',
	PriceLow = 'Price: low to high',
	PriceHigh= 'Price: high to low',
	Rated = 'Top rated first',
}

export const sortCallbackMap = {
	Popular: (offers: OfferProps[]) => offers.slice(),
	PriceLow: (offers: OfferProps[]) => offers.slice().sort((a, b) => a.price - b.price),
	PriceHigh: (offers: OfferProps[]) => offers.slice().sort((a, b) => b.price - a.price),
	Rated: (offers: OfferProps[]) => offers.slice().sort((a, b) => b.rating - a.rating)
};

export const enum Api {
	baseURL = 'https://13.design.pages.academy/six-cities',
	authTokenKey = 'six-cities-token'
}

export const TIMEOUT = 5000;


export const containerStyle: CSSProperties = {
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	justifyContent: 'center',
	gap: '60px',
	height: '100vh'
};

export const spinnerSize = 300;

export const textStyle: CSSProperties = {
	fontSize: '46px',
};
