import {Navigate} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../consts';

type PrivateRouteProps = {
  authorizationStatus: AuthorizationStatus;
  children: JSX.Element;
}

const PrivateRoute = ({authorizationStatus, children}: PrivateRouteProps): JSX.Element => (
	authorizationStatus === AuthorizationStatus.Auth
		? children
		: <Navigate to={AppRoute.Login} />
);

export default PrivateRoute;
