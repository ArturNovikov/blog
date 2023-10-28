import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import classNames from 'classnames';
import { useDispatch } from 'react-redux';

import { loginUser } from '../../store/actionCreators/fetchLoginUser';
import { setIsAuthorised } from '../../store/actionCreators/setIsAuthorized';

import styles from './signIn.module.scss';

const SignIn = () => {
  const [errorMessage, setErrorMessage] = useState();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm();

  const onSubmit = (data) => {
    dispatch(loginUser(data))
      .then((response) => {
        if (response.user.token) {
          localStorage.setItem('token', response.user.token);
          dispatch(setIsAuthorised(true));
          navigate('/');
        }
      })
      .catch(({ error, status }) => {
        if (status === 422) {
          if (error.errors && error.errors['email or password']) {
            setError('email', {
              type: 'manual',
              message: `Email or password ${error.errors['email or password']}.`,
            });
            setError('password', {
              type: 'manual',
              message: `Email or password ${error.errors['email or password']}.`,
            });
          }
        } else {
          setErrorMessage('Registration error. Please, try again!');
        }
      });
  };

  return (
    <div className={styles.signInContainer}>
      <h1>Sign In</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Email address</label>
        <input
          className={classNames({
            [styles.emailError]: errors.email,
          })}
          type="email"
          name="email"
          placeholder="Email address"
          {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
        />
        {errors.email && <p>{errors.email.message}</p>}
        <label>Password</label>
        <input
          className={classNames({
            [styles.passwordError]: errors.password,
          })}
          type="password"
          name="password"
          placeholder="Password"
          {...register('password', { required: true, minLength: 6, maxLength: 40 })}
        />
        {errors.password && <p>{errors.password.message}</p>}
        <button type="submit">Login</button>
      </form>
      <div className={styles.alternative}>
        Do not have an account? <Link to="/sign-up">Sign Up</Link>
      </div>
      {errorMessage && <div className={styles.errorMessage}>{errorMessage}</div>}
    </div>
  );
};

export default SignIn;
