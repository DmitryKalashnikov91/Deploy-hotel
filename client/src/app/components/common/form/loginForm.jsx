import React, { useEffect, useState } from 'react';
import TextField from '../../textField';
import { validator } from '../../../../utils/validator';
import { useDispatch } from 'react-redux';
import { login } from '../../../../redux/slices/userSlice';
import { NavLink, useNavigate } from 'react-router-dom';

const LoginForm = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [data, setData] = useState({ email: '', password: '' });
    const [errors, setErrors] = useState({});

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

    useEffect(() => {
        validate();
    }, [data]);

    const validate = () => {
        const errors = validator(data, validatorConfig);
        setErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const isValid = Object.keys(errors).length === 0;

    const handleSubmit = (e) => {
        e.preventDefault();
        const isValid = validate();
        if (!isValid) return;
        navigate('/All');
        dispatch(login({ payload: data }));
    };

    return (
        <>
            <h3 className='mb-4'>Login</h3>
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
                <span>
                    Don't have account?{' '}
                    <NavLink to='/auth/register'>
                        <button className='btn btn-link'> Sign up</button>
                    </NavLink>
                </span>
                <button type='submit' disabled={!isValid} className='btn btn-primary w-100 mx-auto'>
                    Submit
                </button>
            </form>
        </>
    );
};

export default LoginForm;
