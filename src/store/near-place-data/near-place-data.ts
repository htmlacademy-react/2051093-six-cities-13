
import { createSlice } from '@reduxjs/toolkit';
import { NameSpace, RequestStatus } from '../../consts';
import { NearPlacesData } from '../../types/state';
import { fetchNearPlaces } from '../api-action';

const initialState: NearPlacesData = {
	nearPlacesRequestStatus: RequestStatus.Idle,
	places: [],
	error: null,
};

export const nearPlacesData = createSlice({
	name: NameSpace.NearPlaces,
	initialState,
	reducers: {},
	extraReducers(builder) {
		builder
			.addCase(fetchNearPlaces.pending, (state) => {
				state.nearPlacesRequestStatus = RequestStatus.Pending;
			})
			.addCase(fetchNearPlaces.fulfilled, (state, action) => {
				state.nearPlacesRequestStatus = RequestStatus.Successed;
				state.places = action.payload;
			})
			.addCase(fetchNearPlaces.rejected, (state) => {
				state.nearPlacesRequestStatus = RequestStatus.Failed;
			});
	},
});
