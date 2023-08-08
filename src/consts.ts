import { OfferProps } from './types/offer-types';

export const enum AppRoute {
	Main = '/',
	Login = '/login',
	Favorites = '/favorites',
	Offer = '/offer/:id',
}

export const APIRoute = {
	Offers: '/offers'
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

export const STARS_RATING = [
	{
		name: 'perfect',
		value: '5'
	},
	{
		name: 'good',
		value: '4'
	},
	{
		name: 'not bad',
		value: '3'
	},
	{
		name: 'badly',
		value: '2'
	},
	{
		name: 'terribly',
		value: '1'
	}
];

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
	baseURL = 'https://13.design.pages.academy/spec/six-cities',
	authTokenKey = 'six-cities-token'
}

export const TIMEOUT = 5000;

