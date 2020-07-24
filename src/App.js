import React, {useState, useEffect} from 'react'
import {Route, Switch, Link} from 'react-router-dom';

import Home from './components/Home';
import Activism from './components/Activism'
import Article from './components/Article'

function App() {
  
  return (
    <div>
      <Switch>
        <Route exact path='/' exact render={(routerProps) => <Home routerProps={routerProps} />} />
        <Route exact path='/activism' render={(routerProps) => <Activism routerProps={routerProps} />} />
        
        <Route exact path="/article/:slug">
          <Article />
        </Route>
      </Switch>  
    </div>
  );
}

export default App;
