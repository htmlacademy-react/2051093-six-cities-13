import { NameSpace } from '../../consts';
import { State } from '../../types/state';

export const getNearPlaces = (state: State) => state[NameSpace.NearPlaces].places;
export const getNearPlacesRequestStatus = (state: State) => state[NameSpace.NearPlaces].nearPlacesRequestStatus;
