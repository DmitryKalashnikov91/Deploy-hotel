// Libraries
import React, { useState } from 'react';

const Main = () => {
    const [daysLag, setDaysLag] = useState(0);
    const [numOfPeople, setPeople] = useState(1);

    // now date (yyyy-mm-dd)
    const date = new Date();
    const output =
        date.getFullYear() +
        '-' +
        String(date.getMonth() + 1).padStart(2, '0') +
        '-' +
        String(date.getDate()).padStart(2, '0');

    const handleSubmit = (e) => {
        e.preventDefault();
        const dateIn = new Date(document.getElementById('dateIn').value);
        const dateOut = new Date(document.getElementById('dateOut').value);
        const people = document.getElementById('numOfPeople').value;
        // number of marked days
        const days = Math.ceil(Math.abs(dateOut.getTime() - dateIn.getTime()) / (1000 * 3600 * 24));
        setPeople(people);
        return setDaysLag(days);
    };
    return (
        <div className='container-fluid'>
            <form className='booking-form'>
                <span>Выберите дату заезда</span>
                <input
                    id='dateIn'
                    type='date'
                    name='date'
                    defaultValue={output}
                    min={output}
                    maxLength='20'
                />
                <br />
                <span>Выберите дату выезда</span>
                <input
                    id='dateOut'
                    type='date'
                    name='date'
                    defaultValue={output}
                    min={output}
                    maxLength='20'
                />
                <br />
                <span>Количество человек</span>
                <input
                    type='number'
                    name='people'
                    id='numOfPeople'
                    className='people'
                    defaultValue='1'
                    min='1'
                    max='10'
                />
                <button type='submit' className='btn btn-primary' onClick={handleSubmit}>
                    {' '}
                    Рассчитать стоимость
                </button>
                <span>Количество дней: {daysLag} </span>
                <span className='text-info'>
                    Стоимость от:{' '}
                    {numOfPeople < 3 && numOfPeople > 0 ? (
                        <strong className='text-warning'>{daysLag * 3700}</strong>
                    ) : (
                        <strong className='text-warning'>{daysLag * 4500}</strong>
                    )}{' '}
                    рублей
                </span>
            </form>
            <div className='main'>
                <div className='main_image'></div>
            </div>
        </div>
    );
};

export default Main;
