import classNames from 'classnames';
import { OfferProps } from '../../types/offer-types';
import { Link } from 'react-router-dom';
import { MouseEventHandler } from 'react';

type PlaceCardProps = {
	offer: OfferProps;
	className?: string | undefined;
	onMouseEnter?: MouseEventHandler<HTMLElement> | undefined;
	onMouseLeave?: MouseEventHandler<HTMLElement> | undefined;
};


export const PlaceCard = ({offer, className, onMouseEnter, onMouseLeave}: PlaceCardProps) => {
	const favoriteLabel = `${offer.isFavorite ? 'In' : 'To'} bookmarks`;
	const favoriteClass = classNames('place-card__bookmark-button', {'place-card__bookmark-button--active' : offer.isFavorite}, 'button');
	const href = `/offer/${offer.id}`;

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
					<button
						className={favoriteClass}
						type="button"
					>
						<svg
							className="place-card__bookmark-icon"
							width={18}
							height={19}
						>
							<use xlinkHref="#icon-bookmark" />
						</svg>
						<span className="visually-hidden">{favoriteLabel}</span>
					</button>
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

