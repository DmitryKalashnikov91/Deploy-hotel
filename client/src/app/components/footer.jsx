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
                    <a href="https://t.me/kald3al" target="_blank" rel="noopener noreferrer"><i className='bi bi-telegram tg-ico'></i></a>
                    <a href="https://vk.com/id70942768" target="_blank" rel="noopener noreferrer"><i className='bi bi-instagram'></i></a>
                    <a href="/"><i className='bi bi-facebook'></i></a>
                </div>
            </footer>
        </span>
    );
};

export default Footer;
