import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='pt-5 m-5'>
            <footer>
                <p className='text-light'>
                    <Link to='/login'>Зарегистрируйтесь</Link>, чтобы читать или оставить отзывы об
                    отеле.
                </p>
            </footer>
        </div>
    );
};

export default Footer;
