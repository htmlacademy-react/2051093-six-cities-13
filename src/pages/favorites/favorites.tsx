import { Helmet } from 'react-helmet-async';
import { Footer } from '../../components/footer';
import { Header } from '../../components/header';
import { OfferProps } from '../../types/offer-types';
import { FavoritesCard } from '../../components/cards/favorite-card';
import { Link } from 'react-router-dom';
import { CITIES } from '../../consts';

type FaforitesPageProps = {
	offers : OfferProps[];
}

export const FavoritesPage = ({offers}:FaforitesPageProps) => (
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
						{CITIES.map((city) => (
							<li className="favorites__locations-items" key={city}>
								<div className="favorites__locations locations locations--current">
									<div className="locations__item">
										<Link className="locations__item-link" to="#">
											<span>{city}</span>
										</Link>
									</div>
								</div>
								<div className="favorites__places">
									{offers.filter((offer) => offer.city.name === city)
										.filter((offer) => offer.isFavorite === true)
										.map((offer) => <FavoritesCard {...offer} key={offer.id} />)}
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

