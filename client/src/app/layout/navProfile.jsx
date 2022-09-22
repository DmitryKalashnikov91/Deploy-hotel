import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getCurrentUserData, logOut } from '../../redux/slices/userSlice';

const NavProfile = () => {
    const currentUser = useSelector(getCurrentUserData());
    const dispatch = useDispatch();
    const [isOpen, setOpen] = useState(false);
    const handleLogOut = () => {
        dispatch(logOut());
    };
    document.addEventListener('mousedown', function (e) {
        if (e.target.closest('.dropdown') === null) {
            setOpen(false);
        }
    });
    const toggleMenu = () => {
        setOpen((prevState) => !prevState);
    };
    if (!currentUser) return 'loading...';
    return (
        <div className='dropdown' onClick={toggleMenu} id='popup'>
            <div className='btn dropdown-toggle d-flex align-items-center'>
                <div className='text-info me-2'>{currentUser.name}</div>
            </div>
            <div className={'w-100 dropdown-menu' + (isOpen ? ' show' : '')}>
                <Link to='/userCard' className='dropdown-item'>
                    Profile
                </Link>
                <Link to='/logout' className='dropdown-item' onClick={handleLogOut}>
                    Logout
                </Link>
            </div>
        </div>
    );
};

export default NavProfile;
