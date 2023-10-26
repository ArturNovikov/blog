import React from 'react';
import { useForm } from 'react-hook-form';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

import styles from './signUp.module.scss';

const SignUp = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
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
          {...register('username', { required: true, minLength: 3, maxLength: 20 })}
        />
        {errors.username && <p>Username should be between 3 and 20 characters.</p>}
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
        {errors.email && <p>Email is required and should be valid.</p>}
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
        {errors.password && <p>Password should be between 6 and 40 characters.</p>}
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
          {errors.agree && <p>You must agree before submitting.</p>}
          <label>I agree to the processing of my personal information</label>
        </div>
        <button type="submit">Create</button>
      </form>
      <div className={styles.alternative}>
        Already have an account? <Link to="/sign-in">Sign In</Link>
      </div>
    </div>
  );
};

export default SignUp;
