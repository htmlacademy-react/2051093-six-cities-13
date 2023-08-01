import { Helmet } from 'react-helmet-async';
import { Header } from '../../components/header';
import { CityList } from '../../components/city-list';
import { PlaceList } from '../../components/cards/place-list';
import { useState } from 'react';

export const MainPage = () => {
	const [id, setId] = useState<null | string>(null);
	const handleMouseEnter = (offerId: string): void => {
		setId(offerId);
	};

	const handleMouseLeave = (): void => {
		setId(null);
	};

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
						<CityList />
					</section>
				</div>
				<div className="cities">
					<PlaceList handleMouseEnter={handleMouseEnter} handleMouseLeave={handleMouseLeave} selectedOfferId={id}/>
				</div>
			</main>
		</div>
	);
};
