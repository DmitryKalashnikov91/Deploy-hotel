import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getReviewsLoadingStatus, loadReviewsList } from '../../../../redux/slices/reviewSlice';
import { getCurrentUserData } from '../../../../redux/slices/userSlice';
import ReviewsList from './reviewsList';

const Reviews = () => {
    const dispatch = useDispatch();
    const currentUser = useSelector(getCurrentUserData());
    useEffect(() => {
        dispatch(loadReviewsList());
    }, []);

    const isLoading = useSelector(getReviewsLoadingStatus());
    return (
        <>
            <div>{!isLoading ? <ReviewsList /> : 'Loading...'}</div>
            <div className='input-group mb-3'>
                <input
                    type='text'
                    className='form-control'
                    placeholder='напишите отзыв'
                    aria-label='review'
                    aria-describedby='button-addon2'
                />
                <button className='btn btn-outline-secondary' type='button' id='button-addon2'>
                    Отправить
                </button>
            </div>
        </>
    );
};

export default Reviews;
