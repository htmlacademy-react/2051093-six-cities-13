import { useAppSelector } from '../../hooks';
import { PlaceCard } from './place-card';

export const NearPlacesOffers = () => {
	const selectedCity = useAppSelector((state) => state.city);
	const places = useAppSelector((state) => state.places);
	const offersByCity = places.filter((place) => place.city.name === selectedCity);

	return (
		<div className="near-places__list places__list">
			{offersByCity.map((offer) =>
				(<PlaceCard offer={offer} key={offer.id} className={'near-places__card place-card'} />)
			).slice(0,3)}
		</div>
	);
};
