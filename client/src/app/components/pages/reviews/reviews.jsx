import React, { useEffect } from 'react';
import { orderBy } from 'lodash';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
    addReview,
    getReviews,
    getReviewsLoadingStatus,
    loadReviewsList,
    removeReview,
} from '../../../../redux/slices/reviewSlice';
import { getCurrentUserData } from '../../../../redux/slices/userSlice';
import ReviewsList from './reviewsList';
import AddReviewForm from './addReviewForm';
import { useReview } from '../../../hoc/useReview';

const Reviews = () => {
    const { userId } = useParams();
    const dispatch = useDispatch();
    const reviews = useSelector(getReviews());
    const currentUser = useSelector(getCurrentUserData());
    const sortedReviews = orderBy(reviews, ['created_at'], ['desc']);
    useEffect(() => {
        dispatch(loadReviewsList(userId));
        console.log(userId);
    }, [userId]);
    const { createReview } = useReview();
    const handleRemoveReview = (data) => {
        removeReview(data);
    };

    const isLoading = useSelector(getReviewsLoadingStatus());
    const handleSubmit = (data) => {
        // dispatch(addReview({ ...data, pageId: currentUser._id }));
        return data !== undefined ? createReview(data) : null;
    };

    return (
        <>
            <div className='card mb-2'>
                <div className='card-body '>
                    <AddReviewForm onSubmit={handleSubmit} />
                </div>
            </div>

            <div className='card mb-3'>
                <div className='card-body '>
                    <h2>Reviews</h2>

                    <hr />
                    {isLoading ? (
                        <ReviewsList reviews={sortedReviews} onRemove={handleRemoveReview} />
                    ) : (
                        <p className='text-info'>Здесь пока нет отзывов, можете оставить свой</p>
                    )}
                </div>
            </div>
        </>
    );
};

export default Reviews;
