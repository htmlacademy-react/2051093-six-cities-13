import { Helmet } from 'react-helmet-async';
import { Header } from '../../components/header';
import { useParams } from 'react-router-dom';
import classNames from 'classnames';
import { NearPlacesOffers } from '../../components/cards/near-place-list';
import { OffersMap } from '../../components/map/map';
import { NotFoundPage } from '../not-found-page';
import { useAppSelector } from '../../hooks';
import { ReviewList } from '../../components/reviews/review-list';
import { ReviewProps } from '../../types/review';

type OfferPageProps = {
	reviews: ReviewProps[];
}

export const OfferPage = ({reviews}: OfferPageProps) => {
	const {id} = useParams();
	const offersByCity = useAppSelector((state) => state.offers);
	const fullOffer = offersByCity.find((item) => item.id === id);
	if (fullOffer === undefined) {
		return <NotFoundPage />;
	}

	const favoriteClass = classNames('offer__bookmark-button', {'offer__bookmark-button--active' : fullOffer.isFavorite}, 'button');
	const favoriteLabel = `${fullOffer.isFavorite ? 'In' : 'To'} bookmarks`;

	return (
		<div className="page">
			<Helmet>
				<title>6 cities: offer</title>
			</Helmet>
			<Header isAuthorized/>
			<main className="page__main page__main--offer">
				<section className="offer">
					<div className="offer__gallery-container container">
						<div className="offer__gallery">
							{fullOffer.images.map((image) => (
								<div className="offer__image-wrapper" key={image}>
									<img
										className="offer__image"
										src={image}
										alt="Photo studio"
									/>
								</div>))}
						</div>
					</div>
					<div className="offer__container container">
						<div className="offer__wrapper">
							{fullOffer.isPremium && (
								<div className="offer__mark">
									<span>Premium</span>
								</div>)}
							<div className="offer__name-wrapper">
								<h1 className="offer__name">{fullOffer.title}</h1>
								<button className={favoriteClass} type="button">
									<svg className="offer__bookmark-icon" width={31} height={33}>
										<use xlinkHref="#icon-bookmark" />
									</svg>
									<span className="visually-hidden">{favoriteLabel}</span>
								</button>
							</div>
							<div className="offer__rating rating">
								<div className="offer__stars rating__stars">
									<span style={{width: `${fullOffer.rating * 20}%`}} />
									<span className="visually-hidden">Rating</span>
								</div>
								<span className="offer__rating-value rating__value">{fullOffer.rating}</span>
							</div>
							<ul className="offer__features">
								<li className="offer__feature offer__feature--entire">{fullOffer.type}</li>
								<li className="offer__feature offer__feature--bedrooms">
									{fullOffer.bedrooms} Bedrooms
								</li>
								<li className="offer__feature offer__feature--adults">
									Max {fullOffer.maxAdults} adults
								</li>
							</ul>
							<div className="offer__price">
								<b className="offer__price-value">€{fullOffer.price}</b>
								<span className="offer__price-text">&nbsp;night</span>
							</div>
							<div className="offer__inside">
								<h2 className="offer__inside-title">What&apos;s inside</h2>
								<ul className="offer__inside-list">
									{fullOffer.goods.map((item) => (
										<li className="offer__inside-item" key={item}>{item}</li>
									))}
								</ul>
							</div>
							<div className="offer__host">
								<h2 className="offer__host-title">Meet the host</h2>
								<div className="offer__host-user user">
									<div className={classNames(
										'offer__avatar-wrapper', { 'offer__avatar-wrapper--pro': fullOffer.host.isPro }, 'user__avatar-wrapper'
									)}
									>
										<img
											className="offer__avatar user__avatar"
											src={fullOffer.host.avatarUrl}
											width={74}
											height={74}
											alt="Host avatar"
										/>
									</div>
									<span className="offer__user-name">{fullOffer.host.name}</span>
									{fullOffer.host.isPro && <span className="offer__user-status">Pro</span>}
								</div>
								<div className="offer__description">
									<p className="offer__text">
										{fullOffer.description}
									</p>
								</div>
							</div>
							<ReviewList reviews={reviews} isAuthorized/>
						</div>
					</div>
					<OffersMap city={fullOffer} points={offersByCity.slice(0,3)} selectedPointId={fullOffer.id} className={'offer__map map'}/>
				</section>
				<div className="container">
					<section className="near-places places">
						<h2 className="near-places__title">
							Other places in the neighbourhood
						</h2>
						<div className="near-places__list places__list">
							<NearPlacesOffers />
						</div>
					</section>
				</div>
			</main>
		</div>
	);
};

