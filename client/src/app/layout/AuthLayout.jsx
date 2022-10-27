import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { getIsLoggedIn } from '../../redux/slices/userSlice';

const AuthLayout = () => {
    const isLoggedIn = useSelector(getIsLoggedIn());
    if (isLoggedIn) {
        return <Navigate to='/' />;
    }
    return (
        <>
            <div className='container mt-5'>
                <div className='row'>
                    <div className='col-md-6 offset-md-3 shadow p-4 text-light'>
                        <Outlet />
                    </div>
                </div>
            </div>
        </>
    );
};

export default AuthLayout;
