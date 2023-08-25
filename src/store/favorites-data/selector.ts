import { NameSpace, RequestStatus } from '../../consts';
import { OfferProps } from '../../types/offer-types';
import { State } from '../../types/state';


export const getFavorites = (state: State): OfferProps[] => state[NameSpace.Favorites].offers;

export const getFavoritesFetchingStatus = (state: State):typeof RequestStatus[keyof typeof RequestStatus] => state[NameSpace.Favorites].offersRequestStatus;
