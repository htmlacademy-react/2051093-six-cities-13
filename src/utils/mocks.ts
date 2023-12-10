import { AuthorizationStatus, CITIES, OFFER_TYPE, RequestStatus, SortingType } from '../consts';
import { Location, OfferProps } from '../types/offer-types';
import { faker } from '@faker-js/faker';
import { ReviewProps } from '../types/review';
import { State } from '../types/state';
import { UserData } from '../types/user-data';

const mockLocation = ():Location => ({
	latitude: faker.location.latitude({max: 54.5260, min: 53.0000}),
	longitude: faker.location.longitude({max: 15.2551, min: 14.0000}),
	zoom: faker.number.int({max:16, min:10})
});

export const mockOfferItem = (): OfferProps => ({
	title: faker.location.streetAddress(),
	type: faker.helpers.arrayElement(OFFER_TYPE),
	price: faker.number.int({max: 10000, min: 100}),
	isFavorite: faker.datatype.boolean(),
	isPremium: faker.datatype.boolean(),
	rating: faker.number.int({max: 5, min: 0}),
	previewImage: faker.image.urlLoremFlickr({category: 'apartment'}),
	id: crypto.randomUUID(),
	city: {
		name: faker.helpers.arrayElement(CITIES),
		location: mockLocation(),
	},
	location: mockLocation(),
	description: faker.lorem.sentences(2, '\n'),
	bedrooms: faker.number.int({max: 10, min: 1}),
	goods: faker.lorem.words(5).split(' '),
	host: {
		name: faker.internet.userName(),
		avatarUrl: faker.image.avatar(),
		isPro: faker.datatype.boolean(),
	},
	images: Array.from({length: faker.number.int({max:6})}, () => faker.image.urlLoremFlickr({category: 'apartment'})),
	maxAdults: faker.number.int({max: 10, min: 1}),
});

export const mockReviewItem = ():ReviewProps => ({
	id: crypto.randomUUID(),
	date: faker.date.recent().toString(),
	user: {
		name: faker.person.fullName(),
		avatarUrl: faker.image.avatar(),
		isPro: faker.datatype.boolean(),
	},
	comment: faker.lorem.paragraph(),
	rating: faker.number.int({max: 5, min: 0}),
});

export const mockReviews = () => Array.from({length: 10}, mockReviewItem);

export const mockOffers = () => Array.from({length:60}, mockOfferItem);

export const makeFakeStore = (initialState?: Partial<State>): State => ({
	USER: {
		authorization: AuthorizationStatus.NoAuth,
		user: {} as UserData
	},
	OFFERS: {
		city: CITIES[0],
		offers: mockOffers(),
		sort: SortingType.Popular,
		offersRequestStatus: RequestStatus.Idle
	},
	OFFER: {
		offer: null,
		offerRequestStatus: RequestStatus.Idle
	},
	FAVORITES: {
		offers: mockOffers(),
		offersRequestStatus: RequestStatus.Idle,
		offersCount: 0
	},
	NEAR_PLACES: {
		places: [],
		nearPlacesRequestStatus: RequestStatus.Idle
	},
	COMMENTS: {
		reviews: [],
		reviewsRequestStatus: RequestStatus.Idle,
		reviewSendingStatus: RequestStatus.Idle
	},
	...initialState ?? {},
});
