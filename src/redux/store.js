import { createStore, combineReducers, applyMiddleware } from 'redux';

const dummyReducer = (state = {}, action) => state;

const rootReducer = combineReducers({
    dummy: dummyReducer,
});

const store = createStore(
    rootReducer,
    applyMiddleware()
);

export default store;