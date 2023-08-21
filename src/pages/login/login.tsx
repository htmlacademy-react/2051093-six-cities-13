import { Helmet } from 'react-helmet-async';
import { Header } from '../../components/header';
import { AuthForm } from '../../components/auth-form';
import { Navigate } from 'react-router-dom';
import { useAppSelector } from '../../hooks';
import { AppRoute, AuthorizationStatus } from '../../consts';

export const LoginPage = () => {
	const authorization = useAppSelector((state) => state.authorization);

	return (
		authorization !== AuthorizationStatus.Auth ?
			<div className="page page--gray page--login">
				<Helmet>
					<title>6 cities: authorization</title>
				</Helmet>
				<Header hideNavigation />
				<main className="page__main page__main--login">
					<div className="page__login-container container">
						<section className="login">
							<h1 className="login__title">Sign in</h1>
							<AuthForm />
						</section>
						<section className="locations locations--login locations--current">
							<div className="locations__item">
								<a className="locations__item-link" href="#">
									<span>Amsterdam</span>
								</a>
							</div>
						</section>
					</div>
				</main>
			</div> : <Navigate to={AppRoute.Main}/>
	);
};

