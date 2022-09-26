// Libraries
import React, { useState } from 'react';
import Proptypes from 'prop-types';

const TextField = ({ label, type, name, value, onChange, error }) => {
    const [showPassword, setShowPassword] = useState(false);
    // const handleChange = ({ target }) => {
    //     onChange({ name: target.name, value: target.value });
    // };
    const getInputClasses = () => {
        return 'form-control' + (error ? ' is-invalid' : '');
    };

    const toggleShowPassword = () => {
        setShowPassword((prevstate) => !prevstate);
    };

    return (
        <div className='mb-4 text-light'>
            <label htmlFor={name}>{label}</label>
            <div className='input-group has-validation'>
                <input
                    type={showPassword ? 'text' : type}
                    id={name}
                    value={value}
                    onChange={onChange}
                    name={name}
                    className={getInputClasses()}
                />
                {type === 'password' && (
                    <button
                        className='btn btn-outline-secondary'
                        type='button'
                        onClick={toggleShowPassword}>
                        <i className={'bi bi-eye' + (showPassword ? '' : '-slash')}></i>
                    </button>
                )}
                {error && <div className='invalid-feedback'>{error}</div>}
            </div>
        </div>
    );
};

TextField.defaultProps = {
    type: 'text',
};

TextField.propTypes = {
    label: Proptypes.string,
    type: Proptypes.string,
    name: Proptypes.string,
    value: Proptypes.string,
    onChange: Proptypes.func,
    error: Proptypes.string,
};

export default TextField;
