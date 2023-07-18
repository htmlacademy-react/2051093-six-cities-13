import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MainPage } from '../pages/main/main';
import { AppRoute, AuthorizationStatus } from '../consts';
import { LoginPage } from '../pages/login/login';
import { FavoritesPage } from '../pages/favorites/favorites';
import { OfferPage } from '../pages/offer/offer';
import { NotFoundPage } from '../pages/not-found-page';
import PrivateRoute from './private-route';
import { HelmetProvider } from 'react-helmet-async';

type AppProps = {
	placesCount: number;
}

export const App = ({placesCount}: AppProps): JSX.Element => (
	<HelmetProvider>
		<BrowserRouter>
			<Routes>
				<Route
					path={AppRoute.Main}
					element={<MainPage placesCount={placesCount} />}
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
