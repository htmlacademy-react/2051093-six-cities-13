import { NameSpace, RequestStatus } from '../../consts';
import { OfferProps } from '../../types/offer-types';
import { State } from '../../types/state';

export const getNearPlaces = (state: State): OfferProps[] => state[NameSpace.NearPlaces].places;
export const getNearPlacesRequestStatus = (state: State): typeof RequestStatus[keyof typeof RequestStatus] => state[NameSpace.NearPlaces].nearPlacesRequestStatus;
