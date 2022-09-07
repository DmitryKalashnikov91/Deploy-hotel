import React from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import LoginForm from '../components/common/form/loginForm';
import RegisterForm from '../components/common/form/registerForm';

const Login = () => {
    const { type } = useParams();

    const [formType, setFormType] = useState(type === 'register' ? type : 'login');

    const toggleFormType = () => {
        setFormType((prevState) => (prevState === 'register' ? 'login' : 'register'));
    };

    return (
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-md-6 offset-md-3 shadow p-4 text-light'>
                    {formType === 'register' ? (
                        <>
                            <h3 className='mb-4'>Registration</h3>
                            <RegisterForm />
                            <p>
                                Already have account?{' '}
                                <button className='btn btn-link' onClick={toggleFormType}>
                                    {' '}
                                    Sign in
                                </button>
                            </p>
                        </>
                    ) : (
                        <>
                            <h3 className='mb-4'>Login</h3>
                            <LoginForm />
                            <p>
                                Don't have account?{' '}
                                <button className='btn btn-link' onClick={toggleFormType}>
                                    {' '}
                                    Sign up
                                </button>
                            </p>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Login;
