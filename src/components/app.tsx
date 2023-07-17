import { MainPage } from '../pages/main/main';

type AppProps = {
	placesCount: number;
}

export const App = ({placesCount}: AppProps): JSX.Element => (
	<MainPage placesCount={placesCount}/>
);
