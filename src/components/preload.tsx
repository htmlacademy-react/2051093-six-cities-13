import {DotLoader} from 'react-spinners';
import { containerStyle, spinnerSize, textStyle } from '../consts';

export const Preload = () => (
	<main className="page__main">
		<h1 className="visually-hidden">Loading...</h1>
		<div style={containerStyle}>
			<DotLoader size={spinnerSize} />
			<div className="cities__status" style={textStyle}>Loading...</div>
		</div>
	</main>
);
