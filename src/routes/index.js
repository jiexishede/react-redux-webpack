import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from '../containers/App';
import Home from '../components/pages/Home/';
import Line_1 from '../components/pages/Line/1';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={Home} />

        <Route path="line">
            <Route path="1" component={Line_1} />
        </Route>
    </Route>
);