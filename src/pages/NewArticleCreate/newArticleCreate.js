/* eslint-disable */
import React, { useState } from 'react';

import styles from './newArticleCreate.module.scss';

const NewArticleCreate = () => {
  return (
    <div className={styles.CreateContainer}>
      <h1 className={styles.CreateContainer__title}>Create new article</h1>
      <form /* onsubmit={handleSubmit(onSubmit)} */>
        <div>
          <label>Title</label>
          <input className={styles.titleInput} text="text" name="tittle" placeholder="Title" />
        </div>
        <div>
          <label>Short description</label>
          <input className={styles.titleInput} text="text" name="shortDescription" placeholder="Short description" />
        </div>
        <div>
          <label>Text</label>
          <textarea className={styles.textarea} rows="4" name="textarea" placeholder="Text" />
        </div>
        <div>
          <label>Tags</label>
          <div>
            <input className={styles.tags} text="tags" name="tags" placeholder="tags" />
            <button className={styles.btnDeleteTag}>Delete</button>
          </div>
          <div>
            <input className={styles.tags} text="tags" name="tags" placeholder="tags" />
            <button className={styles.btnDeleteTag}>Delete</button>
            <button className={styles.btnAddTag}>Add tag</button>
          </div>
        </div>
        <button className={styles.btnSend} type="submit">
          Send
        </button>
      </form>
    </div>
  );
};

export default NewArticleCreate;
