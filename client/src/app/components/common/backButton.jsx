import React from 'react';
import { useNavigate } from 'react-router-dom';
const BackHistoryButton = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate(-1);
    };
    return (
        <button className='btn btn-outline-info' onClick={handleClick}>
            <i className='bi bi-caret-left'></i>
            Назад
        </button>
    );
};

export default BackHistoryButton;
