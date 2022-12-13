// Libraries
import React from 'react';
import { Link } from 'react-router-dom';

//Redux
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from '../../redux/slices/userSlice';

// Layouts
import NavProfile from '../layout/navProfile';

const NavBar = () => {
    const isLoggedIn = useSelector(getIsLoggedIn());
    const { items } = useSelector((state) => state.booked);
    const links = [
        { id: 1, path: 'all', title: 'Все номера' },
        { id: 2, path: 'actions', title: 'Акции' },
        { id: 3, path: 'entertaiments', title: 'Развлечения' },
        { id: 4, path: 'menu', title: 'Меню ресторана' },
        { id: 5, path: 'contacts', title: 'Контакты' },
    ];

    return (
        <nav className='navbar mb-4'>
            <div className='container-fluid d-flex justify-content-space-between'>
                <ul className='nav shadow'>
                    {links.map(({ id, path, title }) => (
                        <li key={id} className='nav-item'>
                            <Link to={path} className='nav-link'>
                                {title}
                            </Link>
                        </li>
                    ))}
                    {isLoggedIn ? (
                        <NavProfile />
                    ) : (
                        <li className='nav-item'>
                            <Link to='/auth/login' aria-current='page' className='nav-link'>
                                Войти / Зарегистрироваться
                            </Link>
                        </li>
                    )}
                </ul>
                <div className='booked'>
                    <Link
                        to='/booked'
                        aria-current='page'
                        id={items.roomId}
                        className=' btn btn-outline-warning'>
                        Выбранные номера <i>{items.length}</i>
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
