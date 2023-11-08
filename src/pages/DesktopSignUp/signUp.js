import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import classNames from 'classnames';
import { Link, useNavigate } from 'react-router-dom';

import { setIsAuthorised } from '../../store/actionCreators/setIsAuthorized';
import { registerUser } from '../../store/actionCreators/fetchRegisterUser';
import { HOME, SIGN_IN } from '../../utils/routes';

import styles from './signUp.module.scss';

const SignUp = () => {
  const [errorMessage, setErrorMessage] = useState();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    setError,
  } = useForm();

  const onSubmit = (data) => {
    dispatch(registerUser(data))
      .then((data) => {
        if (data.user.token) {
          localStorage.setItem('token', data.user.token);
          dispatch(setIsAuthorised(true));
          navigate(HOME);
        }
      })
      .catch(({ error, status }) => {
        if (status === 422) {
          if (error.errors && error.errors.email) {
            setError('email', {
              type: 'manual',
              message: error.errors.email,
            });

            if (error.errors.username) {
              setError('username', {
                type: 'manual',
                message: error.errors.username,
              });
            }
          }
          setErrorMessage(null);
        } else {
          setErrorMessage('Registration error. Please, try again!');
        }
      });
  };

  return (
    <div className={styles.signUpContainer}>
      <h1>Create new account</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Username</label>
        <input
          className={classNames({
            [styles.usernameError]: errors.username,
          })}
          type="text"
          name="username"
          placeholder="Username"
          {...register('username', {
            required: true,
            minLength: 3,
            maxLength: 20,
          })}
        />
        {errors.username && <p>{errors.username.message}</p>}
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
        {!errors.password && errors.confirmPassword ? (
          <p>Passwords should match.</p>
        ) : (
          errors.password && <p>Password should be between 6 and 40 characters.</p>
        )}
        <label>Repeat Password</label>
        <input
          className={classNames({
            [styles.confirmPasswordError]: errors.confirmPassword,
          })}
          type="password"
          name="confirmPassword"
          placeholder="Repeat Password"
          {...register('confirmPassword', { validate: (value) => value === watch('password') })}
        />
        {errors.confirmPassword && <p>Passwords should match.</p>}
        <div className={styles.agreeCheckbox}>
          <input
            className={classNames({
              [styles.agreeError]: errors.agree,
            })}
            type="checkbox"
            name="agree"
            {...register('agree', { required: true })}
          />
          {errors.agree ? (
            <p>You must agree before submitting.</p>
          ) : (
            <label>I agree to the processing of my personal information</label>
          )}
        </div>
        <button type="submit">Create</button>
      </form>
      <div className={styles.alternative}>
        Already have an account? <Link to={SIGN_IN}>Sign In</Link>
      </div>
      {errorMessage && <div className={styles.errorMessage}>{errorMessage}</div>}
    </div>
  );
};

export default SignUp;
