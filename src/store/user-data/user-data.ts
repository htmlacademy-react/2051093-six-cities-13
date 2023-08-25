import {createSlice} from '@reduxjs/toolkit';
import {NameSpace, AuthorizationStatus} from '../../consts';
import {UserProcess} from '../../types/state';
import { checkAuthAction, loginAction, logoutAction } from '../api-action';

const initialState: UserProcess = {
	authorization: AuthorizationStatus.Unknown,
	error: null,
};

export const userProcess = createSlice({
	name: NameSpace.User,
	initialState,
	reducers: {},
	extraReducers(builder) {
		builder
			.addCase(checkAuthAction.fulfilled, (state) => {
				state.authorization = AuthorizationStatus.Auth;
			})
			.addCase(checkAuthAction.rejected, (state) => {
				state.authorization = AuthorizationStatus.NoAuth;
			})
			.addCase(loginAction.fulfilled, (state) => {
				state.authorization = AuthorizationStatus.Auth;
			})
			.addCase(loginAction.rejected, (state) => {
				state.authorization = AuthorizationStatus.NoAuth;
			})
			.addCase(logoutAction.fulfilled, (state) => {
				state.authorization = AuthorizationStatus.NoAuth;
			});
	}
});
