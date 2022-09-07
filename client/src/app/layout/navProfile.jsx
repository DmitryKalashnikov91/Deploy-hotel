import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getCurrentUserData } from '../../redux/slices/userSlice';

const NavProfile = () => {
    const currentUser = useSelector(getCurrentUserData());
    const [isOpen, setOpen] = useState(false);
    const toggleMenu = () => {
        setOpen((prevState) => !prevState);
    };
    if (!currentUser) return 'loading...';
    return (
        <div className='dropdown' onClick={toggleMenu}>
            <div className='btn dropdown-toggle d-flex align-items-center'>
                <div className='text-info me-2'>{currentUser.name}</div>
            </div>
            <div className={'w-100 dropdown-menu' + (isOpen ? ' show' : '')}>
                <Link to='/userCard' className='dropdown-item'>
                    Profile
                </Link>
                <Link to='/logout' className='dropdown-item'>
                    Logout
                </Link>
            </div>
        </div>
    );
};

export default NavProfile;
