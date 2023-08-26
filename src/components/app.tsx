import { Route, Routes } from 'react-router-dom';
import { MainPage } from '../pages/main/main';
import { AppRoute } from '../consts';
import { LoginPage } from '../pages/login/login';
import { FavoritesPage } from '../pages/favorites/favorites';
import { OfferPage } from '../pages/offer/offer';
import { NotFoundPage } from '../pages/not-found-page';
import PrivateRoute from './private-route';
import { HelmetProvider } from 'react-helmet-async';
import { useAppDispatch } from '../hooks';
import { useEffect } from 'react';
import { checkAuthAction, fetchOffers } from '../store/api-action';
import HistoryRouter from './history-route/history-route';
import browserHistory from '../browser-history';


export const App = () => {
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(checkAuthAction());
		dispatch(fetchOffers());
	}, [dispatch]);

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
							<PrivateRoute>
								<FavoritesPage />
							</PrivateRoute>
						}
					/>
					<Route
						path={`${AppRoute.Offer}/:id`}
						element={<OfferPage/>}
					/>
					<Route
						path={AppRoute.NotFound}
						element={<NotFoundPage/>}
					/>
				</Routes>
			</HistoryRouter>
		</HelmetProvider>
	);
};
