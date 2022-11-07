import React, { useEffect, useState } from 'react';
import TextField from '../../textField';
import { validator } from '../../../../utils/validator';
import { useDispatch, useSelector } from 'react-redux';
import { getAuthErrors, login } from '../../../../redux/slices/userSlice';
import { NavLink } from 'react-router-dom';

const LoginForm = () => {
    const dispatch = useDispatch();
    const [data, setData] = useState({ email: '', password: '' });
    const [errors, setErrors] = useState({});
    const loginError = useSelector(getAuthErrors());
    const handleChange = ({ target }) => {
        setData((prevState) => ({
            ...prevState,
            [target.name]: target.value,
        }));
    };

    const validatorConfig = {
        email: {
            isRequired: {
                message: 'Электронная почта обязательна для заполнения',
            },
            isEmail: {
                message: 'Email введен некорректно',
            },
        },
        password: {
            isRequired: {
                message: 'Пароль обязателен для заполнения',
            },
            isCapitalSymbol: {
                message: 'Пароль должен содержать хотя бы одну заглавную букву',
            },
            isContainDigit: {
                message: 'Пароль должен содержать хотя бы одно число',
            },
            min: {
                message: 'Пароль должен состоять минимум из 8 символов',
                value: 8,
            },
        },
    };

    const validate = () => {
        const errors = validator(data, validatorConfig);
        setErrors(errors);
        return Object.keys(errors).length === 0;
    };
    useEffect(() => {
        validate();
    }, [data]);

    const isValid = Object.keys(errors).length === 0;
    const handleSubmit = (e) => {
        e.preventDefault();
        const isValid = validate();
        if (!isValid) return;
        const redirect = '/all';
        dispatch(login({ payload: data, redirect }));
    };

    return (
        <>
            <h3 className='mb-4'>Войти</h3>
            <form onSubmit={handleSubmit}>
                <TextField
                    label='Электронная почта'
                    name='email'
                    value={data.email}
                    onChange={handleChange}
                    error={errors.email}
                />
                <TextField
                    label='Пароль'
                    type='password'
                    name='password'
                    value={data.password}
                    onChange={handleChange}
                    error={errors.password}
                />
                {loginError && <p className='text-danger'>{loginError}</p>}
                <span>
                    Еще не регистрировались?{' '}
                    <NavLink to='/auth/register'>
                        <button className='btn btn-link'> регистрация</button>
                    </NavLink>
                </span>
                <button type='submit' disabled={!isValid} className='btn btn-primary w-100 mx-auto'>
                    вход
                </button>
            </form>
        </>
    );
};

export default LoginForm;
