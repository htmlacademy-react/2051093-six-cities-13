
import { NameSpace, RequestStatus } from '../../consts';
import { OfferProps } from '../../types/offer-types';
import { State } from '../../types/state';

export const getOffers = (state: State): OfferProps[] => state[NameSpace.Offers].offers;

export const getCity = (state: State): string => state[NameSpace.Offers].city;

export const getSort = (state: State) => state[NameSpace.Offers].sort;

export const getOffersRequestStatus = (state: State): RequestStatus => state[NameSpace.Offers].offersRequestStatus;
