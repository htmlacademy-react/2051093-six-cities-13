import { Link } from 'react-router-dom';
import { CITIES } from '../../consts';
import { useAppSelector } from '../../hooks';
import { FavoritesCard } from './favorite-card';

export const FavoriteList = () => {
	const offers = useAppSelector((state) => state.places);

	return (
		<ul className="favorites__list">
			{CITIES.map((city) => (
				<li className="favorites__locations-items" key={city}>
					<div className="favorites__locations locations locations--current">
						<div className="locations__item">
							<Link className="locations__item-link" to="#">
								<span>{city}</span>
							</Link>
						</div>
					</div>
					<div className="favorites__places">
						{offers.filter((offer) => offer.city.name === city)
							.filter((offer) => offer.isFavorite === true)
							.map((offer) => <FavoritesCard {...offer} key={offer.id} />)}
					</div>
				</li>
			))}
		</ul>
	);
};
