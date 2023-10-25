import React, { useState } from 'react';

import styles from './authorised.module.scss';

const Authorised = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    avatarUrl: '',
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
    <div className={styles.authorisedContainer}>
      <h1>Edit Profile</h1>
      <form onSubmit={handleSubmit}>
        <label>Username</label>
        <input type="text" name="username" placeholder="Username" onChange={handleChange} />
        <label>Email address</label>
        <input type="email" name="email" placeholder="Email address" onChange={handleChange} />
        <label>New password</label>
        <input type="password" name="password" placeholder="New password" onChange={handleChange} />
        <label>Avatar image (url)</label>
        <input type="text" name="avatarUrl" placeholder="Avatar image" onChange={handleChange} />
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default Authorised;
