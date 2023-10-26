import React from 'react';
import { useForm } from 'react-hook-form';
import classNames from 'classnames';

import styles from './authorised.module.scss';

const Authorised = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
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
          {...register('username', { required: true, minLength: 3, maxLength: 20 })}
        />
        {errors.username && <p>Username invalid.</p>}
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
        <label>New password</label>
        <input
          className={classNames({
            [styles.passwordError]: errors.password,
          })}
          type="password"
          name="password"
          placeholder="New password"
          {...register('password', { required: true, minLength: 6, maxLength: 40 })}
        />
        {errors.password && <p>Password should be different and from 6 to 40 characters.</p>}
        <label>Avatar image (url)</label>
        <input
          className={classNames({
            [styles.avatarUrlError]: errors.avatarUrl,
          })}
          type="text"
          name="avatarUrl"
          placeholder="Avatar image"
          {...register('avatarUrl', {
            required: true,
            pattern: {
              value: /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/,
              message: 'Please enter a valid URL',
            },
          })}
        />
        {errors.avatarUrl && <p>{errors.avatarUrl.message}</p>}
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default Authorised;
