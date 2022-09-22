import React from 'react';
import { Link } from 'react-router-dom';

const Main = () => {
    return (
        <div className='container-fluid'>
            <div className='main'>
                <h1>Добро пожаловать в наш отель А!</h1>

                <img
                    src='https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80'
                    alt='home'
                />
            </div>
            <span className='mt-3'>
                <Link className='link-secondary' to='/reviews'>
                    Читать, оставить отзывы
                </Link>
            </span>
        </div>
    );
};

export default Main;
