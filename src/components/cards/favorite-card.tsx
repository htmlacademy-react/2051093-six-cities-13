import { Link } from 'react-router-dom';
import { OfferProps } from '../../types/offer-types';
import { FavoriteButton } from '../favorite-button';


export const FavoritesCard = (offer: OfferProps) => {
	const href = `/offer/${offer.id}`;

	return (
		<article className="favorites__card place-card">
			{offer.isPremium && (
				<div className="place-card__mark">
					<span>Premium</span>
				</div>)}
			<div className="favorites__image-wrapper place-card__image-wrapper">
				<Link to={href}>
					<img
						className="place-card__image"
						src={offer.previewImage}
						width={150}
						height={110}
						alt="Place image"
					/>
				</Link>
			</div>
			<div className="favorites__card-info place-card__info">
				<div className="place-card__price-wrapper">
					<div className="place-card__price">
						<b className="place-card__price-value">€{offer.price}</b>
						<span className="place-card__price-text">
						/&nbsp;night
						</span>
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
				<p className="place-card__type">{offer.type}</p>
			</div>
		</article>
	);
};
