import React, {useState, useEffect} from 'react'
import {Route, Switch, Link} from 'react-router-dom';

import Home from './components/Home';
import Activism from './components/Activism'
import Csr from './components/Csr'
import InvestManagement from './components/InvestManagement'
import CapitalMarkets from './components/CapitalMarkets'
import Resilience from './components/Resilience'

import Article from './components/Article'
import Conference from './components/Conference'
 

function App() {

  return (
    <div>
      <Switch>
        <Route exact path='/' exact render={(routerProps) => <Home routerProps={routerProps} />} />
        <Route exact path='/activism' render={(routerProps) => <Activism routerProps={routerProps} />} />
        <Route exact path='/csrSustainability' render={(routerProps) => <Csr routerProps={routerProps} />} />
        <Route exact path='/investmentManagement' render={(routerProps) => <InvestManagement routerProps={routerProps} />} />
        <Route exact path='/capitalMarkets' render={(routerProps) => <CapitalMarkets routerProps={routerProps} />} />
        <Route exact path='/resilienceInnovationCyber' render={(routerProps) => <Resilience routerProps={routerProps} />} />

        
        <Route exact path="/article/:slug">
          <Article />
        </Route>

        <Route exact path="/conference/:slug">
          <Conference />
        </Route>

      </Switch>  
    </div>
  );
}

export default App;
