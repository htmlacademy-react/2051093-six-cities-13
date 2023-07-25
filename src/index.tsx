import React from 'react';
import ReactDOM from 'react-dom/client';
import {App} from './components/app';
import {mockOffers} from './mocks/offers';
import { mockReviews } from './mocks/review';

const mockedOffers = mockOffers();
const mockedReviews = mockReviews();

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);

root.render(
	<React.StrictMode>
		<App offers={mockedOffers} fullOffers={mockedOffers} reviews={mockedReviews}/>
	</React.StrictMode>
);
