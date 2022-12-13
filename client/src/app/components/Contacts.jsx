// Libraries
import React from 'react';

const Contacts = () => {
    return (
        <section className='contacts-text'>
            <h2>Contacts</h2>
            <div className='contacts-phones call_phone_3'>
                <i className='bi bi-telephone-forward text-light'>
                    <a href='tel: +74950000000'> +74950000000</a>
                </i>
            </div>
            <div>
                <h4>Забронировать по почте:</h4>

                <i className='bi bi-envelope text-light'>
                    <a href='tel: bron-hotel@mail.ru'> bron-hotel@mail.ru</a>
                </i>
            </div>
            <div>
                <h4>Связь с разработчиком:</h4>
                <a href='mailto:kobe-24-8@mail.ru'>связаться</a>
            </div>
            <div className='map-container'>
                <iframe
                    title='map-hot'
                    src='https://yandex.ru/map-widget/v1/-/CCUVrGXZPC'
                    frameBorder='1'
                    allowFullScreen={true}></iframe>
            </div>
        </section>
    );
};

export default Contacts;
