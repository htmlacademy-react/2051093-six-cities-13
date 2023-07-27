import { Helmet } from 'react-helmet-async';
import { Header } from '../../components/header';
import { PlaceCard } from '../../components/cards/place-card';
import { OfferProps } from '../../types/offer-types';
import classNames from 'classnames';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { OffersMap } from '../../components/map/map';

type MainPageProps = {
	offers: OfferProps[];
};

export const MainPage = ({offers}: MainPageProps): JSX.Element => {
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

	const [selectedCity, setCity] = useState(cities[0]);
	const offerElements = offersByCity[selectedCity].map((offer) => (<PlaceCard {...offer} key={offer.id}/>));

	return (
		<div className="page page--gray page--main">
			<Helmet>
				<title>6 cities</title>
			</Helmet>
			<Header />
			<main className="page__main page__main--index">
				<h1 className="visually-hidden">Cities</h1>
				<div className="tabs">
					<section className="locations container">
						<ul className="locations__list tabs__list">
							{cities.map((city) => (
								<li className="locations__item" key={city}>
									<Link className={classNames(
										'locations__item-link',
										'tabs__item',
										{'tabs__item--active': city === selectedCity})}
									to={`#${city.toLowerCase()}`}
									onClick={() => setCity(city)}
									>
										<span>{city}</span>
									</Link>
								</li>
							))}
						</ul>
					</section>
				</div>
				<div className="cities">
					<div className="cities__places-container container">
						<section className="cities__places places">
							<h2 className="visually-hidden">Places</h2>
							<b className="places__found">{offersByCity[selectedCity].length} places to stay in {selectedCity}</b>
							<form className="places__sorting" action="#" method="get">
								<span className="places__sorting-caption">Sort by&nbsp;</span>
								<span className="places__sorting-type" tabIndex={0}>
									Popular
									<svg className="places__sorting-arrow" width={7} height={4}>
										<use xlinkHref="#icon-arrow-select" />
									</svg>
								</span>
								<ul className="places__options places__options--custom places__options--opened">
									<li className="places__option places__option--active" tabIndex={0}>
										Popular
									</li>
									<li className="places__option" tabIndex={0}>
										Price: low to high
									</li>
									<li className="places__option" tabIndex={0}>
										Price: high to low
									</li>
									<li className="places__option" tabIndex={0}>
										Top rated first
									</li>
								</ul>
							</form>
							<div className="cities__places-list places__list tabs__content">
								{offerElements}
							</div>
						</section>
						<div className="cities__right-section">
							<OffersMap city={offersByCity[selectedCity][0]} points={offersByCity[selectedCity]} selectedPointId={''}/>
						</div>
					</div>
				</div>
			</main>
		</div>
	);
};

