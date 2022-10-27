import { Navigate } from 'react-router-dom';
import Actions from './app/components/Actions';
import LoginForm from './app/components/common/form/loginForm';
import RegisterForm from './app/components/common/form/registerForm';
import Contacts from './app/components/Contacts';
import Entertaiments from './app/components/Entertaiments';
import Main from './app/components/Main';
import Menu from './app/components/Menu';
import NumberList from './app/components/NumberList';
import Booked from './app/components/pages/Booked';
import Reviews from './app/components/pages/reviews/reviews';
import RoomPage from './app/components/pages/roomPage';
import AuthLayout from './app/layout/AuthLayout';
import RoomsLayout from './app/layout/RoomsLayout';

const routes = (isLoggedIn) => [
    //main
    {
        path: '/',
        element: <Main />,
    },
    // Auth
    {
        path: 'auth',
        element: <AuthLayout />,
        children: [
            {
                path: '',
                element: <Navigate to='/auth/register' />,
            },
            {
                path: 'logIn',
                element: <LoginForm />,
            },
            {
                path: 'register',
                element: <RegisterForm />,
            },
            {
                path: '*',
                element: <Navigate to='/auth' />,
            },
        ],
    },
    // Numbers
    {
        path: 'all',
        element: <RoomsLayout />,
        children: [
            {
                path: '',
                element: <NumberList />,
            },
            {
                path: ':roomId',
                element: <RoomPage />,
            },
        ],
    },
    {
        path: 'booked',
        element: <Booked />,
    },
    {
        path: 'contacts',
        element: <Contacts />,
    },
    {
        path: 'menu',
        element: <Menu />,
    },
    {
        path: 'entertaiments',
        element: <Entertaiments />,
    },
    {
        path: 'actions',
        element: <Actions />,
    },
    {
        path: 'reviews',
        element: isLoggedIn ? <Reviews /> : <Navigate to='/auth/register' />,
    },
    // Redirect
    {
        path: '*',
        element: <Navigate to='/auth/register' />,
    },
];

export default routes;
