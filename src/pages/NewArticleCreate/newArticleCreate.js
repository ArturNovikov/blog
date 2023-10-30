/* eslint-disable */
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

import ApiService from '../../services/apiService';

import styles from './newArticleCreate.module.scss';

const NewArticleCreate = () => {
  const [tags, setTags] = useState([{ id: generateID(), value: '' }]);

  console.log(tags);

  const addTag = (event) => {
    event.preventDefault();
    if (tags.length >= 10) return null;
    setTags([...tags, { id: generateID(), value: '' }]);
    console.log(tags);
  };

  const deleteTag = (idToDelete, event) => {
    event.preventDefault();
    console.log(idToDelete);
    if (tags.length === 1) return null;
    const newTags = tags.filter((tag) => idToDelete !== tag.id);
    setTags(newTags);
  };

  const {
    register,
    handleSubmit,
    /* setValue, */
    /* watch, */
    /* formState: { errors },
    setError, */
  } = useForm();

  const handleTagChange = (id, newValue) => {
    setTags(tags.map((tag) => (tag.id === id ? { ...tag, value: newValue } : tag)));
  };

  function generateID() {
    return Date.now().toString(36) + Math.random().toString(36).substr(2, 6).toUpperCase();
  }

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
            type="text"
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
            type="text"
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
        {tags.map((tag) => (
          <div key={tag.id} className={styles.tagsContainer}>
            {tag.id === tags[0].id && <label>Tags</label>}
            <div>
              <input
                className={styles.tags}
                type="text"
                name={`tags${tag.id}`}
                placeholder="tags"
                value={tag.value}
                onChange={(e) => handleTagChange(tag.id, e.target.value)}
              />
              <button className={styles.btnDeleteTag} onClick={(event) => deleteTag(tag.id, event)}>
                Delete
              </button>
              {tags.indexOf(tag) === tags.length - 1 && (
                <button className={styles.btnAddTag} onClick={(event) => addTag(event)}>
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
