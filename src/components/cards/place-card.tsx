import classNames from 'classnames';
import { OfferProps } from '../../types/offer-types';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export const PlaceCard = (props: OfferProps) => {
	const {isPremium = false, previewImage, price, isFavorite = false, rating, type, title, id} = props;
	const favoriteLabel = `${isFavorite ? 'In' : 'To'} bookmarks`;
	const favoriteClass = classNames('place-card__bookmark-button', {'place-card__bookmark-button--active' : isFavorite}, 'button');
	const href = `/offer/${id}`;

	const [currentId, setId] = useState(id);
	const handleMouseEnter = () => {
		setId(currentId);
	};

	return (
		<article className="cities__card place-card" onMouseEnter={handleMouseEnter}>
			{isPremium && (
				<div className="place-card__mark">
					<span>Premium</span>
				</div>)}
			<div className="cities__image-wrapper place-card__image-wrapper">
				<Link to={href}>
					<img
						className="place-card__image"
						src={previewImage}
						width={260}
						height={200}
						alt="Place image"
					/>
				</Link>
			</div>
			<div className="place-card__info">
				<div className="place-card__price-wrapper">
					<div className="place-card__price">
						<b className="place-card__price-value">€{price}</b>
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
						<span style={{ width: `${rating * 20}%` }} />
						<span className="visually-hidden">Rating</span>
					</div>
				</div>
				<h2 className="place-card__name">
					<Link to={href}>{title}</Link>
				</h2>
				<p className="place-card__type">{type}</p>
			</div>
		</article>
	);
};

