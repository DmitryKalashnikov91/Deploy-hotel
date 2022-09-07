import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from '../../redux/slices/userSlice';
import NavProfile from '../layout/navProfile';

const NavBar = () => {
    const isLoggedIn = useSelector(getIsLoggedIn());
    const { items } = useSelector((state) => state.booked);

    return (
        <nav className='navbar mb-4'>
            <div className='container-fluid d-flex justify-content-space-between'>
                <ul className='nav shadow'>
                    <li className='nav-item'>
                        <Link to='/All' className='nav-link'>
                            Все номера
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/actions' className='nav-link'>
                            Акции
                        </Link>
                    </li>

                    <li className='nav-item'>
                        <Link to='/entertaiments' aria-current='page' className='nav-link'>
                            Развлечения
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/menu' aria-current='page' className='nav-link'>
                            Меню ресторана
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/contacts' aria-current='page' className='nav-link'>
                            Контакты
                        </Link>
                    </li>
                    {isLoggedIn ? (
                        <NavProfile />
                    ) : (
                        <li className='nav-item'>
                            <Link to='/login' aria-current='page' className='nav-link'>
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
                        className=' btn btn-outline-primary'>
                        Выбранные номера <i>{items.length}</i>
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
