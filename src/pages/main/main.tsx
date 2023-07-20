import { Helmet } from 'react-helmet-async';
import { Header } from '../../components/header';
import { PlaceCard } from '../../components/place-card';
import { PlaceCardProps } from '../../types/offer-types';
import { CITIES } from '../../consts';
import classNames from 'classnames';

type MainPageProps = {
	placesCount?: number;
	offers: PlaceCardProps[];
};

export const MainPage = ({ placesCount, offers}: MainPageProps): JSX.Element => (
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
						{CITIES.map((city) => (
							<li className="locations__item" key={city}>
								<a className={classNames('locations__item-link', 'tabs__item', {'tabs__item--active': city === 'Amsterdam'})} href='#'>
									<span>{city}</span>
								</a>
							</li>
						))}
					</ul>
				</section>
			</div>
			<div className="cities">
				<div className="cities__places-container container">
					<section className="cities__places places">
						<h2 className="visually-hidden">Places</h2>
						<b className="places__found">{placesCount} places to stay in Amsterdam</b>
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
							{offers.map((offer) => (
								<PlaceCard {...offer} key={offer.id}/>)
							)}
						</div>
					</section>
					<div className="cities__right-section">
						<section className="cities__map map" />
					</div>
				</div>
			</div>
		</main>
	</div>
);
