export interface ReviewProps {
	id: string;
	date: string;
	user: {
		name: string;
		avatarUrl: string;
		isPro: boolean;
	};
	comment: string;
	rating: number;
}

export type NewReview = Pick<ReviewProps, 'id' | 'comment' | 'rating'>;

export type CommentField = HTMLFormElement & {
	review: HTMLTextAreaElement;
	rating: HTMLInputElement;
};
