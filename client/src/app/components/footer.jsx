// Libraries
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <section className='pt-5 m-5'>
            <footer>
                <p className='text-light'>
                    <Link to='/login'>Зарегистрируйтесь</Link>, чтобы читать или оставить отзывы об
                    отеле.
                </p>
                <div className='icons text-info'>
                    <a href='https://t.me/kald3al' target='_blank' rel='noopener noreferrer'>
                        <i className='bi bi-telegram tg-ico'></i>
                    </a>
                    <a
                        href='https://discordapp.com/users/947792157983514624'
                        target='_blank'
                        rel='noopener noreferrer'>
                        <i class='bi bi-discord'></i>
                    </a>
                    <a href='https://github.com/DmitryKalashnikov91/Deploy-hotel'>
                        <i class='bi bi-github'></i>
                    </a>
                </div>
            </footer>
        </section>
    );
};

export default Footer;
