import { createStore, combineReducers, applyMiddleware } from 'redux';
import msgReducer from './msgReducer';
import thunkMiddleware from 'redux-thunk';

const store = createStore(combineReducers({
    msgReducer
}), applyMiddleware(thunkMiddleware));

export default store;

store.subscribe(() => {
    console.log(store.getState())
});

// window.state = store.getState