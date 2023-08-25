import { OfferProps } from '../../types/offer-types';
import { PlaceCard } from './place-card';

type NearPlacesProps = {
	places: OfferProps[];
}

export const NearPlacesOffers = ({places}: NearPlacesProps) => (
	<div className="near-places__list places__list">
		{places.map((offer) =>
			(<PlaceCard offer={offer} key={offer.id} className={'near-places__card place-card'} />)
		)}
	</div>
);
