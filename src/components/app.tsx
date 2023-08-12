import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MainPage } from '../pages/main/main';
import { AppRoute, AuthorizationStatus } from '../consts';
import { LoginPage } from '../pages/login/login';
import { FavoritesPage } from '../pages/favorites/favorites';
import { OfferPage } from '../pages/offer/offer';
import { NotFoundPage } from '../pages/not-found-page';
import PrivateRoute from './private-route';
import { HelmetProvider } from 'react-helmet-async';
import { ReviewProps } from '../types/review';
import { useAppSelector } from '../hooks';
import { Preload } from './preload';

type AppProps = {
	reviews: ReviewProps[];
}

export const App = ({reviews}: AppProps): JSX.Element => {
	const isDataLoading = useAppSelector((state) => state.isDataLoading);
	if (isDataLoading) {
		return <Preload />;
	}

	return (
		<HelmetProvider>
			<BrowserRouter>
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
							<PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
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
			</BrowserRouter>
		</HelmetProvider>
	);
};
