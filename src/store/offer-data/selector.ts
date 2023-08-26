import { NameSpace } from '../../consts';
import { State } from '../../types/state';


export const getOfferRequestStatus = (state: State) => state[NameSpace.Offer].offerRequestStatus;
export const getOffer = (state: State) => state[NameSpace.Offer].offer;
