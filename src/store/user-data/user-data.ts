import {createSlice} from '@reduxjs/toolkit';
import {NameSpace, AuthorizationStatus} from '../../consts';
import {UserProcess} from '../../types/state';
import { checkAuthAction, loginAction, logoutAction } from '../api-action';
import { UserData } from '../../types/user-data';

const initialState: UserProcess = {
	authorization: AuthorizationStatus.Unknown,
	user: {} as UserData
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
			.addCase(loginAction.fulfilled, (state, action) => {
				state.authorization = AuthorizationStatus.Auth;
				state.user = action.payload;
			})
			.addCase(loginAction.rejected, (state) => {
				state.authorization = AuthorizationStatus.NoAuth;
			})
			.addCase(logoutAction.fulfilled, (state) => {
				state.authorization = AuthorizationStatus.NoAuth;
			});
	}
});
