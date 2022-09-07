import React from 'react';
import { useParams } from 'react-router-dom';
import NumberList from '../components/NumberList';
import RoomPage from '../components/pages/roomPage';

const HotelNumber = () => {
    const params = useParams();
    const { roomId } = params;
    return <>{roomId ? <RoomPage roomId={roomId} /> : <NumberList />}</>;
};

export default HotelNumber;
