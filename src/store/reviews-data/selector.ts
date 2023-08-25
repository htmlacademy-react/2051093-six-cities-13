import { NameSpace, RequestStatus } from '../../consts';
import { ReviewProps } from '../../types/review';
import { State } from '../../types/state';

export const getReviews = (state: State): ReviewProps[] => state[NameSpace.Comments].reviews;

export const getReviewsRequestStatus = (state: State): RequestStatus => state[NameSpace.Comments].reviewsRequestStatus;

export const getReviewSendingStatus = (state: State): RequestStatus => state[NameSpace.Comments].reviewSendingStatus;
