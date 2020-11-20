import { createStore, combineReducers, applyMiddleware } from 'redux';
import msgReducer from './msgReducer';
import thunkMiddleware from 'redux-thunk';

const rootReducer = combineReducers({
    msgReducer
});

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

type rootReducerType = typeof rootReducer;
export type appStateType = ReturnType<rootReducerType>;

export default store;

store.subscribe(() => {
    console.log(store.getState())
});


// @ts-ignore
window.state = store.getState