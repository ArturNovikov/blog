import { createStore, combineReducers, applyMiddleware } from 'redux';

const dummyReducer = (state = {}) => state;

const rootReducer = combineReducers({
  dummy: dummyReducer,
});

const store = createStore(rootReducer, applyMiddleware());

export default store;
