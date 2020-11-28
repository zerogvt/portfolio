import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Switch, Route } from 'react-router-dom';
import history from 'history/browser';
import Joke from './components/Joke'
import App from './components/App';

ReactDOM.render(
    <Router history={history}>
        <Switch>
            <Route exact path='/' component={App} />
            <Route path='/joke' component={Joke} />
        </Switch>
    </Router>,
    document.getElementById('root')
);
