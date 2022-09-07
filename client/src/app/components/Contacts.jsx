import React from 'react';

const Contacts = () => {
    return (
        <div className='contacts-text'>
            <h2>Contacts</h2>
            <div className='contacts-phones call_phone_3'>
                <i className='bi bi-telephone-forward'></i>
                <a href='tel: +74950000000'> +74950000000</a>
            </div>
            <div>
                <h4>Забронировать по почте:</h4>
                <a href='tel: bron-hotel@mail.ru'>bron-hotel@mail.ru</a>
            </div>
            <div>
                <h4>Связь с разработчиком:</h4>
                <a href='mailto:kobe-24-8@mail.ru'>связаться</a>
            </div>
        </div>
    );
};

export default Contacts;
