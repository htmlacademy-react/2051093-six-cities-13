import { NameSpace } from '../../consts';
import { State } from '../../types/state';


export const getFavorites = (state: State) => state[NameSpace.Favorites].offers;

export const getFavoritesFetchingStatus = (state: State) => state[NameSpace.Favorites].offersRequestStatus;
