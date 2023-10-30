/* eslint-disable */
import React from 'react';
import { useDispatch } from 'react-redux';
import { useForm, useFieldArray } from 'react-hook-form';

import { postArticle } from '../../store/actionCreators/fetchCreateArticleRequest';

import styles from './newArticleCreate.module.scss';

const NewArticleCreate = () => {
  const dispatch = useDispatch();

  const { register, handleSubmit, control } = useForm({
    defaultValues: {
      tags: [{ value: '' }],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'tags',
  });

  const addTag = () => {
    if (fields.length >= 10) return;
    append({ value: '' });
  };

  const deleteTag = (index) => {
    if (fields.length === 1) return;
    remove(index);
  };

  const articleDataFix = (newArticleData) => {
    console.log(newArticleData);
    return {
      title: newArticleData.title,
      description: newArticleData.shortDescription,
      body: newArticleData.text,
      tagList: newArticleData.tags.map((tag) => tag.value).filter((tag) => tag),
    };
  };

  const onSubmit = async (newArticleData) => {
    const resultData = articleDataFix(newArticleData);
    console.log(resultData);
    dispatch(postArticle(resultData)).then((data) => {
      console.log(data);
    });
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
        {fields.map((tag, index) => (
          <div key={tag.id} className={styles.tagsContainer}>
            {index === 0 && <label>Tags</label>}
            <div>
              <input
                className={styles.tags}
                type="text"
                name={`tags[${index}].value`}
                placeholder="tags"
                {...register(`tags[${index}].value`)}
                defaultValue={tag.value}
              />
              <button className={styles.btnDeleteTag} onClick={() => deleteTag(index)}>
                Delete
              </button>
              {index === fields.length - 1 && (
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
