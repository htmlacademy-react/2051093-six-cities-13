import { Link } from 'react-router-dom';
import { OfferProps } from '../../types/offer-types';
import classNames from 'classnames';


export const FavoritesCard = (props: OfferProps) => {
	const {isPremium = false, previewImage, price, isFavorite = false, rating, type, title, id} = props;
	const favoriteLabel = `${isFavorite ? 'In' : 'To'} bookmarks`;
	const favoriteClass = classNames('place-card__bookmark-button', {'place-card__bookmark-button--active' : isFavorite}, 'button');
	const href = `/offer/${id}`;

	return (
		<article className="favorites__card place-card">
			{isPremium && (
				<div className="place-card__mark">
					<span>Premium</span>
				</div>)}
			<div className="favorites__image-wrapper place-card__image-wrapper">
				<Link to={href}>
					<img
						className="place-card__image"
						src={previewImage}
						width={150}
						height={110}
						alt="Place image"
					/>
				</Link>
			</div>
			<div className="favorites__card-info place-card__info">
				<div className="place-card__price-wrapper">
					<div className="place-card__price">
						<b className="place-card__price-value">€{price}</b>
						<span className="place-card__price-text">
						/&nbsp;night
						</span>
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
