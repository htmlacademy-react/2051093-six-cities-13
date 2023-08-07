import { useState } from 'react';
import { SortingType } from '../consts';
import { useAppDispatch, useAppSelector } from '../hooks';
import { sortOffers } from '../store/action';
import classNames from 'classnames';

export const OffersSort = () => {
	const sortingType = Object.values(SortingType);
	const sort = useAppSelector((state) => state.sort);
	const dispatch = useAppDispatch();
	const [isActiveState, setActiveState] = useState(false);

	return (
		<form className="places__sorting" action="#" method="get">
			<span className="places__sorting-caption">Sort by&nbsp;</span>
			<span className="places__sorting-type"
				tabIndex={0}
				onClick={() => setActiveState((state) => (!state))}
			>
				{sort}
				<svg className="places__sorting-arrow" width={7} height={4}>
					<use xlinkHref="#icon-arrow-select" />
				</svg>
			</span>
			<ul className={classNames (
				'places__options',
				'places__options--custom',
				{'places__options--opened': isActiveState}
			)}
			>
				{sortingType.map((item) => (
					<li className={classNames(
						'places__option',
						{'places__option--active': item === sort}
					)}
					tabIndex={0}
					key={item}
					onClick={() => {
						dispatch(sortOffers(item));
						setActiveState((state) => !state);
					}}
					>
						{item}
					</li>
				))}
			</ul>
		</form>
	);
};
