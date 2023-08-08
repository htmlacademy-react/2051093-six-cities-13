import { SortingType, sortCallbackMap } from '../../consts';
import { useAppSelector } from '../../hooks';
import { OfferProps } from '../../types/offer-types';
import { OffersMap } from '../map/map';
import { OffersSort } from '../offers-sort';
import { PlaceCard } from './place-card';

type PlaceListProps = {
	handleMouseEnter: (offerId: string) => void;
	handleMouseLeave: () => void;
	selectedOfferId: string | null;
}

export const PlaceList = ({handleMouseEnter, handleMouseLeave, selectedOfferId}:PlaceListProps) => {
	const selectedCity = useAppSelector((state) => state.city);
	const sort = useAppSelector((state) => state.sort);
	const places = useAppSelector((state) => state.places);

	const offersByCity = places.filter((place) => place.city.name === selectedCity);
	const sortOffers = (offers: OfferProps[]) => {
		switch (sort) {
			case SortingType.PriceLow :
				return sortCallbackMap.PriceLow(offers);
				break;
			case SortingType.PriceHigh :
				return sortCallbackMap.PriceHigh(offers);
				break;
			case SortingType.Rated :
				return sortCallbackMap.Rated(offers);
				break;
			default:
				return sortCallbackMap.Popular(offers);
		}
	};

	const sortedOffers = sortOffers(offersByCity);

	return (
		<div className="cities__places-container container">
			<section className="cities__places places">
				<h2 className="visually-hidden">Places</h2>
				<b className="places__found">{offersByCity.length} places to stay in {selectedCity}</b>
				<OffersSort />
				<div className="cities__places-list places__list tabs__content">
					{sortedOffers.map((offer) => (
						<PlaceCard
							offer={offer}
							key={offer.id}
							className={'cities__card place-card'}
							onMouseEnter={() => handleMouseEnter(offer.id)}
							onMouseLeave={handleMouseLeave}
						/>
					))}
				</div>
			</section>
			<div className="cities__right-section">
				<OffersMap
					city={offersByCity[0]}
					points={offersByCity}
					selectedPointId={selectedOfferId}
					className={'cities__map map'}
				/>
			</div>
		</div>
	);
};
