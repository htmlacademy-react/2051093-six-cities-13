import { Helmet } from 'react-helmet-async';
import { Footer } from '../../components/footer';
import { Header } from '../../components/header';
import { OfferProps } from '../../types/offer-types';
import { FavoritesCard } from '../../components/cards/favorite-card';
import { Link } from 'react-router-dom';

type FaforitesPageProps = {
	offers : OfferProps[];
}

export const FavoritesPage = ({offers}:FaforitesPageProps) => {
	const offersByCity: Record<string, OfferProps[]> = {};

	for (const offer of offers) {
		const city = offer.city.name;
		if (city in offersByCity) {
			offersByCity[city].push(offer);
		} else {
			offersByCity[city] = [offer];
		}
	}

	const cities = Object.keys(offersByCity);
	const filtredOffers = offers.filter((offer) => offer.isFavorite === true);
	const offerElements = filtredOffers.map((offer) => <FavoritesCard {...offer} key={offer.id} />);

	return (
		<div className="page">
			<Helmet>
				<title>6 cities: favorites</title>
			</Helmet>
			<Header isAuthorized />
			<main className="page__main page__main--favorites">
				<div className="page__favorites-container container">
					<section className="favorites">
						<h1 className="favorites__title">Saved listing</h1>
						<ul className="favorites__list">
							{cities.map((city) => (
								<li className="favorites__locations-items" key={city}>
									<div className="favorites__locations locations locations--current">
										<div className="locations__item">
											<Link className="locations__item-link" to="#">
												<span>{city}</span>
											</Link>
										</div>
									</div>
									<div className="favorites__places">
										{offerElements}
									</div>
								</li>
							))}
						</ul>
					</section>
				</div>
			</main>
			<Footer />
		</div>
	);
};
