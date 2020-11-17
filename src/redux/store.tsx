import { createStore, combineReducers } from 'redux';
import msgReducer from './msgReducer';

const store = createStore(combineReducers({
    msgReducer
}));

export default store;

store.subscribe(() => {
    console.log(store.getState())
});

// window.state = store.getState