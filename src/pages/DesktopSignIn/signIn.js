import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import classNames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';

import { loginUser } from '../../store/actionCreators/fetchLoginUser';
import { setIsAuthorised } from '../../store/actionCreators/setIsAuthorized';

import styles from './signIn.module.scss';

const SignIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuthorised = useSelector((state) => state.isAuthorised.isAuthorised);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    console.log(isAuthorised);
  }, [isAuthorised]);

  const onSubmit = (data) => {
    dispatch(loginUser(data))
      .then((response) => {
        if (response.user.token) {
          localStorage.setItem('token', response.user.token);
          dispatch(setIsAuthorised(true));
          navigate('/');
        }
      })
      .catch((error) => {
        console.error('Login error: ' + error.message);
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
        {errors.email && <p>Invalid email.</p>}
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
        {errors.password && <p>Invalid password.</p>}
        <button type="submit">Login</button>
      </form>
      <div className={styles.alternative}>
        Do not have an account? <Link to="/sign-up">Sign Up</Link>
      </div>
    </div>
  );
};

export default SignIn;
