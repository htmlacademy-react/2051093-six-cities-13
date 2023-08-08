import { Api } from '../consts';

export type Token = string;

export const getToken = (): Token => {
	const token = localStorage.getItem(Api.authTokenKey);
	return token ?? '';
};

export const saveToken = (token: Token): void => {
	localStorage.setItem(Api.authTokenKey, token);
};

export const dropToken = (): void => {
	localStorage.removeItem(Api.authTokenKey);
};
