import { Helmet } from 'react-helmet-async';
import { Header } from '../../components/header';
import { CityList } from '../../components/city-list';
import { PlaceList } from '../../components/cards/place-list';
import { useState } from 'react';
import { useAppSelector } from '../../hooks';
import classNames from 'classnames';
import { EmptyList } from '../../components/cards/empty-list';
import { RequestStatus } from '../../consts';
import { Preload } from '../../components/preload';
import { getOffers, getOffersRequestStatus } from '../../store/offers-data/selectors';

export const MainPage = () => {
	const placeList = useAppSelector(getOffers);
	const isDataLoading = useAppSelector(getOffersRequestStatus);
	const isEmptyList = !placeList.length;
	const mainPageClass = classNames(
		'page__main',
		'page__main--index',
		{'page__main--index-empty' : isEmptyList}
	);

	const [id, setId] = useState<null | string>(null);
	const handleMouseEnter = (offerId: string): void => {
		setId(offerId);
	};
	const handleMouseLeave = (): void => {
		setId(null);
	};

	return (
		<>
			{isDataLoading === RequestStatus.Pending && <Preload/>}
			{isDataLoading === RequestStatus.Successed && placeList && (
				<div className="page page--gray page--main">
					<Helmet>
						<title>6 cities</title>
					</Helmet>
					<Header />
					<main className={mainPageClass}>
						<h1 className="visually-hidden">Cities</h1>
						<div className="tabs">
							<section className="locations container">
								<CityList />
							</section>
						</div>
						<div className="cities">
							{isEmptyList ? (
								<EmptyList />
							) : (
								<PlaceList
									handleMouseEnter={handleMouseEnter}
									handleMouseLeave={handleMouseLeave}
									selectedOfferId={id}
								/>
							)}
						</div>
					</main>
				</div>
			)}
		</>
	);
};
