// libraries
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Navigate, useParams } from 'react-router-dom';
import PropTypes from 'prop-types';

// redux
import { addItem } from '../../../redux/bookedSlice';

// services
import roomService from '../../services/room.servise';

// components
import BackHistoryButton from '../common/backButton';

const RoomPage = () => {
    const { roomId } = useParams();
    const dispatch = useDispatch();

    const [room, setRoom] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState([true]);
    useEffect(async () => {
        const req = await roomService.get();
        setRoom(req.find((room) => room._id === roomId));
        setIsLoading(false);
    }, []);

    if (!room && isLoading === false) {
        return <Navigate to='/All' />;
    }

    const onClickAdd = () => {
        const item = {
            roomId,
            title: room.title,
            price: room.price,
            imgUrl: room.imgUrl,
        };
        dispatch(addItem(item));
    };
    if (!isLoading && room) {
        return (
            <div className='text-light'>
                <h1>{room.title}</h1>
                <h2>Стоимость: {room.price} рублей/сутки</h2>
                <img className='rounded roomImg' src={room.imgUrl} alt='roomIMG' width='700' />
                <div className='mt-5'>
                    <button className='btn btn-primary' onClick={onClickAdd}>
                        Выбрать этот <i></i>
                    </button>
                </div>
                <div className='mt-5'>
                    <BackHistoryButton />
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

RoomPage.propTypes = {
    roomId: PropTypes.string,
};

export default RoomPage;
