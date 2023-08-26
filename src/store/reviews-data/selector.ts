import { NameSpace } from '../../consts';
import { State } from '../../types/state';

export const getReviews = (state: State) => state[NameSpace.Comments].reviews;

export const getReviewsRequestStatus = (state: State) => state[NameSpace.Comments].reviewsRequestStatus;

export const getReviewSendingStatus = (state: State) => state[NameSpace.Comments].reviewSendingStatus;
