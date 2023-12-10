import { AuthorizationStatus, RequestStatus } from '../consts';
import { store } from '../store';
import { OfferProps } from './offer-types';
import { ReviewProps } from './review';
import { UserData } from './user-data';

export type State = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export type UserProcess = {
  authorization: AuthorizationStatus;
	user: UserData;
};

export type OffersData = {
	offers: OfferProps[];
	sort: string;
	city: string;
	offersRequestStatus: RequestStatus;
}

export type OfferData = {
	offer: OfferProps | null;
	offerRequestStatus: RequestStatus;
}

export type ReviewsData = {
	reviews: ReviewProps[];
	reviewsRequestStatus: RequestStatus;
	reviewSendingStatus: RequestStatus;

}

export type NearPlacesData = {
	places: OfferProps[];
	nearPlacesRequestStatus: RequestStatus;

}

export type FavoritesData = {
	offers: OfferProps[];
	offersRequestStatus: RequestStatus;
	offersCount: number;
}
