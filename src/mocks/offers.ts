import { CITIES, OFFER_TYPE } from '../consts';
import { FullOfferProps, Location, OfferProps } from '../types/offer-types';
import { faker } from '@faker-js/faker';

const mockLocation = ():Location => ({
	latitude: faker.location.latitude(),
	longitude: faker.location.longitude(),
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
});

export const mockFullOfferItem = (): OfferProps & FullOfferProps => ({
	...mockOfferItem(),
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

export const mockOffers = () => Array.from({length:60}, mockFullOfferItem);
