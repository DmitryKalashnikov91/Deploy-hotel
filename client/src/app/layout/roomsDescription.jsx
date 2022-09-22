import React from 'react';

const RoomsDescription = () => {
    return (
        <div className='description'>
            <h3>Предлагаем на выбор номера 4х видов:</h3>
            <ul className='list'>
                <li className='item'>
                    <p className='headline'>"Стандартный":</p>
                    <p className='headline-info'>
                        1 комната, максимальное размещение 2 человека + ребенок
                    </p>
                </li>
                <li className='item'>
                    <p className='headline'>"Семейный":</p>
                    <p className='headline-info'>
                        2 комнаты, максимальное размещение 5 человек, включая детей
                    </p>
                </li>
                <li className='item'>
                    <p className='headline'>"Безнес":</p>
                    <p className='headline-info'>2 комнаты, рассчитан на два человека</p>
                </li>
                <li className='item'>
                    <p className='headline'>"Люкс":</p>
                    <p className='headline-info'>2х-, 3х-комнатные, от 2х до 10 человек</p>
                </li>
            </ul>
        </div>
    );
};

export default RoomsDescription;
