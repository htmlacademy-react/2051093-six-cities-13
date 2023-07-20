import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MainPage } from '../pages/main/main';
import { AppRoute, AuthorizationStatus } from '../consts';
import { LoginPage } from '../pages/login/login';
import { FavoritesPage } from '../pages/favorites/favorites';
import { OfferPage } from '../pages/offer/offer';
import { NotFoundPage } from '../pages/not-found-page';
import PrivateRoute from './private-route';
import { HelmetProvider } from 'react-helmet-async';
import { PlaceCardProps } from '../types/offer-types';

type AppProps = {
	placesCount: number;
	offers: PlaceCardProps[];
}

export const App = ({placesCount, offers}: AppProps): JSX.Element => (
	<HelmetProvider>
		<BrowserRouter>
			<Routes>
				<Route
					path={AppRoute.Main}
					element={<MainPage placesCount={placesCount} offers={offers} />}
				/>
				<Route
					path={AppRoute.Login}
					element={<LoginPage />}
				/>
				<Route
					path={AppRoute.Favorites}
					element={
						<PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}>
							<FavoritesPage />
						</PrivateRoute>
					}
				/>
				<Route
					path={AppRoute.Offer}
					element={<OfferPage />}
				/>
				<Route
					path='*'
					element={<NotFoundPage/>}
				/>
			</Routes>
		</BrowserRouter>
	</HelmetProvider>
);
