// Libraries
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
                <div className='icons text-info'>
                    <i className='bi bi-telegram tg-ico'></i>
                    <i className='bi bi-instagram'></i>
                    <i className='bi bi-facebook'></i>
                </div>
            </footer>
        </span>
    );
};

export default Footer;
