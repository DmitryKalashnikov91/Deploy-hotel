// Libraries
import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../images/logo.jpeg';
import NavBar from './navBar';

const Header = () => {
    const navigate = useNavigate();

    return (
        <header className='d-flex justify-content-between fixed-top' onClick={() => navigate('/')}>
            <img src={logo} alt='logo' width={70} height={70} />
            <h1 className='shadow-lg p-2 mb-3 rounded user-select-none title text-primary'>
                Фонд наш МИР
            </h1>
            <NavBar />
        </header>
    );
};

export default Header;
