import { SortingType, sortCallbackMap } from '../../consts';
import { useAppSelector } from '../../hooks';
import { getCity, getOffers, getSort } from '../../store/offers-data/selectors';
import { OfferProps } from '../../types/offer-types';
import { OffersMap } from '../map/map';
import { OffersSort } from '../offers-sort';
import { PlaceCard } from './place-card';

type PlaceListProps = {
	handleMouseEnter: (id: string) => void;
	handleMouseLeave: () => void;
	selectedOfferId: string | null;
}

export const PlaceList = ({handleMouseEnter, handleMouseLeave, selectedOfferId}:PlaceListProps) => {
	const selectedCity = useAppSelector(getCity);
	const sort = useAppSelector(getSort);
	const offers = useAppSelector(getOffers);

	const offersByCity = offers.filter((place) => place.city.name === selectedCity);
	const sortOffers = (items: OfferProps[]) => {
		switch (sort) {
			case SortingType.PriceLow :
				return sortCallbackMap.PriceLow(items);
				break;
			case SortingType.PriceHigh :
				return sortCallbackMap.PriceHigh(items);
				break;
			case SortingType.Rated :
				return sortCallbackMap.Rated(items);
				break;
			default:
				return sortCallbackMap.Popular(items);
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
