import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm, useFieldArray } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';

import { postArticle } from '../../store/actionCreators/fetchCreateArticleRequest';
import { setCreatedStatus } from '../../store/actionCreators/setCreatedStatus';
import ApiService from '../../services/apiService';

import styles from './newArticleCreate.module.scss';

const NewArticleCreate = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { slug } = useParams();
  const editMode = slug !== undefined;

  const articleFromRedux = useSelector((state) => state.createArticle.data);
  const dataFindForEdit = useSelector((state) => state.articles.data);

  const { register, handleSubmit, control, reset } = useForm({
    defaultValues: {
      title: '',
      description: '',
      text: '',
      tags: [{ value: '' }],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'tags',
  });

  useEffect(() => {
    console.log('Edit mode: ', editMode);
    if (editMode && dataFindForEdit && slug) {
      const articleForEdit = dataFindForEdit.articles.find((article) => article.slug === slug);
      console.log('articleForEdit: ', articleForEdit);
      if (articleForEdit) {
        reset({
          title: articleForEdit.title,
          shortDescription: articleForEdit.description,
          text: articleForEdit.body,
          tags: articleForEdit.tagList.map((tag) => ({ value: tag })),
        });
      }
    }
  }, [articleFromRedux, editMode, slug, dataFindForEdit]);

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

  const apiService = new ApiService();

  const onSubmit = async (newArticleData) => {
    if (!editMode) {
      const resultData = articleDataFix(newArticleData);
      dispatch(postArticle(resultData)).then((data) => {
        if (data.article.slug) {
          dispatch(setCreatedStatus(true));
          navigate(`/articles/${data.article.slug}`);
          return;
        }
        return;
      });
    } else {
      console.log('EditMode!');
      const resultData = articleDataFix(newArticleData);
      try {
        const response = await apiService.updateAnArticle(resultData, slug);
        const data = await response;
        if (response) navigate('/');
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div className={styles.CreateContainer}>
      <h1 className={styles.CreateContainer__title}>{editMode ? 'Edit article' : 'Create new article'}</h1>
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
