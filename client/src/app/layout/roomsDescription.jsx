import React from 'react';

const RoomsDescription = () => {
    return (
        <div className='description'>
            <h3>Предлагаем на выбор номера 4х видов:</h3>
            <ul className='list'>
                <li className='item'>
                    <p className='headline'>"Стандартный":</p> 1 комната, максимальное размещение 2
                    человека + ребенок
                </li>
                <li className='item'>
                    <p className='headline'>"Семейный":</p> 2 комнаты, максимальное размещение 5
                    человек, включая детей
                </li>
                <li className='item'>
                    <p className='headline'>"Безнес":</p> 2 комнаты, рассчитан на два человека
                </li>
                <li className='item'>
                    <p className='headline'>"Люкс":</p> 2х-, 3х-комнатные, от 2х до 10 человек
                </li>
            </ul>
        </div>
    );
};

export default RoomsDescription;
