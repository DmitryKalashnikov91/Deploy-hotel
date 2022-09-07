import React from 'react';
import { useHistory } from 'react-router-dom';

const Header = () => {
    const history = useHistory();

    const handleClick = () => {
        history.push('/');
    };
    return (
        <div className='d-flex justify-content-center' onClick={handleClick}>
            <h1 className='shadow-lg p-2 mb-3 rounded user-select-none text-light'>
                <i className='bi bi-strava text-info'></i>
                Hotel A
            </h1>
        </div>
    );
};

export default Header;
