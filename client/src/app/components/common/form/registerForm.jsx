import React, { useEffect, useState } from 'react';
import TextField from '../../textField';
import { validator } from '../../../../utils/validator';
import { useDispatch } from 'react-redux';
import { signUp } from '../../../../redux/slices/userSlice';
import { NavLink, useNavigate } from 'react-router-dom';

const RegisterForm = () => {
    const [data, setData] = useState({ email: '', password: '', name: '' });
    const [errors, setErrors] = useState({});

    const navigate = useNavigate();
    const dispatch = useDispatch();
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
        name: {
            isRequired: {
                message: 'Имя обязательно для заполнения',
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
        licence: {
            isRequired: {
                message:
                    'Вы не можете использовать наш сервис без подтверждения лицензионного соглашения',
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

    const handleSubmit = async (e) => {
        e.preventDefault();
        validate();
        const isValid = validate();
        if (!isValid) return;
        dispatch(signUp(data));
        navigate('/All');
    };

    return (
        <>
            <h3 className='mb-4'>Registration</h3>
            <form onSubmit={handleSubmit}>
                <TextField
                    label='Имя Фамилия'
                    name='name'
                    value={data.name}
                    onChange={handleChange}
                    error={errors.name}
                />
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
                <p>
                    Already have account?{' '}
                    <NavLink to='/auth/logIn'>
                        <button className='btn btn-link'> Sign in</button>
                    </NavLink>
                </p>
                <button disabled={!isValid} className='btn btn-primary w-100 mx-auto'>
                    Submit
                </button>
            </form>
        </>
    );
};

export default RegisterForm;
