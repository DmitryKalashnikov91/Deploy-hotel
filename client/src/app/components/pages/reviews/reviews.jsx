import React, { useEffect } from 'react';
import { orderBy } from 'lodash';
import { useDispatch, useSelector } from 'react-redux';
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

const Reviews = () => {
    const dispatch = useDispatch();
    const currentUser = useSelector(getCurrentUserData());
    useEffect(() => {
        dispatch(loadReviewsList(currentUser._id));
    }, [currentUser._id]);

    const handleRemoveReview = (data) => {
        removeReview(data);
    };
    const reviews = useSelector(getReviews());
    const isLoading = useSelector(getReviewsLoadingStatus());
    const handleSubmit = (data) => {
        dispatch(addReview({ ...data, pageId: currentUser._id }));
    };
    const sortedReviews = orderBy(reviews, ['created_at'], ['desc']);
    return (
        <>
            <div className='card mb-2'>
                <div className='card-body '>
                    <AddReviewForm onSubmit={handleSubmit} />
                </div>
            </div>
            {sortedReviews > 0 && (
                <div className='card mb-3'>
                    <div className='card-body '>
                        <h2>Reviews</h2>

                        <hr />
                        {isLoading ? (
                            <ReviewsList reviews={sortedReviews} onRemove={handleRemoveReview} />
                        ) : (
                            <p className='text-info'>
                                Здесь пока нет отзывов, можете оставить свой
                            </p>
                        )}
                    </div>
                </div>
            )}
        </>
    );
};

export default Reviews;
