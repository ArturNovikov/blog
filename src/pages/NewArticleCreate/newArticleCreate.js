/* eslint-disable */
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

import ApiService from '../../services/apiService';

import styles from './newArticleCreate.module.scss';

const NewArticleCreate = () => {
  const [tags, setTags] = useState(['']);

  const addTag = () => {
    event.preventDefault();
    setTags([...tags, ' ']);
    console.log(tags);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm();

  const apiService = new ApiService();

  const articleDataFix = (newArticleData) => {
    const tagsArray = Object.entries(newArticleData)
      .filter(([tag]) => tag.startsWith('tags'))
      .map(([, value]) => value);

    let resultData = {
      title: newArticleData.title,
      description: newArticleData.shortDescription,
      body: newArticleData.text,
      tagList: tagsArray,
    };

    return resultData;
  };

  const onSubmit = async (newArticleData) => {
    const resultData = articleDataFix(newArticleData);
    console.log('resultData from function:', resultData);
    try {
      const response = await apiService.postNewArticle(resultData);
      console.log('response with tags:', response);
    } catch (error) {
      console.error('Post NewArticleCreate error: ', error.message);
    }
  };

  return (
    <div className={styles.CreateContainer}>
      <h1 className={styles.CreateContainer__title}>Create new article</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Title</label>
          <input
            className={styles.titleInput}
            text="text"
            name="title"
            placeholder="Title"
            {...register('title', {
              required: true,
            })}
          />
        </div>
        <div>
          <label>Short description</label>
          <input
            className={styles.titleInput}
            text="text"
            name="shortDescription"
            placeholder="Short description"
            {...register('shortDescription', {
              required: true,
            })}
          />
        </div>
        <div>
          <label>Text</label>
          <textarea
            className={styles.textarea}
            rows="4"
            name="text"
            placeholder="Text"
            {...register('text', {
              required: true,
            })}
          />
        </div>
        {tags.map((tag, index) => (
          <div key={index}>
            <label>Tags</label>
            <div>
              <input
                className={styles.tags}
                text="tags"
                name={`tags${index}`}
                placeholder="tags"
                {...register(`tags${index}`, {
                  required: false,
                })}
              />
              <button className={styles.btnDeleteTag}>Delete</button>
              {index + 1 === tags.length && (
                <button className={styles.btnAddTag} onClick={addTag}>
                  Add tag
                </button>
              )}
            </div>
          </div>
        ))}
        <button className={styles.btnSend} type="submit">
          Send
        </button>
      </form>
    </div>
  );
};

export default NewArticleCreate;
