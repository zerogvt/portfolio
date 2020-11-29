import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import history from 'history/browser';
import Joke from './components/Joke'
import App from './components/App';

const routing = (
    <Router history={history}>
            <Route exact path='/' component={App} />
            <Route path='/joke' component={Joke} />
    </Router>
)

ReactDOM.render(routing, document.getElementById('root'));
