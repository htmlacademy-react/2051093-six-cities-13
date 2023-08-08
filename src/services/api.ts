import axios, {AxiosInstance} from 'axios';
import { getToken } from './token';
import { Api, TIMEOUT } from '../consts';

export const createApi = (): AxiosInstance => {
	const api = axios.create({
		baseURL: Api.baseURL,
		timeout: TIMEOUT,
	});

	api.interceptors.request.use(
		(config) => {
			const token = getToken();
			if (token && config.headers) {
				config.headers['X-Token'] = token;
			}
			return config;
		},
	);

	return api;
};
