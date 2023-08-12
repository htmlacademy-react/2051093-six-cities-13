import React from 'react';
import ReactDOM from 'react-dom/client';
import {App} from './components/app';
import { mockReviews } from './mocks/review';
import { Provider } from 'react-redux';
import { store } from './store';
import { fetchOffers } from './store/api-action';

store.dispatch(fetchOffers());
const mockedReviews = mockReviews();

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);

root.render(
	<React.StrictMode>
		<Provider store={store}>
			<App reviews={mockedReviews}/>
		</Provider>
	</React.StrictMode>
);
