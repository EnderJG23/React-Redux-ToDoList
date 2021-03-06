import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import Reducer from './reducers';

const store = createStore(
    Reducer,
    compose(applyMiddleware(thunk),
        typeof window === 'object' &&
            typeof window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ !== 'undefined' ?
                window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
    )
);

export default store;