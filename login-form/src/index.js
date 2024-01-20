import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from './App';
import ProfilePage from './ProfilePage';

ReactDOM.render(
  <Router>
    <Switch>
      <Route path="/profile" component={ProfilePage} />
      <Route path="/" component={App} />
    </Switch>
  </Router>,
  document.getElementById('root')
);
