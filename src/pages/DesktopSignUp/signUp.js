import React, { useState } from 'react';

import styles from './signUp.module.scss';

const SignUp = () => {
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

  const handleCheckboxChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      agree: e.target.checked,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Implement the submit logic here
    console.log(formData);
  };

  return (
    <div className={styles.signUpContainer}>
      <h1>Create new account</h1>
      <form onSubmit={handleSubmit}>
        <label>Username</label>
        <input type="text" name="username" placeholder="Username" onChange={handleChange} />
        <label>Email address</label>
        <input type="email" name="email" placeholder="Email address" onChange={handleChange} />
        <label>Password</label>
        <input type="password" name="password" placeholder="Password" onChange={handleChange} />
        <label>Repeat Password</label>
        <input type="password" name="confirmPassword" placeholder="Repeat Password" onChange={handleChange} />
        <div className={styles.agreeCheckbox}>
          <input type="checkbox" name="agree" onChange={handleCheckboxChange} />
          <label>I agree to the processing of my personal information</label>
        </div>
        <button type="submit">Create</button>
      </form>
      <div className={styles.alternative}>
        Already have an account? <a href="#">Sign In</a>
      </div>
    </div>
  );
};

export default SignUp;
