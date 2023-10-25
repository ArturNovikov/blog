import React, { useState } from 'react';

import styles from './signIn.module.scss';

const SignIn = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    agree: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Implement the submit logic here
    console.log(formData);
  };

  return (
    <div className={styles.signInContainer}>
      <h1>Create new account</h1>
      <form onSubmit={handleSubmit}>
        <label>Email address</label>
        <input type="email" name="email" placeholder="Email address" onChange={handleChange} />
        <label>Password</label>
        <input type="password" name="password" placeholder="Password" onChange={handleChange} />
        <button type="login">Login</button>
      </form>
      <div className={styles.alternative}>
        Do not have an account? <a href="#">Sign Up</a>
      </div>
    </div>
  );
};

export default SignIn;
