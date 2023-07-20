type Location = {
	latitude: number;
	longitude: number;
	zoom: number;
}

type City = {
	name: string;
	location: Location;
}

export interface PlaceCardProps {
	title: string;
	type: string;
	price: number;
	isFavorite?: boolean;
	isPremium?: boolean;
	rating: number;
	previewImage: string;
	id?: string;
}

export interface OfferProps extends PlaceCardProps {
	city: City;
	location: Location;
}
