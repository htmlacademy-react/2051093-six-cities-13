import { AuthorizationStatus, RequestStatus } from '../consts';
import { store } from '../store';
import { OfferProps } from './offer-types';
import { ReviewProps } from './review';

export type State = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export type UserProcess = {
  authorization: AuthorizationStatus;
	// user: UserData;
	// checkAuthStatus: RequestStatus;
	error: string | null;
};

export type OffersData = {
	offers: OfferProps[];
	sort: string;
	city: string;
	error: string | null;
	offersRequestStatus: RequestStatus;
}

export type OfferData = {
	offer: OfferProps;
	error: string | null;
	offerRequestStatus: RequestStatus;
}

export type ReviewsData = {
	reviews: ReviewProps[];
	reviewsRequestStatus: RequestStatus;
	reviewSendingStatus: RequestStatus;
	error: string | null;
}

export type NearPlacesData = {
	places: OfferProps[];
	nearPlacesRequestStatus: RequestStatus;
	error: string | null;
}

export type FavoritesData = {
	offers: OfferProps[];
	error: string | null;
	offersRequestStatus: RequestStatus;
}
