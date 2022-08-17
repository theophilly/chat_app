import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import App from './App';
import { createStorageListener } from './store/utils/storage-listener';

window.store = store;

window.addEventListener('storage', createStorageListener(store))

ReactDOM.render(
    <Provider store={store}>
            <React.StrictMode>
                <Router>
                    <App />
                </Router>
            </React.StrictMode>
    </Provider>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
