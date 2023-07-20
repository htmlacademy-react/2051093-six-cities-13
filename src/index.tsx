import React from 'react';
import ReactDOM from 'react-dom/client';
import {App} from './components/app';
import {offers} from './mocks/offers';

const enum Setting {
	placesCount = 312,
}

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);

root.render(
	<React.StrictMode>
		<App
			placesCount = {Setting.placesCount}
			offers={offers}
		/>
	</React.StrictMode>
);
