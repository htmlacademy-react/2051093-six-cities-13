import { Link } from 'react-router-dom';
import { useAppSelector } from '../../hooks';
import { getFavorites } from '../../store/favorites-data/selector';
import { OfferProps } from '../../types/offer-types';
import { PlaceCard } from './place-card';

export const FavoriteList = () => {
	const offers = useAppSelector(getFavorites);
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

	return (
		<ul className="favorites__list">
			{cities.map((city) => (
				<li className="favorites__locations-items" key={city}>
					<div className="favorites__locations locations locations--current">
						<div className="locations__item">
							<Link className="locations__item-link" to={`../#${city}`}>
								<span>{city}</span>
							</Link>
						</div>
					</div>
					<div className="favorites__places">
						{offers.filter((offer) => offer.city.name === city)
							.map((offer) => <PlaceCard offer={offer} size={'small'} {...offer} key={offer.id} className={'favorites'}/>)}
					</div>
				</li>
			))}
		</ul>
	);
};
