import React from 'react';
import PropTypes from 'prop-types';

import UserCard from './userCard';
import Reviews from './reviews/reviews';

const UserPage = () => {
    return (
        <div className='container'>
            <div className='row gutters-sm'>
                <div className='col-md-4 mb-3'>
                    <UserCard />
                </div>
                <div className='col-md-8'>
                    <Reviews />
                </div>
            </div>
        </div>
    );
};

UserPage.propTypes = {
    userId: PropTypes.string,
};

export default UserPage;
