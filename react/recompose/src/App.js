import React from 'react';
import { Link, Route } from 'react-router-dom';

import './App.css';
import Base from './pages/Base';
import DefaultProps from './pages/DefaultProps';
import RenameProps from './pages/RenameProps';
import RenameProp from './pages/RenameProp';
import WithState from './pages/WithState';
import MapPropsSimple from './pages/MapPropsSimple';
import MapPropsFunctional from './pages/MapPropsFunctional';
import WithHandlers from './pages/WithHandlers';
import Branch from './pages/Branch';
import RenderComponent from './pages/RenderComponent';
import SetPropTypes from './pages/SetPropTypes';
import SetDisplayName from './pages/SetDisplayName';
import Lifecycle from './pages/Lifecycle';
import RenderNothing from './pages/RenderNothing';

export default () => (
  <div>
    <nav className="nav">
      <Link className="navItem" to="/">Base</Link>
      <Link className="navItem" to="/DefaultProps">DefaultProps</Link>
      <Link className="navItem" to="/RenameProp">RenameProp</Link>
      <Link className="navItem" to="/RenameProps">RenameProps</Link>
      <Link className="navItem" to="/WithState">WithState</Link>
      <Link className="navItem" to="/MapPropsSimple">MapPropsSimple</Link>
      <Link className="navItem" to="/MapPropsFunctional">MapPropsFunctional</Link>
      <Link className="navItem" to="/WithHandlers">WithHandlers</Link>
      <Link className="navItem" to="/Branch">Branch</Link>
      <Link className="navItem" to="/RenderComponent">RenderComponent</Link>
      <Link className="navItem" to="/SetPropTypes">SetPropTypes</Link>
      <br/>
      <Link className="navItem" to="/SetDisplayName">SetDisplayName</Link>
      <Link className="navItem" to="/Lifecycle">Lifecycle</Link>
      <Link className="navItem" to="/RenderNothing">RenderNothing</Link>
    </nav>
    <div>
      <Route exact path="/" component={Base}/>
      <Route exact path="/DefaultProps" component={DefaultProps}/>
      <Route exact path="/RenameProp" component={RenameProp}/>
      <Route exact path="/RenameProps" component={RenameProps}/>
      <Route exact path="/WithState" component={WithState}/>
      <Route exact path="/MapPropsSimple" component={MapPropsSimple}/>
      <Route exact path="/MapPropsFunctional" component={MapPropsFunctional}/>
      <Route exact path="/WithHandlers" component={WithHandlers}/>
      <Route exact path="/Branch" component={Branch}/>
      <Route exact path="/RenderComponent" component={RenderComponent}/>
      <Route exact path="/SetPropTypes" component={SetPropTypes}/>
      <Route exact path="/SetDisplayName" component={SetDisplayName}/>
      <Route exact path="/Lifecycle" component={Lifecycle}/>
      <Route exact path="/RenderNothing" component={RenderNothing}/>
    </div>
  </div>
);
