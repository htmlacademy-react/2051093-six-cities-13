import { OfferProps } from '../../types/offer-types';
import { Link } from 'react-router-dom';
import { MouseEventHandler } from 'react';
import { AppRoute, capitalize } from '../../consts';
import { FavoriteButton } from '../favorite-button';


type CardSize = 'small' | 'big'

type PlaceCardProps = {
	offer: OfferProps;
	className: string;
	onMouseEnter?: MouseEventHandler<HTMLElement> | undefined;
	onMouseLeave?: MouseEventHandler<HTMLElement> | undefined;
	size: CardSize;
};

const sizeValue: Record<CardSize, {width: string; height: string}> = {
	small: {width: '150', height: '110'},
	big: {width: '260', height: '200'}
};

export const PlaceCard = ({offer, className, onMouseEnter, onMouseLeave, size}: PlaceCardProps) => {
	const href = `${AppRoute.Offer}/${offer.id}`;

	return (
		<article
			className={`${className}__card place-card`}
			onMouseEnter={onMouseEnter}
			onMouseLeave={onMouseLeave}
		>
			{offer.isPremium && (
				<div className="place-card__mark">
					<span>Premium</span>
				</div>)}
			<div className={`${className}__image-wrapper place-card__image-wrapper`}>
				<Link to={href}>
					<img
						className="place-card__image"
						src={offer.previewImage}
						{...sizeValue[size]}
						alt="Place image"
					/>
				</Link>
			</div>
			<div className={`place-card__info ${className}__info`}>
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

