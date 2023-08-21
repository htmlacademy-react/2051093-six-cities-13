import { Route, Routes } from 'react-router-dom';
import { MainPage } from '../pages/main/main';
import { AppRoute, AuthorizationStatus } from '../consts';
import { LoginPage } from '../pages/login/login';
import { FavoritesPage } from '../pages/favorites/favorites';
import { OfferPage } from '../pages/offer/offer';
import { NotFoundPage } from '../pages/not-found-page';
import PrivateRoute from './private-route';
import { HelmetProvider } from 'react-helmet-async';
import { ReviewProps } from '../types/review';
import { useAppDispatch, useAppSelector } from '../hooks';
import { Preload } from './preload';
import { useEffect } from 'react';
import { checkAuthAction, fetchOffers } from '../store/api-action';
import HistoryRouter from './history-route/history-route';
import browserHistory from '../browser-history';

type AppProps = {
	reviews: ReviewProps[];
}

export const App = ({reviews}: AppProps): JSX.Element => {
	const authorization = useAppSelector((state) => state.authorization);
	const isDataLoading = useAppSelector((state) => state.isDataLoading);
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(checkAuthAction());
		dispatch(fetchOffers());
	}, [dispatch]);

	if (authorization === AuthorizationStatus.Unknown || isDataLoading) {
		return <Preload />;
	}

	return (
		<HelmetProvider>
			<HistoryRouter history={browserHistory}>
				<Routes>
					<Route
						path={AppRoute.Main}
						element={<MainPage />}
					/>
					<Route
						path={AppRoute.Login}
						element={<LoginPage />}
					/>
					<Route
						path={AppRoute.Favorites}
						element={
							<PrivateRoute >
								<FavoritesPage />
							</PrivateRoute>
						}
					/>
					<Route
						path={AppRoute.Offer}
						element={<OfferPage reviews={reviews} />}
					/>
					<Route
						path='*'
						element={<NotFoundPage/>}
					/>
				</Routes>
			</HistoryRouter>
		</HelmetProvider>
	);
};
