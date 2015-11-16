import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './containers/App';
import configureStore from './store/configureStore';
// 引入样式
import './assets/sass/index.scss';

const store = configureStore();

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
