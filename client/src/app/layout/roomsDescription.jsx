import React from 'react';

const RoomsDescription = () => {
    return (
        <div>
            <h3>Предлагаем на выбор номера 4х видов:</h3>
            <ul>
                <li className='list-group-item list-group-item-secondary'>
                    <p className='text-info'>"Стандартный":</p> 1 комната, максимальное размещение 2
                    человека + ребенок
                </li>
                <li className='list-group-item list-group-item-secondary'>
                    <p className='text-info'>"Семейный":</p> 2 комнаты, максимальное размещение 5
                    человек, включая детей
                </li>
                <li className='list-group-item list-group-item-secondary'>
                    <p className='text-info'>"Безнес":</p> 2 комнаты, рассчитан на два человека
                </li>
                <li className='list-group-item list-group-item-secondary'>
                    <p className='text-info'>"Люкс":</p> 2х-, 3х-комнатные, от 2х до 10 человек
                </li>
            </ul>
        </div>
    );
};

export default RoomsDescription;
