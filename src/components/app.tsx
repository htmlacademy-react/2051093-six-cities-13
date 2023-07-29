import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MainPage } from '../pages/main/main';
import { AppRoute, AuthorizationStatus } from '../consts';
import { LoginPage } from '../pages/login/login';
import { FavoritesPage } from '../pages/favorites/favorites';
import { OfferPage } from '../pages/offer/offer';
import { NotFoundPage } from '../pages/not-found-page';
import PrivateRoute from './private-route';
import { HelmetProvider } from 'react-helmet-async';
import { FullOfferProps, OfferProps } from '../types/offer-types';
import { ReviewProps } from '../types/review';

type AppProps = {
	offers: OfferProps[];
	fullOffers: FullOfferProps[];
	reviews: ReviewProps[];
}

export const App = ({offers, fullOffers, reviews}: AppProps): JSX.Element => (
	<HelmetProvider>
		<BrowserRouter>
			<Routes>
				<Route
					path={AppRoute.Main}
					element={<MainPage offers={offers} />}
				/>
				<Route
					path={AppRoute.Login}
					element={<LoginPage />}
				/>
				<Route
					path={AppRoute.Favorites}
					element={
						<PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
							<FavoritesPage offers={offers}/>
						</PrivateRoute>
					}
				/>
				<Route
					path={AppRoute.Offer}
					element={<OfferPage fullOffers={fullOffers} reviews={reviews} offers={offers}/>}
				/>
				<Route
					path='*'
					element={<NotFoundPage/>}
				/>
			</Routes>
		</BrowserRouter>
	</HelmetProvider>
);
