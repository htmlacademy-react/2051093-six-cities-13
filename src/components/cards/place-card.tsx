import { OfferProps } from '../../types/offer-types';
import { Link } from 'react-router-dom';
import { MouseEventHandler } from 'react';
import { AppRoute, capitalize } from '../../consts';
import { FavoriteButton } from '../favorite-button';

type PlaceCardProps = {
	offer: OfferProps;
	className?: string | undefined;
	onMouseEnter?: MouseEventHandler<HTMLElement> | undefined;
	onMouseLeave?: MouseEventHandler<HTMLElement> | undefined;
};

export const PlaceCard = ({offer, className, onMouseEnter, onMouseLeave}: PlaceCardProps) => {
	const href = `${AppRoute.Offer}/${offer.id}`;

	return (
		<article className={className} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
			{offer.isPremium && (
				<div className="place-card__mark">
					<span>Premium</span>
				</div>)}
			<div className="cities__image-wrapper place-card__image-wrapper">
				<Link to={href}>
					<img
						className="place-card__image"
						src={offer.previewImage}
						width={260}
						height={200}
						alt="Place image"
					/>
				</Link>
			</div>
			<div className="place-card__info">
				<div className="place-card__price-wrapper">
					<div className="place-card__price">
						<b className="place-card__price-value">€{offer.price}</b>
						<span className="place-card__price-text">/&nbsp;night</span>
					</div>
					<FavoriteButton id={offer.id} isFavorite={offer.isFavorite} className={'place-card'} size={'small'} />
				</div>
				<div className="place-card__rating rating">
					<div className="place-card__stars rating__stars">
						<span style={{ width: `${offer.rating * 20}%` }} />
						<span className="visually-hidden">Rating</span>
					</div>
				</div>
				<h2 className="place-card__name">
					<Link to={href}>{offer.title}</Link>
				</h2>
				<p className="place-card__type">{capitalize(offer.type)}</p>
			</div>
		</article>
	);
};

