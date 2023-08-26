
import { NameSpace } from '../../consts';
import { State } from '../../types/state';

export const getOffers = (state: State) => state[NameSpace.Offers].offers;

export const getCity = (state: State) => state[NameSpace.Offers].city;

export const getSort = (state: State) => state[NameSpace.Offers].sort;

export const getOffersRequestStatus = (state: State) => state[NameSpace.Offers].offersRequestStatus;
