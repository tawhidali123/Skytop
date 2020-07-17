import React, {useState, useEffect} from 'react'
import {Route, Switch, Link} from 'react-router-dom';

import Home from './components/Home';
import Activism from './components/Activism'
import Article from './components/Article'

function App() {

  let [state, setState] = useState([])

    useEffect(() => {
        fetch(`http://localhost:1337/categories`)
        .then(res => res.json())
        .then(resp => {
            for(let res of resp){
                setState(res)
            }
        })
    }, [])


  return (
    <div>
      <Switch>
        <Route exact path='/' exact render={(routerProps) => <Home routerProps={routerProps} />} />
        <Route exact path='/activism' render={(routerProps) => <Activism routerProps={routerProps} />} />
        
        <Route path="/article/:slug">
          <Article />
        </Route>
      </Switch>  
    </div>
  );
}

export default App;
