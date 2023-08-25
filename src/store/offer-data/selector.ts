import { NameSpace, RequestStatus } from '../../consts';
import { OfferProps } from '../../types/offer-types';
import { State } from '../../types/state';


export const getOfferRequestStatus = (state: State): RequestStatus => state[NameSpace.Offer].offerRequestStatus;
export const getOffer = (state: State): OfferProps => state[NameSpace.Offer].offer;
