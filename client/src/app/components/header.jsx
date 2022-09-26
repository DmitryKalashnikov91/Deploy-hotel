// Libraries
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/');
    };
    return (
        <header className='d-flex justify-content-center ' onClick={handleClick}>
            <h1 className='shadow-lg p-2 mb-3 rounded user-select-none title text-light'>
                <i className='bi bi-strava text-info'></i>
                Hotel A
            </h1>
        </header>
    );
};

export default Header;
