import { Helmet } from 'react-helmet-async';
import { Footer } from '../../components/footer';
import { Header } from '../../components/header';
import { FavoriteList } from '../../components/cards/favorite-list';
import { useAppSelector } from '../../hooks';

export const FavoritesPage = () => {
	const favoriteList = useAppSelector((state) => state.places);
	const isEmptyList = !favoriteList.length;

	return (
		<div className="page">
			<Helmet>
				<title>6 cities: favorites</title>
			</Helmet>
			<Header isAuthorized />
			<main className="page__main page__main--favorites">
				<div className="page__favorites-container container">
					{isEmptyList ? (
						<section className="favorites favorites--empty">
							<h1 className="visually-hidden">Favorites (empty)</h1>
							<div className="favorites__status-wrapper">
								<b className="favorites__status">Nothing yet saved.</b>
								<p className="favorites__status-description">Save properties to narrow down search or plan your future trips.</p>
							</div>
						</section>
					) : (
						<section className="favorites">
							<h1 className="favorites__title">Saved listing</h1>
							<FavoriteList />
						</section>
					)}
				</div>
			</main>
			<Footer />
		</div>
	);
};
