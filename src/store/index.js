import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { storageMiddleware } from './middleware/storage'

import messagesReducer from './reducers/messagesReducer';

const rootReducer = combineReducers({
   messagesReducer
});


const enhancer = composeWithDevTools(applyMiddleware(storageMiddleware()))

const store = createStore(rootReducer, enhancer);


export { store };
