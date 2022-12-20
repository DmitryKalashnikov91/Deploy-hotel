// Libraries
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <section className='pt-5 m-5'>
            <footer>
                <div className='log'>
                    <img
                        src='https://thumb.tildacdn.com/tild3232-3134-4133-a431-373835393739/-/resize/476x/-/format/webp/21__.png'
                        alt='logo'
                        width={200}
                        height={50}
                    />
                </div>
                <div className='icons text-info'>
                    <span>По вопросам сотрудничества:</span>
                    <div className='contacts'>
                        <p>Официальный представитель МФКЭС "НАШ МИР-XXI ВЕК"</p>
                        <strong>Игорь А.Алекс</strong>
                        <a href='tel:+79251586579'>+7 (925) 158-65-79</a>
                        <p>Разработчик</p>
                        <strong>Калашников Д.А.</strong>
                        <a href='tel:+79999152567'>+7 (999) 915-25-67</a>
                    </div>
                    <a
                        href='https://discordapp.com/users/947792157983514624'
                        target='_blank'
                        rel='noopener noreferrer'>
                        <i className='bi bi-discord'></i>
                    </a>
                    <a href='https://github.com/DmitryKalashnikov91/Deploy-hotel'>
                        <i className='bi bi-github'></i>
                    </a>
                </div>
            </footer>
        </section>
    );
};

export default Footer;
