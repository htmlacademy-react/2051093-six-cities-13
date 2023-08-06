import { OfferProps } from './types/offer-types';

export const enum AppRoute {
	Main = '/',
	Login = '/login',
	Favorites = '/favorites',
	Offer = '/offer/:id',
}

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

export const SortingType = {
	Popular: 'Popular',
	PriceLow: 'Price: low to high',
	PriceHigh: 'Price: high to low',
	Rated: 'Top rated first'
} as const;

export const sortCallbackMap: {[key: string]: (a: OfferProps, b: OfferProps) => number} = {
	Popular: () => 0,
	PriceLow: (a, b) => a.price - b.price,
	PriceHigh: (a, b) => b.price - a.price,
	Rated: (a, b) => b.rating - a.rating
};
