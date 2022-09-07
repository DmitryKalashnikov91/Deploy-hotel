import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { getRooms, getRoomsLoadingStatus } from '../../redux/slices/roomsSlice';
import RoomsDescription from '../layout/roomsDescription';

const NumberList = () => {
    const numbers = useSelector(getRooms());
    const numbersIsLoading = useSelector(getRoomsLoadingStatus());

    if (!numbersIsLoading) {
        return (
            <div className=''>
                <RoomsDescription />

                <div className='items text-light'>
                    {numbers.map((number) => (
                        <ul key={number._id} className='list-group'>
                            <span>{number.title}</span>
                            <Link to={`/all/${number._id}`}>
                                <img
                                    src={number.imgUrl}
                                    alt='room.img'
                                    className='img-thumbnail rounded'
                                    width='200'
                                />
                            </Link>
                            <li className='list-group text-success'>
                                {number.price} рублей в сутки
                            </li>
                        </ul>
                    ))}
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
