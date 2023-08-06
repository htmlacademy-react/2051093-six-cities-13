import React from 'react';
import ReactDOM from 'react-dom/client';
import {App} from './components/app';
import {mockOffers} from './mocks/offers';
import { mockReviews } from './mocks/review';
import { Provider } from 'react-redux';
import { store } from './store';

export const mockedOffers = mockOffers();
const mockedReviews = mockReviews();

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);

root.render(
	<React.StrictMode>
		<Provider store={store}>
			<App offers={mockedOffers} fullOffers={mockedOffers} reviews={mockedReviews}/>
		</Provider>
	</React.StrictMode>
);
