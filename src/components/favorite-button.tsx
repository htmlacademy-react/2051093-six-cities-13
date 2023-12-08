import { Navigate } from 'react-router-dom';
import { AppRoute, AuthorizationStatus, FavoriteStatusCode } from '../consts';
import { useAppDispatch, useAppSelector } from '../hooks';
import { getAuthorizationStatus } from '../store/user-data/selectors';
import { changeFavoriteAction } from '../store/api-action';
import classNames from 'classnames';
import { useState } from 'react';

type ButtonSize = 'small' | 'big'

type FavButtonProps = {
	id: string;
	isFavorite: boolean;
	className: string;
	size: ButtonSize;
}

const sizeValue: Record<ButtonSize, {width: string; height: string}> = {
	small: {width: '18', height: '19'},
	big: {width: '31', height: '33'}
};

export const FavoriteButton = ({id, isFavorite, className, size}: FavButtonProps) => {
	const dispatch = useAppDispatch();
	const authorization = useAppSelector(getAuthorizationStatus);
	const [isActive, setActive] = useState(isFavorite);
	const status = isActive ? FavoriteStatusCode.Remove : FavoriteStatusCode.Add;

	const handleClick = () => {
		if (authorization !== AuthorizationStatus.Auth) {
			return <Navigate to={AppRoute.Login} />;
		} else {
			dispatch(changeFavoriteAction({id, status}));
			setActive((state) => !state);
		}
	};

	return (
		<button
			className={classNames(`${className}__bookmark-button`, {[`${className}__bookmark-button--active`] : isActive}, 'button')}
			type="button"
			onClick={handleClick}
		>
			<svg className={`${className}__bookmark-icon`} {...sizeValue[size]}>
				<use xlinkHref="#icon-bookmark"></use>
			</svg>
			<span className="visually-hidden">{isActive ? 'In' : 'To'} bookmarks</span>
		</button>
	);
};
