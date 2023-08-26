import classNames from 'classnames';
import { useAppDispatch, useAppSelector } from '../hooks';
import { Link } from 'react-router-dom';
import { changeCity } from '../store/offers-data/offers-data';
import { CITIES } from '../consts';
import { getCity } from '../store/offers-data/selectors';

export const CityList = () => {
	const dispatch = useAppDispatch();
	const selectedCity = useAppSelector(getCity);

	return (
		<ul className="locations__list tabs__list">
			{CITIES.map((city) => (
				<li className="locations__item" key={city}>
					<Link className={classNames(
						'locations__item-link',
						'tabs__item',
						{'tabs__item--active': city === selectedCity})}
					to={`#${city.toLowerCase()}`}
					onClick={() => dispatch(changeCity(city))}
					>
						<span>{city}</span>
					</Link>
				</li>
			))}
		</ul>
	);
};
