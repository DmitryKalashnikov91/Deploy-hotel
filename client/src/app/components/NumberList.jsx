// Libraries
import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

// Redux
import { getRooms, getRoomsLoadingStatus } from '../../redux/slices/roomsSlice';

// Components
import RoomsDescription from '../layout/roomsDescription';

const NumberList = () => {
    const numbers = useSelector(getRooms());
    const numbersIsLoading = useSelector(getRoomsLoadingStatus());
    if (!numbersIsLoading) {
        return (
            <div className='container-xxl'>
                <RoomsDescription />

                <div className='items'>
                    <ul className='list-group'>
                        {numbers.map((number) => (
                            <li key={number._id} className='list-group text-success price'>
                                <span className='items-name'>{number.title}</span>
                                <NavLink to={`/all/${number._id}`}>
                                    <img
                                        src={number.imgUrl}
                                        alt='room.img'
                                        className=' rounded'
                                        width='200'
                                    />
                                </NavLink>
                                <span>{number.price} рублей в сутки</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        );
    } else {
        return (
            <div className='spinner-border' role='status'>
                <span className='visually-hidden'>Loading...</span>
            </div>
        );
    }
};

export default NumberList;
