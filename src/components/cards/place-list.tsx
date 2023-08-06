import { useAppSelector } from '../../hooks';
import { OffersMap } from '../map/map';
import { OffersSort } from '../offers-sort';
import { PlaceCard } from './place-card';

type PlaceListProps = {
	handleMouseEnter: (offerId: string) => void;
	handleMouseLeave: () => void;
	selectedOfferId: string | null;
}

export const PlaceList = ({handleMouseEnter, handleMouseLeave,selectedOfferId}:PlaceListProps) => {
	const selectedCity = useAppSelector((state) => state.city);
	const offersByCity = useAppSelector((state) => state.places);

	return (
		<div className="cities__places-container container">
			<section className="cities__places places">
				<h2 className="visually-hidden">Places</h2>
				<b className="places__found">{offersByCity.length} places to stay in {selectedCity}</b>
				<OffersSort />
				<div className="cities__places-list places__list tabs__content">
					{offersByCity.map((offer) =>
						(<PlaceCard offer={offer} key={offer.id} className={'cities__card place-card'} onMouseEnter={() => handleMouseEnter(offer.id)} onMouseLeave={handleMouseLeave}/>)
					)}
				</div>
			</section>
			<div className="cities__right-section">
				<OffersMap city={offersByCity[0]} points={offersByCity} selectedPointId={selectedOfferId} className={'cities__map map'} />
			</div>
		</div>
	);
};
