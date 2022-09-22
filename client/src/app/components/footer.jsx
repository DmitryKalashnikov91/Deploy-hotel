import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <span className='pt-5 m-5'>
            <footer>
                <p className='text-light'>
                    <Link to='/login'>Зарегистрируйтесь</Link>, чтобы читать или оставить отзывы об
                    отеле.
                </p>
            </footer>
        </span>
    );
};

export default Footer;
