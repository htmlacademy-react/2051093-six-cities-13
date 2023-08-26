import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../consts';
import { userProcess } from './user-data/user-data';
import { offersData } from './offers-data/offers-data';
import { offerData } from './offer-data/offer-data';
import { reviewsData } from './reviews-data/reviews-data';
import { nearPlacesData } from './near-place-data/near-place-data';
import { favoritesData } from './favorites-data/favorites-data';

export const rootReducer = combineReducers({
	[NameSpace.User]: userProcess.reducer,
	[NameSpace.Offers]: offersData.reducer,
	[NameSpace.Offer]: offerData.reducer,
	[NameSpace.Comments]: reviewsData.reducer,
	[NameSpace.NearPlaces]: nearPlacesData.reducer,
	[NameSpace.Favorites]: favoritesData.reducer
});
