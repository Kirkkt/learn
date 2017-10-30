import React from 'react';
import {Router, Route, hashHistory} from 'react-router';
import {render} from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Main from './Main';
import First from './First';
import Second from './Second';
import Third from './Third';
import NotFound from './NotFound';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

// Render the main app react component into the app div.
// For more details see: https://facebook.github.io/react/docs/top-level-api.html#react.render
render((
  <Router history={hashHistory}>
    <Route path="/" component={Main} />
    <Route path="/first" component={First} />
    <Route path="/second" component={Second} />
    <Route path="/third" component={Third} />
    <Route path="*" component={NotFound} />
  </Router>
), document.getElementById('app'));
