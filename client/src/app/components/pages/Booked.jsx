import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeItem } from '../../../redux/bookedSlice';

const Booked = () => {
    const { items, totalPrice } = useSelector((state) => state.booked);
    const dispatch = useDispatch();

    const onClickremoove = () => {
        dispatch(removeItem(items.roomId));
    };

    let tmpArr = [];
    function itemCheck(item) {
        if (tmpArr.indexOf(item.roomId) === -1) {
            tmpArr.push(item.roomId);
            return true;
        }
        return false;
    }

    const bookedItems = items.filter((item) => itemCheck(item));
    if (bookedItems.length >= 1) {
        return (
            <div>
                {bookedItems.map((item) => (
                    <ul key={item.roomId} className='list-group'>
                        <li className='list-group-item'>
                            <input
                                className='form-check-input me-1'
                                type='checkbox'
                                value=''
                                aria-label='...'
                            />
                            {item.title}{' '}
                            <img src={item.imgUrl} alt='room' width='50' className='rounded' />{' '}
                            {item.price}
                            <button className='btn btn-outline-primary'>забронировать</button>
                        </li>
                    </ul>
                ))}
                <div>
                    <span>{totalPrice}</span>
                </div>
                <button className='btn btn-outline-danger' onClick={onClickremoove}>
                    Очистить
                </button>
            </div>
        );
    } else {
        return (
            <div>
                <span>
                    Выбранных номеров нет.<Link to='/All'> Выбрать?</Link>
                </span>
            </div>
        );
    }
};

export default Booked;
