import { Helmet } from 'react-helmet-async';
import { Header } from '../../components/header';
import classNames from 'classnames';
import { NearPlacesOffers } from '../../components/cards/near-place-list';
import { OffersMap } from '../../components/map/map';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { ReviewList } from '../../components/reviews/review-list';
import { useEffect } from 'react';
import { fetchNearPlaces, fetchOffer, fetchReviews } from '../../store/api-action';
import { Preload } from '../../components/preload';
import { Navigate, useParams } from 'react-router-dom';
import { AppRoute, AuthorizationStatus, RequestStatus, capitalize } from '../../consts';
import { ReviewForm } from '../../components/reviews/review-form';
import { getOffer, getOfferRequestStatus } from '../../store/offer-data/selector';
import { getReviews, getReviewsRequestStatus } from '../../store/reviews-data/selector';
import { getNearPlaces, getNearPlacesRequestStatus } from '../../store/near-place-data/selector';
import { getAuthorizationStatus } from '../../store/user-data/selectors';
import { FavoriteButton } from '../../components/favorite-button';

export const OfferPage = () => {
	const {id} = useParams();
	const dispatch = useAppDispatch();
	const offer = useAppSelector(getOffer);
	const reviews = useAppSelector(getReviews);
	const nearPlaces = useAppSelector(getNearPlaces);
	const nearPlacesSliced = nearPlaces.slice(0, 3);
	const authorization = useAppSelector(getAuthorizationStatus);
	const offerRequestStatus = useAppSelector(getOfferRequestStatus);
	const reviewsRequestStatus = useAppSelector(getReviewsRequestStatus);
	const nearPlacesRequestStatus = useAppSelector(getNearPlacesRequestStatus);


	useEffect(() => {
		if(id) {
			dispatch(fetchOffer(id));
			dispatch(fetchReviews(id));
			dispatch(fetchNearPlaces(id));
		}
	}, [id, dispatch]);

	if (offerRequestStatus === RequestStatus.Failed) {
		return <Navigate to={AppRoute.NotFound} />;
	}

	return (
		<>
			{offerRequestStatus === RequestStatus.Pending || reviewsRequestStatus === RequestStatus.Pending || nearPlacesRequestStatus === RequestStatus.Pending && <Preload />}
			{offerRequestStatus === RequestStatus.Successed && (
				<div className="page">
					<Helmet>
						<title>6 cities: offer</title>
					</Helmet>
					<Header />
					<main className="page__main page__main--offer">
						<section className="offer">
							<div className="offer__gallery-container container">
								<div className="offer__gallery">
									{offer.images.map((image) => (
										<div className="offer__image-wrapper" key={image}>
											<img className="offer__image" src={image} alt="Photo studio" />
										</div>))}
								</div>
							</div>
							<div className="offer__container container">
								<div className="offer__wrapper">
									{offer.isPremium && (
										<div className="offer__mark">
											<span>Premium</span>
										</div>)}
									<div className="offer__name-wrapper">
										<h1 className="offer__name">{offer.title}</h1>
										<FavoriteButton id={offer.id} isFavorite={offer.isFavorite} className={'offer'} size={'big'} />
									</div>
									<div className="offer__rating rating">
										<div className="offer__stars rating__stars">
											<span style={{width: `${offer.rating * 20}%`}} />
											<span className="visually-hidden">Rating</span>
										</div>
										<span className="offer__rating-value rating__value">{offer.rating}</span>
									</div>
									<ul className="offer__features">
										<li className="offer__feature offer__feature--entire">{capitalize(offer.type)}</li>
										<li className="offer__feature offer__feature--bedrooms">
											{offer.bedrooms} Bedrooms
										</li>
										<li className="offer__feature offer__feature--adults">
									Max {offer.maxAdults} adults
										</li>
									</ul>
									<div className="offer__price">
										<b className="offer__price-value">€{offer.price}</b>
										<span className="offer__price-text">&nbsp;night</span>
									</div>
									<div className="offer__inside">
										<h2 className="offer__inside-title">What&apos;s inside</h2>
										<ul className="offer__inside-list">
											{offer.goods.map((item) => (
												<li className="offer__inside-item" key={item}>{item}</li>
											))}
										</ul>
									</div>
									<div className="offer__host">
										<h2 className="offer__host-title">Meet the host</h2>
										<div className="offer__host-user user">
											<div className={classNames(
												'offer__avatar-wrapper', { 'offer__avatar-wrapper--pro': offer.host.isPro }, 'user__avatar-wrapper'
											)}
											>
												<img
													className="offer__avatar user__avatar"
													src={offer.host.avatarUrl}
													width={74}
													height={74}
													alt="Host avatar"
												/>
											</div>
											<span className="offer__user-name">{offer.host.name}</span>
											{offer.host.isPro && <span className="offer__user-status">Pro</span>}
										</div>
										<div className="offer__description">
											<p className="offer__text">
												{offer.description}
											</p>
										</div>
									</div>
									<section className="offer__reviews reviews">
										<ReviewList reviews={reviews}/>
										{authorization === AuthorizationStatus.Auth && <ReviewForm id={id} />}
									</section>
								</div>
							</div>
							<OffersMap city={offer} points={[...nearPlacesSliced, offer]} selectedPointId={offer.id} className={'offer__map map'}/>
						</section>
						<div className="container">
							<section className="near-places places">
								<h2 className="near-places__title">
							Other places in the neighbourhood
								</h2>
								<div className="near-places__list places__list">
									{nearPlacesRequestStatus === RequestStatus.Successed && (
										<NearPlacesOffers places={nearPlacesSliced} />
									)}
								</div>
							</section>
						</div>
					</main>
				</div>
			)}
		</>
	);
};

