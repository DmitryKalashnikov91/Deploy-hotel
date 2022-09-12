import React from 'react';
import { Link } from 'react-router-dom';

const Main = () => {
    return (
        <div className='container-fluid'>
            <div className='main'>
                <h2 className='ms-5 pt-5 welcome'>Добро пожаловать в наш отель А!</h2>

                <img
                    className='w-200 rounded'
                    src='https://images.unsplash.com/photo-1445019980597-93fa8acb246c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80'
                    alt='home'
                />
            </div>
            <div className='mt-3'>
                <Link className='link-secondary' to='/reviews'>
                    Читать, оставить отзывы
                </Link>
            </div>
        </div>
    );
};

export default Main;
