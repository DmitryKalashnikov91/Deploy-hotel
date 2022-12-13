// Libraries
import React from 'react';
import PropTypes from 'prop-types';

//Components
import UserCard from './userCard';
import Reviews from './reviews/reviews';
import { ReviewProvider } from '../../hoc/useReview';

const UserPage = () => {
    return (
        <div className='container'>
            <div className='row gutters-sm'>
                <div className='col-md-4 mb-3'>
                    <UserCard />
                </div>
                <div className='col-md-8'>
                    <ReviewProvider>
                        <Reviews />
                    </ReviewProvider>
                </div>
            </div>
        </div>
    );
};

UserPage.propTypes = {
    userId: PropTypes.string,
};

export default UserPage;
