import React from 'react';
import { Link, Route, BrowserRouter, Redirect } from "react-router-dom"
import './App.css';

const Home = () => <div>Home content</div>
const Hot = () => (
  <div>
    <h1>
      Hot content
    </h1>
    <ul>
      <li><a href="/article/1">article 1</a></li>
      <li><a href="/article/2">article 2</a></li>
      <li><a href="/article/3">article 3</a></li>
    </ul>
  </div>
)
const Top = () => (
  <div>
    <h1>
      Top content
    </h1>
    <ul>
      <li><a href="/article/3">article 3</a></li>
      <li><a href="/article/2">article 2</a></li>
      <li><a href="/article/1">article 1</a></li>
    </ul>
  </div>
)
const Article = ({ match: { params: { id }}}) => <div>{`Article with id ${id}`}</div>
const NotFound = () => <div><h1>Page not found</h1></div>

const App = () => (
  <BrowserRouter>
    <div>
      <ul>
        <li><Link to="/">Home link</Link></li>
        <li><Link to="/hot">Hot link</Link></li>
        <li><Link to="/top">Top link</Link></li>
      </ul>
      <hr/>
      <Route exact path="/" component={Home}/>
      <Route path="/hot" component={Hot}/>
      <Route path="/top" component={Top}/>
      <Route path="/article/:id" component={Article}/>
      <Route path="/404" component={NotFound}/>
      <Redirect from='*' to='/404' />
    </div>
  </BrowserRouter>
);

export default App;
