import { Link } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../consts';
import { useAppDispatch, useAppSelector } from '../hooks';
import { logoutAction } from '../store/api-action';
import { getAuthorizationStatus, getUserInfo } from '../store/user-data/selectors';
import { getFavorites } from '../store/favorites-data/selector';

type HeaderProps = {
	hideNavigation?: boolean;
};

export const Header = ({hideNavigation = false}: HeaderProps) => {
	const authorization = useAppSelector(getAuthorizationStatus);
	const userInfo = useAppSelector(getUserInfo);
	const favorites = useAppSelector(getFavorites);
	const dispatch = useAppDispatch();

	return (
		<header className="header">
			<div className="container">
				<div className="header__wrapper">
					<div className="header__left">
						<Link className="header__logo-link" to={AppRoute.Main}>
							<img
								className="header__logo"
								src="img/logo.svg"
								alt="6 cities logo"
								width={81}
								height={41}
							/>
						</Link>
					</div>
					{!hideNavigation && (
						<nav className="header__nav">
							{authorization === AuthorizationStatus.Auth ? (
								<ul className="header__nav-list">
									<li className="header__nav-item user">
										<Link
											className="header__nav-link header__nav-link--profile" to={AppRoute.Favorites}
										>
											<div className="header__avatar-wrapper user__avatar-wrapper"></div>
											<span className="header__user-name user__name">
												{userInfo.email}
											</span>
											<span className="header__favorite-count">{favorites.length}</span>
										</Link>
									</li>
									<li className="header__nav-item">
										<Link
											className="header__nav-link"
											onClick={(evt) => {
												evt.preventDefault();
												dispatch(logoutAction());
											}}
											to="/"
										>
											<span className="header__signout">Sign out</span>
										</Link>
									</li>
								</ul>
							) : (
								<ul className="header__nav-list">
									<li className="header__nav-item">
										<Link className="header__nav-link" to={AppRoute.Login}>
											<span className="header__signout">Sign in</span>
										</Link>
									</li>
								</ul>
							)}
						</nav>
					)}
				</div>
			</div>
		</header>
	);
};
