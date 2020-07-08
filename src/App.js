import React from 'react';
import {Route, Switch, Link} from 'react-router-dom';

import Home from './components/Home';
import Activism from './components/Activism'

function App() {
  return (
    <div style={{margin: '3vh'}}>
      <Switch>
        <Route path='/' exact render={(routerProps) => <Home routerProps={routerProps} />} />
        <Route path='/activism' render={(routerProps) => <Activism routerProps={routerProps} />} />
      </Switch>  
    </div>
  );
}

export default App;
