import { useAppSelector } from '../../hooks';
import { PlaceCard } from './place-card';

export const NearPlacesOffers = () => {
	const selectedCity = useAppSelector((state) => state.city);
	const offers = useAppSelector((state) => state.offers);
	const offersByCity = offers.filter((offer) => offer.city.name === selectedCity);

	return (
		<div className="near-places__list places__list">
			{offersByCity.map((offer) =>
				(<PlaceCard offer={offer} key={offer.id} className={'near-places__card place-card'} />)
			).slice(0,3)}
		</div>
	);
};
