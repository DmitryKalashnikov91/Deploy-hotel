import React from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { loadRoomsList } from '../../redux/slices/roomsSlice';

const RoomsLayout = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        const loadRoomsData = () => {
            dispatch(loadRoomsList());
        };
        loadRoomsData();
    }, [dispatch]);
    return (
        <>
            <Outlet />
        </>
    );
};

export default RoomsLayout;
