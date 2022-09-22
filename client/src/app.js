// Libraries
import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

//style
import './styles/app.scss';

//Redux
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from './redux/slices/userSlice';

// Hocs
import withRedux from './hoc/withRedux';
import withRouter from './hoc/withRouter';

// Components
import Footer from './app/components/footer';
import Header from './app/components/header';
import NavBar from './app/components/navBar';
import Entertaiments from './app/components/Entertaiments';
import Menu from './app/components/Menu';
import Actions from './app/components/Actions';
import Contacts from './app/components/Contacts';
import NumberList from './app/components/NumberList';
import Booked from './app/components/pages/Booked';
import Main from './app/components/Main';
import LoginForm from './app/components/common/form/loginForm';
import RegisterForm from './app/components/common/form/registerForm';
import RoomPage from './app/components/pages/roomPage';

//Layouts
import AppLoader from './utils/appLoader';
import AuthLayout from './app/layout/AuthLayout';
import RoomsLayout from './app/layout/RoomsLayout';

const App = () => {
    const isLoggedIn = useSelector(getIsLoggedIn());

    return (
        <div className='container-xxl'>
            <AppLoader>
                <Header />

                <NavBar />
                <Routes>
                    <Route path='' element={<Main />} />
                    <Route path='auth' element={<AuthLayout />}>
                        <Route index element={<Navigate to='/auth/register' />} />
                        <Route path={'login'} element={<LoginForm />} />
                        <Route path={'register'} element={<RegisterForm />} />
                        <Route path='*' element={<Navigate to='/auth/register' />} />
                    </Route>
                    <Route path='booked' element={<Booked />} />
                    <Route path='contacts' element={<Contacts />} />
                    <Route path='menu' element={<Menu />} />
                    <Route path='entertaiments' element={<Entertaiments />} />
                    <Route path='actions' element={<Actions />} />
                    <Route path='all' element={<RoomsLayout />}>
                        <Route index element={<NumberList />} />
                        <Route path=':roomId' element={<RoomPage />} />
                    </Route>

                    {/* <ProtectedRoute path='/:userId?/edit?' component={UserCard} />
                    <ProtectedRoute path='/reviews' component={Reviews} />
                    <Route path='/userCard' component={UserCard} />
                    <Route path='/logout' component={LogOut} />
                    <Route path='/all/:roomId?' component={HotelNumber} />
                    <Navigate to='/' />
                     */}
                    <Route path='*' element={<Navigate to='' />} />
                </Routes>
            </AppLoader>
            {!isLoggedIn && <Footer />}
        </div>
    );
};
const AppWithStoreAndRoutes = withRedux(withRouter(App));
export default AppWithStoreAndRoutes;
