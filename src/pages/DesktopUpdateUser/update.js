import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import classNames from 'classnames';

import { updateUser } from '../../store/actionCreators/fetchUpdateUser';
import { setUserName } from '../../store/actionCreators/setUserName';
import { setUserImage } from '../../store/actionCreators/setUserImage';

import styles from './update.module.scss';

const Update = () => {
  const [errorMessage, setErrorMessage] = useState();
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm();

  const onSubmit = (data) => {
    const updateData = {
      email: data.email,
      username: data.username,
      image: data.avatarUrl || null,
    };

    dispatch(updateUser(updateData))
      .then((response) => {
        if (response.user.token) {
          dispatch(setUserName(response.user.username));
          dispatch(setUserImage(response.user.image));
          alert('Updated!');
        }
      })
      .catch(({ error, status }) => {
        if (status === 422) {
          if (error.errors && error.errors.username) {
            setError('username', {
              type: 'manual',
              message: `Username ${error.errors.username}`,
            });
          }

          if (error.errors && error.errors.email) {
            setError('email', {
              type: 'manual',
              message: `Email ${error.errors.email}`,
            });
          }
          setErrorMessage(null);
        } else {
          setErrorMessage('Update error. Please, try again!');
        }
      });
  };

  return (
    <div className={styles.authorisedContainer}>
      <h1>Edit Profile</h1>
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
            pattern: /\S/,
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
        <label>New password</label>
        <input
          className={classNames({
            [styles.passwordError]: errors.passwordUpdate,
          })}
          type="password"
          name="passwordUpdate"
          placeholder="New password"
          {...register('passwordUpdate', { required: true, minLength: 6, maxLength: 40 })}
        />
        {errors.passwordUpdate && <p>Password should be between 6 and 40 characters.</p>}
        <label>Avatar image (url)</label>
        <input
          className={classNames({
            [styles.avatarUrlError]: errors.avatarUrl,
          })}
          type="text"
          name="avatarUrl"
          placeholder="Avatar image"
          {...register('avatarUrl', {
            required: false,
            pattern: {
              value: /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/,
              message: 'Please, enter a valid URL',
            },
          })}
        />
        {errors.avatarUrl && <p>{errors.avatarUrl.message}</p>}
        <button type="submit">Save</button>
      </form>
      {errorMessage && <div className={styles.errorMessage}>{errorMessage}</div>}
    </div>
  );
};

export default Update;
