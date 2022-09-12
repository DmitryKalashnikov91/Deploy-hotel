import React, { useEffect } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Footer from './app/components/footer';
import Header from './app/components/header';
import NavBar from './app/components/navBar';

import Entertaiments from './app/components/Entertaiments';
import Login from './app/layout/login';
import Menu from './app/components/Menu';
import Actions from './app/components/Actions';
import Contacts from './app/components/Contacts';
import NumberList from './app/components/NumberList';
import HotelNumber from './app/layout/HotelNumber';
import './styles/app.scss';
import Booked from './app/components/pages/Booked';
import { useDispatch, useSelector } from 'react-redux';
import { loadRoomsList } from './redux/slices/roomsSlice';
import Reviews from './app/components/pages/reviews/reviews';
import AppLoader from './utils/appLoader';
import ProtectedRoute from './app/components/common/protectedRoute';
import { getIsLoggedIn } from './redux/slices/userSlice';
import LogOut from './app/layout/logOut';
import UserCard from './app/components/pages/userCard';
import Main from './app/components/Main';

const App = () => {
    const isLoggedIn = useSelector(getIsLoggedIn());
    const dispatch = useDispatch();
    useEffect(() => {
        // dispatch(loadUsersList());
        dispatch(loadRoomsList());
    }, []);

    return (
        <div className='container-xxl'>
            <AppLoader>
                <Header />

                <NavBar />
                <Switch>
                    <ProtectedRoute path='/:userId?/edit?' component={UserCard} />
                    <ProtectedRoute path='/reviews' component={Reviews} />
                    <Route path='/booked' render={(props) => <Booked {...props} />} />
                    <Route path='/login/:type?' component={Login} />
                    <Route path='/userCard' component={UserCard} />
                    <Route path='/logout' component={LogOut} />
                    <Route path='/contacts' component={Contacts} />
                    <Route path='/menu' component={Menu} />
                    <Route path='/entertaiments' component={Entertaiments} />
                    <Route path='/actions' component={Actions} />
                    <Route path='/all/:roomId?' component={HotelNumber} />
                    <Route path='/' exact component={Main} />
                    <Redirect to='/' />
                    <Route path='/all' render={(props) => <NumberList {...props} />} />
                </Switch>
            </AppLoader>
            {!isLoggedIn && <Footer />}
        </div>
    );
};

export default App;
