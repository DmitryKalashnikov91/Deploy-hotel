import { createAction, createSlice } from '@reduxjs/toolkit';
import reviewService from '../../app/services/review.service';
const reviewsSlice = createSlice({
    name: 'reviews',
    initialState: {
        entities: null,
        isLoading: true,
        error: null,
    },
    reducers: {
        reviewsRequested: (state) => {
            state.isLoading = true;
        },
        reviewsRecieved: (state, action) => {
            state.entities = action.payload;
            state.isLoading = false;
        },
        reviewsRequestFiled: (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
        },
        reviewCreated: (state, action) => {
            state.entities.push(action.payload);
        },
        reviewDeleted: (state, action) => {
            state.entities = state.entities.filter((c) => c._id !== action.payload);
        },
    },
});

const { reducer: reviewsReducer, actions } = reviewsSlice;

const { reviewsRequested, reviewsRecieved, reviewsRequestFiled, reviewCreated, reviewDeleted } =
    actions;

const addReviewRequested = createAction('reviews/addReviewRequested');
const removeReviewRequested = createAction('reviews/removeReviewRequested');

export const loadReviewsList = (userId) => async (dispatch) => {
    dispatch(reviewsRequested());
    try {
        const { content } = await reviewService.getReviews(userId);
        dispatch(reviewsRecieved(content));
    } catch (error) {
        dispatch(reviewsRequestFiled(error.message));
    }
};

export const addReview = (payload) => async (dispatch, getState) => {
    dispatch(addReviewRequested(payload));
    try {
        const { content } = await reviewService.createReview(payload);
        dispatch(reviewCreated(content));
    } catch (error) {
        dispatch(reviewsRequestFiled(error.message));
    }
};
export const removeReview = (reviewId) => async (dispatch) => {
    dispatch(removeReviewRequested());
    try {
        const { content } = await reviewService.removeReview(reviewId);
        if (!content) {
            dispatch(reviewDeleted(reviewId));
        }
    } catch (error) {
        dispatch(reviewsRequestFiled(error.message));
    }
};

export const getReviews = () => (state) => state.reviews.entities;
export const getReviewsLoadingStatus = () => (state) => state.reviews.isLoading;

export default reviewsReducer;
