import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import { createStore } from './redux/createStore';
import { Provider } from 'react-redux';

import App from './app';
import history from './utils/history';

const store = createStore();

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <App />
        </Router>
    </Provider>,

    document.getElementById('root'),
);
