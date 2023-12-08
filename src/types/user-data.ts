import { OfferProps } from './offer-types';

export type AuthData = {
  login: string;
  password: string;
};

export type UserData = {
	name: string;
	avatarUrl: string;
	isPro: boolean;
  email: string;
  token: string;
};

export type FavoriteStatusType = {
  id: string;
  status: number;
}

export type FavoriteChangeResponse = {
	offer: OfferProps;
	status: number;
}
