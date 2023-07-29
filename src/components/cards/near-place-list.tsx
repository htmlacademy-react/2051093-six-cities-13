import { OfferProps } from '../../types/offer-types';
import { PlaceCard } from './place-card';

type NearPlacesProps = {
	offers: OfferProps[];
};

export const NearPlacesOffers = ({offers}: NearPlacesProps) => (
	<div className="near-places__list places__list">
		{offers.map((offer) => (<PlaceCard offer={offer} key={offer.id} className={'near-places__card place-card'}/>)).slice(0, 3)}
	</div>
);
