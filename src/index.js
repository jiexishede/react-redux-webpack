import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createHistory } from 'history';
import { Router } from 'react-router';
import routes from './routes/';
import configureStore from './store/configureStore';
// 引入样式
import './assets/sass/index.scss';

const store = configureStore();

render(
    <Provider store={store}>
        <Router history={createHistory()}>
            {routes}
        </Router>
    </Provider>,
    document.getElementById('root')
);
