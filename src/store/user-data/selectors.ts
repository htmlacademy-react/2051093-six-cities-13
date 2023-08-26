import { NameSpace } from '../../consts';
import { State } from '../../types/state';

export const getAuthorizationStatus = (state: State) => state[NameSpace.User].authorization;

export const getUserInfo = (state: State) => state[NameSpace.User].user;
