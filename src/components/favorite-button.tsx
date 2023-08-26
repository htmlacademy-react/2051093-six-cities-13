import { Navigate } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../consts';
import { useAppDispatch, useAppSelector } from '../hooks';
import { getAuthorizationStatus } from '../store/user-data/selectors';
import { addFavorite, deleteFavorite } from '../store/api-action';
import classNames from 'classnames';

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

	const handleClick = () => {
		if (authorization !== AuthorizationStatus.Auth) {
			return <Navigate to={AppRoute.Login} />;
		}

		dispatch(isFavorite ? deleteFavorite(id) : addFavorite(id));
	};

	return (
		<button
			className={classNames(`${className}__bookmark-button`, {[`${className}__bookmark-button--active`] : isFavorite}, 'button')}
			type="button"
			onClick={handleClick}
		>
			<svg className={`${className}__bookmark-icon`} {...sizeValue[size]}>
				<use xlinkHref="#icon-bookmark"></use>
			</svg>
			<span className="visually-hidden">{isFavorite ? 'In' : 'To'} bookmarks</span>
		</button>
	);
};
