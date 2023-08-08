import {DotLoader} from 'react-spinners';

export const Preload = () => (
	<main className="page__main">
		<h1 className="visually-hidden">Loading...</h1>
		<div>
			<DotLoader />
		</div>
		<div className="cities__status">Loading...</div>
	</main>
);
