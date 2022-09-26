//Libraries
import React from 'react';
import { useSelector } from 'react-redux';
import { getCurrentUserData } from '../../../redux/slices/userSlice';

//components
import Reviews from './reviews/reviews';
const UserCard = () => {
    const currentUser = useSelector(getCurrentUserData());
    return (
        <>
            <h2>{currentUser.name}</h2>
            <Reviews />
        </>
    );
};

export default UserCard;
