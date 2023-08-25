import axios, {AxiosError, AxiosInstance, AxiosResponse} from 'axios';
import { getToken } from './token';
import { Api, TIMEOUT } from '../consts';
import {toast} from 'react-toastify';
import { StatusCodes } from 'http-status-codes';

const StatusCodeMapping: Record<number, boolean> = {
	[StatusCodes.BAD_REQUEST]: true,
	[StatusCodes.UNAUTHORIZED]: true,
	[StatusCodes.NOT_FOUND]: true,
	[StatusCodes.CONFLICT]: true,
};

const shouldDisplayError = (response: AxiosResponse) => !!StatusCodeMapping[response.status];

type ErrorMessage = {
  type: string;
  message: string;
}

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

	api.interceptors.response.use(
		(response) => response,
		(error: AxiosError<ErrorMessage>) => {
			if (error.response && shouldDisplayError(error.response)) {
				const detailMessage = (error.response.data);

				toast.warn(detailMessage.message);
			}

			throw error;
		}
	);

	return api;
};
