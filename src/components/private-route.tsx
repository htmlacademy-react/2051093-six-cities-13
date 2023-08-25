import {Navigate} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../consts';
import { useAppSelector } from '../hooks';
import { getAuthorizationStatus } from '../store/user-data/selectors';

type PrivateRouteProps = {
  children: JSX.Element;
}

const PrivateRoute = ({children}: PrivateRouteProps): JSX.Element => {
	const authorization = useAppSelector(getAuthorizationStatus);
	return (
		authorization === AuthorizationStatus.Auth
			? children
			: <Navigate to={AppRoute.Login} />
	);
};


export default PrivateRoute;
